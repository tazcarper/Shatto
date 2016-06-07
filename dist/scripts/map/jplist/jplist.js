'use strict'; /**
* @license jQuery jPList Plugin ##VERSION## 
* Copyright 2013 Miriam Zusin. All rights reserved.
* To use this file you must to buy a licence at http://codecanyon.net/user/no81no/portfolio 
*/ /*global jQuery:false */(function(jQuery){'use strict'; /**
    * jQuery definition to anchor JsDoc comments.
    * @see <a href="http://jquery.com/" title="" target="_blank">jquery.com</a>
    * @name jQuery
    * @class jQuery Library
    */ /**
    * jQuery 'fn' definition to anchor JsDoc comments.
    * @see <a href="http://jquery.com/" title="" target="_blank">jquery.com</a>
    * @name fn
    * @class jQuery Library
    * @memberOf jQuery
    */ /** 
	* jplist constructor 
	* @param {Object} userOptions - jplist user options
	* @param {jQueryObject} $this - jplist container
	* @constructor 
	*/var Init=function Init(userOptions,$this){var self={controller:null};self.options=jQuery.extend(true,{ //main options
items_box:'.list',item_path:'.list-item',panel_path:'.panel',no_results:'.jplist-no-results',redraw_callback:'' //animate to top
,animate_to_top:'' //auto - top panel, html, body
,animate_to_top_duration:1000 //events
,ask_event:'jplist.ask' //event from panel to controller: ask to rebuild item container's html
,answer_event:'jplist.answer' //event from controller to panel after html rebuild
,force_ask_event:'jplist.forceAsk' //event to panel -> panel sends ask event
,restore_event:'jplist.restore' //event to panel -> restore panel from event data (statuses array)
,status_event:'jplist.status' //event to panel -> get all statuses and merge them with the given status, then send ask event			
,rebuild_panel_event:'jplist.rebuildPanel' //event to panel -> rebuild panel controls and paths
//additional action events
,sort_event:'jplist.sort' //event from controller -> sort action occurred
,filter_event:'jplist.filter' //event from controller -> filter action occurred
,pagination_event:'jplist.pagination' //event from controller -> pagination action occurred
//deep linking events
,change_url_deep_links_event:'jplist.changeUrlDeepLinks' //event to panel -> get deep links from all panel controls and change url
,set_deep_links_event:'jplist.setDeepLinks' //event to panel -> set panel controls statuses by their deep links
//collection events
,add_item_event:'jplist.addItem' //event from collection - items is added to collection
,del_item_event:'jplist.delItem' //event from collection - items is deleted from collection
,collection_ready_event:'jplist.collectionReady' //event from controller - when collection is ready
//cookies
,cookies:false,expiration:-1 //cookies expiration in minutes (-1 = cookies expire when browser is closed)
,cookie_name:'jplist' //deep linking
,deep_linking:false //data source
,dataSource:{type:'html' //'html', 'server', 'jsFunction'
//data source server side
,server:{ //ajax settings
ajax:{url:'server.php',dataType:'html',type:'POST' //,cache: false
},serverOkCallback:null,serverErrorCallback:null,preloaderPath:'.preloader'} //data source function
,jsFunction:{jsFunctionName:null,preloaderPath:'.preloader',options:{}}} //panel controls
,control_types:{'default-sort':{class_name:'DefaultSort',options:{}},'drop-down':{class_name:'Dropdown',options:{}},'label':{class_name:'Label',options:{}},'counter':{class_name:'Counter',options:{ignore:'[~!@#$%^&*()+=`\'"\/\\_]+' //[^a-zA-Z0-9]+ not letters/numbers: [~!@#$%^&*\(\)+=`\'"\/\\_]+
}},'placeholder':{class_name:'Placeholder',options:{ //paging
paging_length:7,jump_to_start:false //arrows
,prev_arrow:'&lt;',next_arrow:'&gt;',first_arrow:'&lt;&lt;',last_arrow:'&gt;&gt;'}},'reset':{class_name:'Reset',options:{}},'select':{class_name:'Select',options:{}},'textbox':{class_name:'Textbox',options:{eventName:'keyup',ignore:'[~!@#$%^&*()+=`\'"\/\\_]+' //[^a-zA-Z0-9]+ not letters/numbers: [~!@#$%^&*\(\)+=`\'"\/\\_]+							
}},'views':{class_name:'Views',options:{}} //TOGGLE FILTERS ------------------------
,'checkbox-filters':{class_name:'CheckboxFilter',options:{}},'checkbox-group-filter':{class_name:'CheckboxGroupFilter',options:{}},'checkbox-text-filter':{class_name:'CheckboxTextFilter',options:{ignore:'' //regex for the characters to ignore, for example: [^a-zA-Z0-9]+
}},'button-filter':{class_name:'ButtonFilter',options:{}},'button-filter-group':{class_name:'ButtonFilterGroup',options:{}},'button-text-filter':{class_name:'ButtonTextFilter',options:{ignore:'[~!@#$%^&*()+=`\'"\/\\_]+' //[^a-zA-Z0-9]+ not letters/numbers: [~!@#$%^&*\(\)+=`\'"\/\\_]+
}},'button-text-filter-group':{class_name:'ButtonTextFilterGroup',options:{ignore:'[~!@#$%^&*()+=`\'"\/\\_]+' //[^a-zA-Z0-9]+ not letters/numbers: [~!@#$%^&*\(\)+=`\'"\/\\_]+
}},'radio-buttons-filters':{class_name:'RadioButtonsFilter',options:{}},'range-filter':{class_name:'RangeSliderToggleFilter',options:{}}}},userOptions); //init controller		
self.controller=new jQuery.fn.jplist.controller.Controller($this,self.options);return jQuery.extend(this,self);}; /** 
	* jPList main contructor
	* @example
	* <pre>
	* $('#demo').jplist({	
	*	items_box: '.list' 
	*	,item_path: '.list-item'
	*	,panel_path: '.panel'
	* });
	* </pre>
	* @param {Object} userOptions - jplist user options
	* @name jplist
    * @class jQuery jPList Plugin
    * @memberOf jQuery.fn	
	*/jQuery.fn.jplist=function(userOptions){return this.each(function(){var self=new Init(userOptions,jQuery(this));jQuery(this).data('jplist',self);});}; //NAMESPACES -----------------------------------------------------------------------------------------------
/**
	* Models Namespace
	* @type {Object}
	* @namespace
	*/jQuery.fn.jplist.models=jQuery.fn.jplist.models||{}; /**
	* Services Namespace
	* @type {Object}
	* @namespace
	*/jQuery.fn.jplist.services=jQuery.fn.jplist.services||{}; /**
	* View Namespace
	* @type {Object}
	* @namespace
	*/jQuery.fn.jplist.view=jQuery.fn.jplist.view||{}; /**
	* Actions Namespace
	* @type {Object}
	* @namespace
	*/jQuery.fn.jplist.actions=jQuery.fn.jplist.actions||{}; /**
	* Controller Namespace
	* @type {Object}
	* @namespace
	*/jQuery.fn.jplist.controller=jQuery.fn.jplist.controller||{}; /**
	* Controls Namespace
	* @type {Object}
	* @namespace
	*/jQuery.fn.jplist.controls=jQuery.fn.jplist.controls||{}; /**
	* Addons Namespace
	* @type {Object}
	* @namespace
	*/jQuery.fn.jplist.addons=jQuery.fn.jplist.addons||{};})(jQuery);
//# sourceMappingURL=jplist.js.map
