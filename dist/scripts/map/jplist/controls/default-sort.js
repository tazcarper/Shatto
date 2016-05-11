'use strict';(function($){'use strict'; /** 
	* 'Default sort' control - used instead of 'sort dropdown' control, to define the inital sort order.
	* @type {Object} 
    * @class 'Default sort' control - used instead of 'sort dropdown' control, to define the inital sort order.
    * @memberOf jQuery.fn.jplist
	*/jQuery.fn.jplist.controls.DefaultSort={}; /**
	* Status object related data for sort (using in communication with controller)
	* @param {string} dataPath - textbox data-path attribute
	* @param {string} type - text, number or datetime
	* @param {string} order - 'asc' or 'desc'
	* @param {string} dateTimeFormat - like {day}.{month}.{year} //{year}, {month}, {day}, {hour}, {min}, {sec}
	* @param {string} ignore - ignore regex
	* @constructor
	* @function
	*/jQuery.fn.jplist.controls.DefaultSort.statusRelatedDataSort=function(dataPath,type,order,dateTimeFormat,ignore){return {path:dataPath,type:type,order:order,dateTimeFormat:dateTimeFormat,ignore:ignore};}; /**
	* Get control paths
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @param {Array.<jQuery.fn.jplist.models.Path>} paths
	* @memberOf jQuery.fn.jplist.controls.DefaultSort
	*/jQuery.fn.jplist.controls.DefaultSort.getPaths=function(control,paths){var jqPath,dataType,path; //init vars
jqPath=control.$control.attr('data-path');dataType=control.$control.attr('data-type'); //init path
if(jqPath&&$.trim(jqPath)!==''){ //init path
path=new jQuery.fn.jplist.models.Path(jqPath,dataType);if(!jQuery.fn.jplist.services.Path.isPathInList(path,paths)){paths.push(path);}}}; /**
	* Get control status
	* @param {boolean} isDefault - if true, get default (initial) control status; else - get current control status
	* @param {jQuery.fn.jplist.view.PanelControl} control
	* @return {jQuery.fn.jplist.models.Status}
	* @memberOf jQuery.fn.jplist.controls.DefaultSort
	* @static
	*/jQuery.fn.jplist.controls.DefaultSort.getStatus=function(isDefault,control){var data,status;data=new jQuery.fn.jplist.controls.DefaultSort.statusRelatedDataSort(control.$control.attr('data-path'),control.$control.attr('data-type'),control.$control.attr('data-order'),control.$control.attr('data-datetime-format'),control.$control.attr('data-ignore'));status=new jQuery.fn.jplist.models.Status(control.name,control.action,control.type,data,control.cookies,control.category);return status;};})(jQuery);
//# sourceMappingURL=default-sort.js.map
