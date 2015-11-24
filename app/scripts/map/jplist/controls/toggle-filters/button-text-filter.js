(function($){
	'use strict';		
	
	/** 
	* Button text filter control
	* @type {Object} 
    * @class ButtonTextFilter - Button text filters
    * @memberOf jQuery.fn.jplist
	*/
	jQuery.fn.jplist.controls.ButtonTextFilter = {};

	/**
	* Render control html
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @memberOf jQuery.fn.jplist.controls.ButtonTextFilter
	*/
	jQuery.fn.jplist.controls.ButtonTextFilter.render = function(control){

		control.$control.data('selected', false);
		control.$control.data('dataPath', control.$control.attr('data-path'));
		control.$control.data('dataText', control.$control.attr('data-text'));
	};
	
	/**
	* Status object related data (using in communication with controller)
	* @param {string} dataPath - data-path attribute
	* @param {string} value - button text filter data-text value
	* @param {string} ignore - ignore characters regex (defined in javascript in control's options)
	* @param {Boolean} selected - if button is selected
	* @constructor
	* @function
	*/
	jQuery.fn.jplist.controls.ButtonTextFilter.statusRelatedData = function(dataPath, value, ignore, selected){
		
		return {
			path: dataPath		
			,ignore: ignore
			,value: value
			,selected: selected
			,filterType: 'text' //used in controller to define filter type
		};
	};
	
	/**
	* Get deep link
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @return {string} deep link
	* @memberOf jQuery.fn.jplist.controls.ButtonTextFilter
	*/
	jQuery.fn.jplist.controls.ButtonTextFilter.getDeepLink = function(control){
		
		var deepLink = ''
			,status
			,isDefault = false;
		
		//get status
		status = jQuery.fn.jplist.controls.ButtonTextFilter.getStatus(isDefault, control);
		
		if(status.data && status.data.selected){
				
			//init deep link
			deepLink = control.name + '--selected=true';
		}
		
		return deepLink;
	};
	
	/**
	* Set deep link
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @param {string} propName - deep link property name
	* @param {string} propValue - deep link property value
	* @return {jQuery.fn.jplist.models.Status}
	* @memberOf jQuery.fn.jplist.controls.ButtonTextFilter
	*/
	jQuery.fn.jplist.controls.ButtonTextFilter.getStatusByDeepLink = function(control, propName, propValue){
		
		var isDefault = true
			,status;
			
		//get status
		status = jQuery.fn.jplist.controls.ButtonTextFilter.getStatus(isDefault, control);
		
		if(status.data){
		
			if(propName === 'selected'){
				
				//set current page
				status.data.selected = true;
			}
		}
		
		return status;
	};
	
	/**
	* Get control paths
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @param {Array.<jQuery.fn.jplist.models.Path>} paths
	* @memberOf jQuery.fn.jplist.controls.ButtonTextFilter
	*/
	jQuery.fn.jplist.controls.ButtonTextFilter.getPaths = function(control, paths){
	
		var jqPath
			,path;		
				
		//ger data-path attribute
		jqPath = control.$control.data('dataPath');
		
		//init path
		if(jqPath && $.trim(jqPath) !== ''){
		
			path = new jQuery.fn.jplist.models.Path(jqPath, 'text');
						
			if(!jQuery.fn.jplist.services.Path.isPathInList(path, paths)){
				paths.push(path);
			}
		}
	};
	
	/**
	* Get control status
	* @param {boolean} isDefault - if true, get default (initial) control status; else - get current control status
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @return {jQuery.fn.jplist.models.Status}
	* @memberOf jQuery.fn.jplist.controls.ButtonTextFilter
	*/
	jQuery.fn.jplist.controls.ButtonTextFilter.getStatus = function(isDefault, control){
		
		var selected
			,data
			,status
			,ignore = ''
			,value = ''
			,dataPath
			,dataText;
		
		//get attributes
		dataPath = control.$control.data('dataPath');
		dataText = control.$control.data('dataText');
		
		if(control.controlTypeOptions && control.controlTypeOptions.ignore){
		 
			//get ignore characters
			ignore = control.controlTypeOptions.ignore;
		}
		
		if(isDefault){
			selected = false;
		}
		else{
			//get selected value
			selected = control.$control.data('selected');
		}
		
		if(selected){
			value = dataText;
		}
		else{
			value = '';
		}
		
		//create status related data object
		data = new jQuery.fn.jplist.controls.ButtonTextFilter.statusRelatedData(dataPath, value, ignore, selected);
		
		//init status
		status = new jQuery.fn.jplist.models.Status(control.name, control.action, control.type, data, control.cookies, control.category);
		
		return status;
	};
	
	/**
	* Set control status
	* @param {jQuery.fn.jplist.models.Status} status
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @param {boolean} isCookie - is status restored from cookies
	* @memberOf jQuery.fn.jplist.controls.ButtonTextFilter
	*/
	jQuery.fn.jplist.controls.ButtonTextFilter.setStatus = function(status, control, isCookie){
		
		//update 'data'
		control.$control.data('selected', status.data.selected);
		
		//update class
		if(status.data.selected){
			control.$control.addClass('selected');
		}
		else{
			control.$control.removeClass('selected');
		}
	};
	
	/**
	* Init control events
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @memberOf jQuery.fn.jplist.controls.ButtonTextFilter
	*/
	jQuery.fn.jplist.controls.ButtonTextFilter.initEvents = function(control){
		
		var selected;

        /**
         * control on click
         */
		control.$control.off().click(function(){
			
			//get selected value
			selected = control.$control.data('selected');
			
			//toggle value
			control.$control.data('selected', !selected);
			
			//update class
			if(selected){
				control.$control.removeClass('selected');
			}
			else{				
				control.$control.addClass('selected');
			}
			
			//trigger force ask event
			control.$jplistBox.trigger(control.options.force_ask_event, [false]);
		});
	};
	
	
})(jQuery);

