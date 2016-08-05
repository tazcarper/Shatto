'use strict';(function($){'use strict';/**
	* items number validation
	* @param {number} itemsNumber
	* @return {number}
	*/var getItemsNumber=function getItemsNumber(itemsNumber){var itemsNumberNum;//items number: string -> number		
itemsNumberNum=Number(itemsNumber);if(isNaN(itemsNumberNum)){//if items number is not number -> set items number = 0
itemsNumberNum=0;}return itemsNumberNum;};/**
	* items on page validation
	* @param {number|string} itemsOnPage
	* @param {number} itemsNumber
	* @return {number}
	*/var getItemsOnPage=function getItemsOnPage(itemsOnPage,itemsNumber){var itemsOnPageNumber;if(itemsOnPage===null){//if items on page is not number, set items on page = items number
itemsOnPageNumber=itemsNumber;}else{//items on page: string -> number		
itemsOnPageNumber=Number(itemsOnPage);if(isNaN(itemsOnPageNumber)){//if items on page is not number, set items on page = items number
itemsOnPageNumber=itemsNumber;}}return itemsOnPageNumber;};/**
	* get pages number
	* @param {number} itemsNumber
	* @param {number} itemsOnPage
	* @return {number}
	*/var getPagesNumber=function getPagesNumber(itemsNumber,itemsOnPage){if(!itemsOnPage){return 0;}else{return Math.ceil(itemsNumber/itemsOnPage);}};/**
	* get current page
	* @param {string|number} currentPage
	* @param {number} pagesNumber
	* @return {number}
	*/var getCurrentPage=function getCurrentPage(currentPage,pagesNumber){var currentPageNumber;//current page: string -> number		
currentPageNumber=Number(currentPage);if(isNaN(currentPageNumber)){//if current page is not number, set it as 0
currentPageNumber=0;}if(currentPageNumber>pagesNumber-1){//if current page > pages number, set it as 0
currentPageNumber=0;}return currentPageNumber;};/**
	* get start value
	* @return {number}
	*/var getStart=function getStart(currentPage,itemsOnPage){return currentPage*itemsOnPage;};/**
	* get end value
	* @param {number} start
	* @param {number} itemsOnPage
	* @param {number} itemsNumber
	* @return {number}
	*/var getEnd=function getEnd(start,itemsOnPage,itemsNumber){var end;end=start+itemsOnPage;//if end is not valid
if(end>itemsNumber){end=itemsNumber;}return end;};/**
	* get prev page
	* @param {number} currentPage - current page number
	* @return {number}
	*/var getPrevPage=function getPrevPage(currentPage){if(currentPage<=0){return 0;}else{return currentPage-1;}};/**
	* get next page	
	* @param {number} currentPage - current page number
	* @param {number} pagesNumber
	* @return {number}
	*/var getNextPage=function getNextPage(currentPage,pagesNumber){if(pagesNumber===0){return 0;}else{if(currentPage>=pagesNumber-1){return pagesNumber-1;}else{return currentPage+1;}}};/**
	* Pagination
	* @param {number} currentPage
	* @param {number} itemsOnPage	
	* @param {number} itemsNumber
	* @constructor 
	*
	* @class Pagination related data class
	* @memberOf jQuery.fn.jplist
	* @property {number} itemsNumber - all items number
	* @property {number} itemsOnPage - items number per page
	* @property {number} pagesNumber - pages number
	* @property {number} currentPage - current page number
	* @property {number} start - first item index in the current page
	* @property {number} end - last item index in the current page
	* @property {number} prevPage - previous page number
	* @property {number} nextPage - next page number
	*/jQuery.fn.jplist.actions.Pagination=function(currentPage,itemsOnPage,itemsNumber){//get all items number
this.itemsNumber=getItemsNumber(itemsNumber);//get items on page
this.itemsOnPage=getItemsOnPage(itemsOnPage,this.itemsNumber);//get pages number
this.pagesNumber=getPagesNumber(this.itemsNumber,this.itemsOnPage);//get current page
this.currentPage=getCurrentPage(currentPage,this.pagesNumber);//get start value
this.start=getStart(this.currentPage,this.itemsOnPage);//get end value
this.end=getEnd(this.start,this.itemsOnPage,this.itemsNumber);//get prev page 
this.prevPage=getPrevPage(this.currentPage);//get next page
this.nextPage=getNextPage(this.currentPage,this.pagesNumber);/*
		//if start is not valid
		if(start > end){
			currentPage = 0;
			start = 0;
			end = itemsOnPage;
			
			if(end > itemsNumber){
				end = itemsNumber;
			}
		}
		*/};})(jQuery);
//# sourceMappingURL=pagination.js.map
