(function($){
	'use strict';		
	
	/** 
	* Button text filter group control
	* @type {Object} 
    * @class ButtonFilter - Button text filter groups
    * @memberOf jQuery.fn.jplist
	*/
	jQuery.fn.jplist.controls.ButtonTextFilterGroup = {};

	/**
	* Render control html
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @memberOf jQuery.fn.jplist.controls.ButtonTextFilterGroup
	*/
	jQuery.fn.jplist.controls.ButtonTextFilterGroup.render = function(control){

        var $buttons = control.$control.find('[data-button]')
			,$btn;

        //in every button: save its data
		$buttons.each(function(){	

			//get button
			$btn = $(this);
			
            $btn.data('selected', false);
			$btn.data('dataPath', $btn.attr('data-path'));
			$btn.data('dataText', $btn.attr('data-text'));
		});

		//save data
		control.$control.data('$buttons', $buttons);
	};
	
	/**
	* Status object related data (using in communication with controller)
	* @param {Array.<Object>} textAndPathsGroup - list of Objects like {text: '', path: '', selected: true/false}	
	* @param {string} ignore - ignore characters regex (defined in javascript in control's options)
	* @constructor
	* @function
	*/
	jQuery.fn.jplist.controls.ButtonTextFilterGroup.statusRelatedData = function(textAndPathsGroup, ignore){
				
		return {
			textAndPathsGroup: textAndPathsGroup
			,ignore: ignore
			,filterType: 'textFilterPathGroup' //used in controller to define filter type
		};
	};
	
	/**
	* Get deep link
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @return {string} deep link
	* @memberOf jQuery.fn.jplist.controls.ButtonTextFilterGroup
	*/
	jQuery.fn.jplist.controls.ButtonTextFilterGroup.getDeepLink = function(control){

        return '';
	};
	
	/**
	* Set deep link
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @param {string} propName - deep link property name
	* @param {string} propValue - deep link property value
	* @return {jQuery.fn.jplist.models.Status}
	* @memberOf jQuery.fn.jplist.controls.ButtonTextFilterGroup
	*/
	jQuery.fn.jplist.controls.ButtonTextFilterGroup.getStatusByDeepLink = function(control, propName, propValue){
		
		return null;
	};
	
	/**
	* Get control paths
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @param {Array.<jQuery.fn.jplist.models.Path>} paths
	* @memberOf jQuery.fn.jplist.controls.ButtonTextFilterGroup
	*/
	jQuery.fn.jplist.controls.ButtonTextFilterGroup.getPaths = function(control, paths){

        var $control = control.$control
			,$buttons = $control.data('$buttons')
			,$button
			,dataPath
			,path;

		if($buttons){
			for(var i=0; i<$buttons.length; i++){

				//get checkbox
				$button = $buttons.eq(i);

				//get data-path
				dataPath = $button.attr('data-path');

				if(dataPath){

					//create path object
					path = new jQuery.fn.jplist.models.Path(dataPath, 'text');

					//add path to the paths list
					if(!jQuery.fn.jplist.services.Path.isPathInList(path, paths)){
						paths.push(path);
					}
				}
			}
		}
	};
	
	/**
	* Get control status
	* @param {boolean} isDefault - if true, get default (initial) control status; else - get current control status
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @return {jQuery.fn.jplist.models.Status}
	* @memberOf jQuery.fn.jplist.controls.ButtonTextFilterGroup
	*/
	jQuery.fn.jplist.controls.ButtonTextFilterGroup.getStatus = function(isDefault, control){

        var $control = control.$control
			,$buttons = $control.data('$buttons')
			,data
			,textAndPathsGroup = []
			,$button
			,status
			,ignore = ''
            ,i
            ,selected;

		if(control.controlTypeOptions && control.controlTypeOptions.ignore){
		 
			//get ignore characters
			ignore = control.controlTypeOptions.ignore;
		}
		
		if(isDefault){

			//init path group
			for(i=0; i<$buttons.length; i++){

				//get button
				$button = $buttons.eq(i);

				//get button data
				selected = $button.data('selected');

				textAndPathsGroup.push({
					selected: !!selected
					,text: $button.data('dataText')
					,path: $button.data('dataPath')
				});
			}
		}
		else{

			//init path group
			for(i=0; i<$buttons.length; i++){

				//get button
				$button = $buttons.eq(i);

                //get button data
				selected = $button.data('selected');				
				
				textAndPathsGroup.push({
					selected: !!selected
					,text: $button.data('dataText')
					,path: $button.data('dataPath')
				});
			}
		}
		
		//init status related data
		data = new jQuery.fn.jplist.controls.ButtonTextFilterGroup.statusRelatedData(textAndPathsGroup, ignore);
		
		//init status
		status = new jQuery.fn.jplist.models.Status(control.name, control.action, control.type, data, control.cookies, control.category);

		return status;
	};
	
	/**
	* Set control status
	* @param {jQuery.fn.jplist.models.Status} status
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @param {boolean} isCookie - is status restored from cookies
	* @memberOf jQuery.fn.jplist.controls.ButtonTextFilterGroup
	*/
	jQuery.fn.jplist.controls.ButtonTextFilterGroup.setStatus = function(status, control, isCookie){

        var textAndPath
			,$control = control.$control
			,$button
			,$buttons = $control.data('$buttons');

		if($buttons){
			
			//reset	all buttons
			$buttons.each(function(){
                $(this).removeClass('selected');
			});

			if(status.data && status.data.textAndPathsGroup && $['isArray'](status.data.textAndPathsGroup) && status.data.textAndPathsGroup.length > 0){

				for(var i=0; i<status.data.textAndPathsGroup.length; i++){

					//get "text and path" object
					textAndPath = status.data.textAndPathsGroup[i];
					
					$button = $buttons.filter('[data-path="' + textAndPath.path + '"][data-text="' + textAndPath.text + '"]');
					
					if($button.length > 0){
					
						//update button data
						$button.data('selected', textAndPath.selected);
						
						if(textAndPath.selected){
							$button.addClass('selected');							
						}
						else{
							$button.removeClass('selected');
						}
					}
				}
			}
		}
	};
	
	/**
	* Init control events
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @memberOf jQuery.fn.jplist.controls.ButtonTextFilterGroup
	*/
	jQuery.fn.jplist.controls.ButtonTextFilterGroup.initEvents = function(control){
		
		var selected
            ,$buttons = control.$control.data('$buttons');

        if($buttons){

            $buttons.off('click').on('click', function(){
				
                var $button = $(this);
				
                //get selected value
			    selected = $button.data('selected');

                //toggle value
			    $button.data('selected', !selected);
				
                control.events.lastStatus = jQuery.fn.jplist.controls.ButtonTextFilterGroup.getStatus(false, control);
			    control.$jplistBox.trigger(control.options.force_ask_event, [false]);

            });
        }
	};
	
	
})(jQuery);

