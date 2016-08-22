'use strict';(function($){'use strict';/** 
	* autocomplete control
	* @type {Object} 
	* @name AutocompleteRadius
    * @class AutocompleteRadius Control
    * @memberOf jQuery.fn.jplist.controls
	*/jQuery.fn.jplist.controls.AutocompleteRadius={};/**
	* render control html
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @memberOf jQuery.fn.jplist.controls.AutocompleteRadius
	*/jQuery.fn.jplist.controls.AutocompleteRadius.render=function(control){var autocomplete,$input,$select,zoom,options={};//get jquery elements
$input=control.$control.find('input');$select=control.$control.find('select');if(control.controlTypeOptions){options=control.controlTypeOptions;}//init autocomolete
autocomplete=new google.maps.places.Autocomplete($input.get(0),options);//init zoom
zoom=Number(control.$control.attr('data-zoom'));if(isNaN(zoom)){zoom=17;}//add data
control.$control.data('jlocator-autocomplete-with-radius',autocomplete);control.$control.data('jlocator-autocomplete-with-radius-input',$input);control.$control.data('jlocator-autocomplete-with-radius-select',$select);control.$control.data('jplist-autocomplete-with-radius-zoom',zoom);};/**
	* init events
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @memberOf jQuery.fn.jplist.controls.AutocompleteRadius
	*/jQuery.fn.jplist.controls.AutocompleteRadius.initEvents=function(control){var autocomplete,listenerHandle=control.$control.data('jplist-handle2'),$input,$select;//get autocomplete
autocomplete=control.$control.data('jlocator-autocomplete-with-radius');$input=control.$control.data('jlocator-autocomplete-with-radius-input');$select=control.$control.data('jlocator-autocomplete-with-radius-select');//remove listener
if(listenerHandle){google.maps.event.removeListener(listenerHandle);}//add listener
listenerHandle=google.maps.event.addListener(autocomplete,'place_changed',function(){var place,lat,lng;//get choosen place
place=autocomplete.getPlace();//set latitude and longitude
if(place.geometry){lat=place.geometry.location['lat']();lng=place.geometry.location['lng']();control.$control.attr('data-latitude',lat);control.$control.attr('data-longitude',lng);control.$control.attr('data-name',place.name);//trigger jump to map event
control.$jplistBox.trigger('jumpEvent',[lat,lng,control.$control.data('jplist-autocomplete-with-radius-zoom')]);}//send panel redraw event
control.$jplistBox.trigger(control.options.force_ask_event,[false]);});if($input.length>0&&$select.length>0){$input.off('keyup').on('keyup',function(e){var val;//get val
val=$.trim($(this).val());if(val===''){control.$control.attr('data-latitude','');control.$control.attr('data-longitude','');//send panel redraw event
control.$jplistBox.trigger(control.options.force_ask_event,[false]);}});//init select change
$select.change(function(){//send panel redraw event
control.$jplistBox.trigger(control.options.force_ask_event,[false]);});}//save handler
control.$control.data('jplist-handle2',listenerHandle);};/**
	* get current control status
	* @param {boolean} isDefault - if true, get default (initial) control status; else - get current control status
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @return {jQuery.fn.jplist.models.Status}
	* @memberOf jQuery.fn.jplist.controls.AutocompleteRadius
	*/jQuery.fn.jplist.controls.AutocompleteRadius.getStatus=function(isDefault,control){var status=null,latitude,longitude,data,units,$select,distanceValue,distanceInMeters;//get attributes
latitude=control.$control.attr('data-latitude');longitude=control.$control.attr('data-longitude');units=control.$control.attr('data-units');//get select
$select=control.$control.data('jlocator-autocomplete-with-radius-select');if($select.length>0){//check if distance is a number
distanceValue=parseFloat($select.val());if(!isNaN(distanceValue)){if(units&&units.toString()==='km'){distanceInMeters=distanceValue*1000;}else{//miles
//get distance in meters: 1 Mile = 1609.34 meters
distanceInMeters=distanceValue*1609.34;}data={name:control.$control.attr('data-name'),radius:distanceInMeters,filterType:'autocomplete'};if(isDefault){data.latitude='';data.longitude='';status=new jQuery.fn.jplist.models.Status(control.name,control.action,control.type,data,true);}else{if($.isNumeric(latitude)&&$.isNumeric(longitude)){data.latitude=latitude;data.longitude=longitude;status=new jQuery.fn.jplist.models.Status(control.name,control.action,control.type,data,true);}}}}return status;};})(jQuery);
//# sourceMappingURL=autocomplete-radius.js.map
