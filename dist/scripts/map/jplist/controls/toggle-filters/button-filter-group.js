'use strict';(function($){'use strict'; /** 
	* Button filter group control
	* @type {Object} 
    * @class ButtonFilter - Button filter groups
    * @memberOf jQuery.fn.jplist
	*/jQuery.fn.jplist.controls.ButtonFilterGroup={}; /**
	* Render control html
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @memberOf jQuery.fn.jplist.controls.ButtonFilterGroup
	*/jQuery.fn.jplist.controls.ButtonFilterGroup.render=function(control){var $buttons=control.$control.find('[data-button]'); //in every button: save its data
$buttons.each(function(){$(this).data('selected',false);}); //save data
control.$control.data('$buttons',$buttons);}; /**
	* Get deep link
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @return {string} deep link
	* @memberOf jQuery.fn.jplist.controls.ButtonFilterGroup
	*/jQuery.fn.jplist.controls.ButtonFilterGroup.getDeepLink=function(control){return '';}; /**
	* Set deep link
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @param {string} propName - deep link property name
	* @param {string} propValue - deep link property value
	* @return {jQuery.fn.jplist.models.Status}
	* @memberOf jQuery.fn.jplist.controls.ButtonFilterGroup
	*/jQuery.fn.jplist.controls.ButtonFilterGroup.getStatusByDeepLink=function(control,propName,propValue){return null;}; /**
	* Get control paths
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @param {Array.<jQuery.fn.jplist.models.Path>} paths
	* @memberOf jQuery.fn.jplist.controls.ButtonFilterGroup
	*/jQuery.fn.jplist.controls.ButtonFilterGroup.getPaths=function(control,paths){var $control=control.$control,$buttons=$control.data('$buttons'),$button,dataPath,path;if($buttons){for(var i=0;i<$buttons.length;i++){ //get checkbox
$button=$buttons.eq(i); //get data-path
dataPath=$button.attr('data-path');if(dataPath){ //create path object
path=new jQuery.fn.jplist.models.Path(dataPath,'text'); //add path to the paths list
if(!jQuery.fn.jplist.services.Path.isPathInList(path,paths)){paths.push(path);}}}}}; /**
	* Get control status
	* @param {boolean} isDefault - if true, get default (initial) control status; else - get current control status
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @return {jQuery.fn.jplist.models.Status}
	* @memberOf jQuery.fn.jplist.controls.ButtonFilterGroup
	*/jQuery.fn.jplist.controls.ButtonFilterGroup.getStatus=function(isDefault,control){var $control=control.$control,$buttons=$control.data('$buttons'),data,pathGroup=[],$button,dataPath,status,i,selected;if(isDefault){ //init path group
for(i=0;i<$buttons.length;i++){ //get button
$button=$buttons.eq(i); //get button data
selected=$button.data('selected');if(!!selected){ //get data-path
dataPath=$button.attr('data-path');if(dataPath){pathGroup.push(dataPath);}}}}else { //init path group
for(i=0;i<$buttons.length;i++){ //get button
$button=$buttons.eq(i); //get button data
selected=$button.data('selected');if(!!selected){ //get data-path
dataPath=$button.attr('data-path');if(dataPath){pathGroup.push(dataPath);}}}} //init status related data
data={pathGroup:pathGroup,filterType:'pathGroup'}; //init status
status=new jQuery.fn.jplist.models.Status(control.name,control.action,control.type,data,control.cookies,control.category);return status;}; /**
	* Set control status
	* @param {jQuery.fn.jplist.models.Status} status
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @param {boolean} isCookie - is status restored from cookies
	* @memberOf jQuery.fn.jplist.controls.ButtonFilterGroup
	*/jQuery.fn.jplist.controls.ButtonFilterGroup.setStatus=function(status,control,isCookie){var path,$control=control.$control,$button,$buttons=$control.data('$buttons');if($buttons){ //reset	all buttons
$buttons.each(function(){$(this).removeClass('selected');});if(status.data&&status.data.pathGroup&&$['isArray'](status.data.pathGroup)&&status.data.pathGroup.length>0){for(var i=0;i<status.data.pathGroup.length;i++){ //get path
path=status.data.pathGroup[i];$button=$buttons.filter('[data-path="'+path+'"]');if($button.length>0){$button.addClass('selected');}}}}}; /**
	* Init control events
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @memberOf jQuery.fn.jplist.controls.ButtonFilterGroup
	*/jQuery.fn.jplist.controls.ButtonFilterGroup.initEvents=function(control){var selected,$buttons=control.$control.data('$buttons');if($buttons){$buttons.off('click').on('click',function(){var $button; //get button
$button=$(this); //get selected value
selected=$button.data('selected'); //toggle value
$button.data('selected',!selected);control.events.lastStatus=jQuery.fn.jplist.controls.ButtonFilterGroup.getStatus(false,control);control.$jplistBox.trigger(control.options.force_ask_event,[false]);});}};})(jQuery);
//# sourceMappingURL=button-filter-group.js.map
