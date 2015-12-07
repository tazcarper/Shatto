(function($){
	'use strict';		
	
	/** 
	* autocomplete control
	* @type {Object} 
	* @name Autocomplete
    * @class autocomplete Control
    * @memberOf jQuery.fn.jplist.controls
	*/
	jQuery.fn.jplist.controls.Autocomplete = {};
	
	/**
	* render control html
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @memberOf jQuery.fn.jplist.controls.Autocomplete
	*/
	jQuery.fn.jplist.controls.Autocomplete.render = function(control){
		
		var autocomplete
			,zoom
			,options = {};
			
		if(control.controlTypeOptions){
			options = control.controlTypeOptions;
		}
		
		//init autocomplete
		autocomplete = new google.maps.places.Autocomplete(control.$control.get(0), options);
		
		//init zoom
		zoom = Number(control.$control.attr('data-zoom'));
		
		if(isNaN(zoom)){
			zoom = 17;
		}
					
		//add data
		control.$control.data('jplist-autocomplete', autocomplete);
		control.$control.data('jplist-autocomplete-zoom', zoom);
	};
	
	/**
	* init events
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @memberOf jQuery.fn.jplist.controls.Autocomplete
	*/
	jQuery.fn.jplist.controls.Autocomplete.initEvents = function(control){
	
		var autocomplete
			,listenerHandle = control.$control.data('jplist-handle');
				
		//get autocomplete
		autocomplete = control.$control.data('jplist-autocomplete');
				
		//remove listener
		if(listenerHandle){
			google.maps.event.removeListener(listenerHandle);
		}
		
		//add listener
		listenerHandle = google.maps.event.addListener(autocomplete, 'place_changed', function(){
			
			var place
				,lat
				,lng;
			
			//get choosen place
			place = autocomplete.getPlace();
						
			//set latitude and longitude
			if(place.geometry){
			
				lat = place.geometry.location['lat']();
				lng = place.geometry.location['lng']();
				
				control.$control.attr('data-latitude', lat);
				control.$control.attr('data-longitude', lng);
				control.$control.attr('data-name', place.name);
									
				//trigger jump to map event
				control.$jplistBox.trigger('jumpEvent', [lat, lng, control.$control.data('jplist-autocomplete-zoom')]);
			}
			
			//send panel redraw event
			control.$jplistBox.trigger(control.options.force_ask_event, [false]);
			console.log('auto complete done');
			$('.mapOverlay').addClass('shrink');
		});
		
		control.$control.off('keyup').on('keyup', function(e){	

			var val;
			
			//get val
			val = $.trim($(this).val());
			
			if(val === ''){
				
				control.$control.attr('data-latitude', '');
				control.$control.attr('data-longitude', '');
							
				//send panel redraw event
				control.$jplistBox.trigger(control.options.force_ask_event, [false]);
			}
		});
		
		//save handler
		control.$control.data('jplist-handle', listenerHandle);
	};

    /**
	* Set control status
	* @param {jQuery.fn.jplist.models.Status} status
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @param {boolean} isCookie - is status restored from cookies
	* @memberOf jQuery.fn.jplist.controls.Autocomplete
	*/
	jQuery.fn.jplist.controls.Autocomplete.setStatus = function(status, control, isCookie){

        //console.log(status.data);
	};

	/**
	* get current control status
	* @param {boolean} isDefault - if true, get default (initial) control status; else - get current control status
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @return {jQuery.fn.jplist.models.Status}
	* @memberOf jQuery.fn.jplist.controls.Autocomplete
	*/
	jQuery.fn.jplist.controls.Autocomplete.getStatus = function(isDefault, control){
		
		var status = null
			,latitude
			,longitude
			,data;

        //get attributes
		latitude = control.$control.attr('data-latitude');
		longitude = control.$control.attr('data-longitude');

        data = {
            name: control.$control.attr('data-name')
			,radius: control.$control.attr('data-radius')
            ,filterType: 'autocomplete'
        };

        if(isDefault){

            data.latitude = '';
            data.longitude = '';

            status = new jQuery.fn.jplist.models.Status(control.name, control.action, control.type, data, true);
        }
        else{
            if($.isNumeric(latitude) && $.isNumeric(longitude)){

                data.latitude = latitude;
                data.longitude = longitude;
                status = new jQuery.fn.jplist.models.Status(control.name, control.action, control.type, data, true);
            }
        }

		return status;		
	};
	
	
})(jQuery);

