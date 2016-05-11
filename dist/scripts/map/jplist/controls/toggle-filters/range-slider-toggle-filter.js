'use strict';(function($){'use strict'; /** 
	* Range slider toggle filter control
	* @type {Object} 
    * @class ButtonFilter - Range slider toggle filter
    * @memberOf jQuery.fn.jplist
	*/jQuery.fn.jplist.controls.RangeSliderToggleFilter={}; /**
	* Render control html
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @memberOf jQuery.fn.jplist.controls.RangeSliderToggleFilter
	*/jQuery.fn.jplist.controls.RangeSliderToggleFilter.render=function(control){var path,prev,next; //get data path
path=control.$control.attr('data-path');prev=control.$control.attr('data-min');next=control.$control.attr('data-max');control.$control.data('selected',false);if(path){control.$control.data('path',path);}if(prev&&$.isNumeric(prev)){control.$control.data('prev',prev);}if(next&&$.isNumeric(next)){control.$control.data('next',next);}}; /**
	* Get deep link
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @return {string} deep link
	* @memberOf jQuery.fn.jplist.controls.RangeSliderToggleFilter
	*/jQuery.fn.jplist.controls.RangeSliderToggleFilter.getDeepLink=function(control){return '';}; /**
	* Set deep link
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @param {string} propName - deep link property name
	* @param {string} propValue - deep link property value
	* @return {jQuery.fn.jplist.models.Status}
	* @memberOf jQuery.fn.jplist.controls.RangeSliderToggleFilter
	*/jQuery.fn.jplist.controls.RangeSliderToggleFilter.getStatusByDeepLink=function(control,propName,propValue){return null;}; /**
	* Get control paths
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @param {Array.<jQuery.fn.jplist.models.Path>} paths
	* @memberOf jQuery.fn.jplist.controls.RangeSliderToggleFilter
	*/jQuery.fn.jplist.controls.RangeSliderToggleFilter.getPaths=function(control,paths){var jqPath,path; //ger data-path attribute
jqPath=control.$control.attr('data-path'); //init path
if(jqPath&&$.trim(jqPath)!==''){path=new jQuery.fn.jplist.models.Path(jqPath,'number');if(!jQuery.fn.jplist.services.Path.isPathInList(path,paths)){paths.push(path);}}}; /**
	* Get control status
	* @param {boolean} isDefault - if true, get default (initial) control status; else - get current control status
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @return {jQuery.fn.jplist.models.Status}
	* @memberOf jQuery.fn.jplist.controls.RangeSliderToggleFilter
	*/jQuery.fn.jplist.controls.RangeSliderToggleFilter.getStatus=function(isDefault,control){var selected,data,status=null,path,prev,next;if(isDefault){selected=false;}else { //get selected value
selected=control.$control.data('selected');} //get data
path=control.$control.data('path');prev=control.$control.data('prev');next=control.$control.data('next');if(path){if(selected){data={path:path,type:'number',filterType:'range',min:0,max:0,prev:prev,next:next,selected:selected};}else {data={path:path,type:'text',filterType:'',selected:selected};} //init status
status=new jQuery.fn.jplist.models.Status(control.name,control.action,control.type,data,control.cookies,control.category);}return status;}; /**
	* Set control status
	* @param {jQuery.fn.jplist.models.Status} status
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @param {boolean} isCookie - is status restored from cookies
	* @memberOf jQuery.fn.jplist.controls.RangeSliderToggleFilter
	*/jQuery.fn.jplist.controls.RangeSliderToggleFilter.setStatus=function(status,control,isCookie){ //update 'data'
control.$control.data('selected',status.data.selected); //update class
if(status.data.selected){control.$control.addClass('selected');}else {control.$control.removeClass('selected');}}; /**
	* Init control events
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @memberOf jQuery.fn.jplist.controls.RangeSliderToggleFilter
	*/jQuery.fn.jplist.controls.RangeSliderToggleFilter.initEvents=function(control){var selected; /**
         * control on click
         */control.$control.off().click(function(){ //get selected value
selected=control.$control.data('selected'); //toggle value
control.$control.data('selected',!selected); //update class
if(selected){control.$control.removeClass('selected');}else {control.$control.addClass('selected');} //trigger force ask event
control.$jplistBox.trigger(control.options.force_ask_event,[false]);});};})(jQuery);
//# sourceMappingURL=range-slider-toggle-filter.js.map
