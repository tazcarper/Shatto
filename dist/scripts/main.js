"use strict"; /**
 * jQuery Unveil
 * A very lightweight jQuery plugin to lazy load images
 * http://luis-almeida.github.com/unveil
 *
 * Licensed under the MIT license.
 * Copyright 2013 Luís Almeida
 * https://github.com/luis-almeida
 */(function($){$.fn.unveil=function(threshold,callback){var $w=$(window),th=threshold||0,retina=window.devicePixelRatio>1,attrib=retina?"data-src-retina":"data-src",images=this,loaded;this.one("unveil",function(){var source=this.getAttribute(attrib);source=source||this.getAttribute("data-src");if(source){this.setAttribute("src",source);if(typeof callback==="function")callback.call(this);}});function unveil(){var inview=images.filter(function(){var $e=$(this);if($e.is(":hidden"))return;var wt=$w.scrollTop(),wb=wt+$w.height(),et=$e.offset().top,eb=et+$e.height();return eb>=wt-th&&et<=wb+th;});loaded=inview.trigger("unveil");images=images.not(loaded);}$w.on("scroll.unveil resize.unveil lookup.unveil",unveil);unveil();return this;};})(window.jQuery||window.Zepto);(function(library){ // Calls the second IIFE and locally passes in the global jQuery, window, and document objects
library(window,document,window.jQuery);})(function(window,document,$){ // lazy loader INIT
//var layzr = new Layzr();
var isLateralNavAnimating=false;var toggleFAQ=function toggleFAQ(faq){$(faq).next('.answer').toggleClass('open');}; // TEMP JSON
var productJson={"products":{"HG_skim":{"title":"Skim","category":"half-gallon","sizes":["half gallon","Quart"],"image":"/half-gallons/final/large/ShattoMilk_HalfGallon_Skim.png","nutrition":"Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."},"HG_onePercent":{"title":"One Percent","category":"half-gallon","sizes":{'half-gallon':8,'quart':4,'pint':2},"image":"/half-gallons/final/large/ShattoMilk_HalfGallon_1Percent.png","nutrition":"Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."}}}; // on ready
$(function(){var maxHeight=0,halfHeight=0;var widthMatch=matchMedia("all and (max-width: 767px)");var widthHandler=function widthHandler(matchList){if(matchList.matches){ // console.log('small')
}else { // Do stuff for larger screens
}};widthMatch.addListener(widthHandler);widthHandler(widthMatch); // browser check
outdatedBrowser({bgColor:'#f25648',color:'#ffffff',lowerThan:'transform',languagePath:'your_path/outdatedbrowser/lang/en.html'}); // header scroll
window.addEventListener('scroll',function(e){ // distance from top
var distanceY=window.pageYOffset||document.documentElement.scrollTop, //parallax image
shrinkOn=200; //console.log(distanceY);
maxHeight=$(window).height()-$(window).height()*0.15;halfHeight=maxHeight*0.5; // console.log($(window).height());
// console.log(maxHeight);
if(distanceY>shrinkOn){$('body').addClass('smaller');}else {if($('body').hasClass('smaller')){$('body').removeClass('smaller');}var newH=300-distanceY; // $('#floatingBottle').css({
//  'top': newH
// });
} // adjust bg of parallax
if($('.parallax')[0]){$('.parallax').each(function(){var yPos=($(window).scrollTop()-$(this).offset().top)/$(this).data('speed'),coords='50% '+yPos+'px';$(this).css({backgroundPosition:coords});});}}); //open/close lateral navigation
$('.cd-nav-trigger').on('click',function(event){event.preventDefault();$('.cd-navigation-wrapper').addClass("transition"); // console.log('clicked')
//stop if nav animation is running
if(!isLateralNavAnimating){if($(this).parents('.csstransitions').length>0){isLateralNavAnimating=true;}$('html').toggleClass('navigation-is-open');$('.headerMain').toggleClass('makeBlack');$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){ //animation is over
isLateralNavAnimating=false;});}});$('.faqContainer .question').on('click',function(event){toggleFAQ(event.target);}); // homepage scripts
if($('#floatingBottle')[0]){var theH,floatingBottle;var bottleWidth,theBottle,bottles,arrayIndex,currentUrl,customRotation,screenWidth,bottlesArray;var waypoints;var stopWay;(function(){ // for (var i = 2; i <= bottlesArray.length; i++) {
//   theBottle.append('<img src="'+currentUrl+'/dist/images/rotation/' + i + '.png" data-bottleposition="' + i + '">');
// }
var bottleMouseMove=function bottleMouseMove(e){ //console.log('screenwidth ',screenWidth);
if(floatingBottle.hasClass('start')){floatingBottle.addClass('disableTransition');var x=e.pageX-theBottle.offset().left; // Find bottle pos
var bottlePos=customRotation[parseInt(x/370*customRotation.length)];console.log(bottlePos);arrayIndex=parseInt(x/screenWidth*customRotation.length);console.log('arrayindex ',arrayIndex);$('.pod').removeClass('visible');if(arrayIndex===8){$('.pod').removeClass('visible');}else if(arrayIndex<=3){$('.pod1').addClass('visible');}else if(arrayIndex<=7){$('.pod2').addClass('visible');}else if(arrayIndex<=12){$('.pod3').addClass('visible');}else if(arrayIndex<=16){$('.pod4').addClass('visible');}var bottleBgPos='img-'+bottlePos;theBottle.attr('class',function(i,c){return c.replace(/(^|\s)img-\S+/g,'');}).addClass(bottleBgPos); // $('.shown').removeClass('shown');
// theBottle.find("[data-bottleposition='" + bottlePos + "']").addClass('shown');
}}; // bottle turn function
var changeIt=function changeIt(i){var origNum=i;theBottle.attr('class',function(i,c){return c.replace(/(^|\s)img-\S+/g,'');}).addClass('img-'+customRotation[origNum]); // if not on starting position
if(i!==8){if(arrayIndex!==8&&arrayIndex<8){origNum++;setTimeout(function(){changeIt(origNum);},25);}else if(arrayIndex!==8&&arrayIndex>8){origNum--;setTimeout(function(){changeIt(origNum);},25);}} // if center frame, reset base array index to starting position (8)
if(i===8){arrayIndex=8;}};var rotateBack=function rotateBack(){changeIt(arrayIndex);}; // if desktop
var onResize=function onResize(){screenWidth=theBottle.width();};theH=0;floatingBottle=$('#floatingBottle');bottleWidth=$('#floatingBottle').width();theBottle=$('#mainBottle');bottles=16;arrayIndex=8;currentUrl=stylesheet_directory_uri; // Custom rotation order
customRotation=[9,10,11,12,13,14,15,16,1,2,3,4,5,6,7,8,9];bottlesArray=Array.apply(null,{length:bottles}).map(Number.call,Number);theBottle.on('mousemove',bottleMouseMove);$(window).resize(onResize);onResize();waypoints=$('#floatingTrigger').waypoint(function(direction){if(direction==='down'){ //$('#mainBottle').css({'max-width':'400px'});
floatingBottle.addClass('start');$('#mainBottle').addClass('shown');$('.shadow').addClass('hideIt');}else {floatingBottle.removeClass('start disableTransition');rotateBack();if(!floatingBottle.hasClass('stop')){$('.shadow').removeClass('hideIt');}}},{offset:'-600'});stopWay=$('.bottleDetail').waypoint(function(direction){if(direction==='down'&&!floatingBottle.hasClass('stop')){ // $('#mainBottle').css({'max-width':'300px'});
floatingBottle.addClass('stop').removeClass('start disableTransition').find('a').attr('href','/products.html#milk');rotateBack(); //$('#mainBottle').wrap('<a href="/products.html#milk"></a>');
$('.product').each(function(e){$(this).addClass('productShown');});}else { // $('#mainBottle').css({'max-width':'250px'});
floatingBottle.addClass('start').removeClass('stop').find('a').attr('href',''); //$('#mainBottle').unwrap('<a href="/products.html#milk"></a>');
}},{offset:'-650'});})();} // Events page - Grid init
var eventTours=$('.events-tours');if(eventTours[0]){$('.viveVideo').vide({mp4:'http://6344650e56c93a4cbec3-9648dd174d28e6eb0fc37fdb4970a0be.r54.cf2.rackcdn.com/shatto/feedingBarn.mp4',webm:'http://6344650e56c93a4cbec3-9648dd174d28e6eb0fc37fdb4970a0be.r54.cf2.rackcdn.com/shatto/feedingBarn.webm',ogv:'http://6344650e56c93a4cbec3-9648dd174d28e6eb0fc37fdb4970a0be.r54.cf2.rackcdn.com/shatto/feedingBarn.ogv'},{posterType:'none',autoplay:true,position:'50% 100%',volume:1,loop:true,resizing:true});$('.scheduleOverlay').stick_in_parent({'offset_top':60,'parent':eventTours});$('.gallerySlider').slick({dots:false,infinite:true,speed:300,slidesToShow:1,centerMode:true,variableWidth:true,prevArrow:$('.left'),nextArrow:$('.right'),slide:'.slide',focusOnSelect:true}); // $('.gallery').on('click', '.slide', function(e){
//   console.log($(this).find('img'));
// })
var popUp=$('.popUp'),grownElements=$('.slick-track, .galleryButtons'),bigImageEl=$('.popUp .bigImage'),popUpDesc=$('.popUp .description');$('.slide').on('click',function(e){if(Modernizr.mq('(min-width: 767px)')){e.preventDefault();var largeImage=$(this).attr('data-largeImage'),description=$(this).attr('data-desc');bigImageEl.find('img').attr('src',largeImage);popUpDesc.html('').html(description);togglePopUp();}});$('.popUp').on('click','.closePopUP',function(e){togglePopUp();});$('.gallerySlider').on('beforeChange',function(event,slick,currentSlide,nextSlide){console.log(slick['$slides'][nextSlide]);var nextImage=$(slick['$slides'][nextSlide]).attr('data-largeImage');console.log(nextImage);bigImageEl.find('img').attr('src',nextImage);});togglePopUp=function togglePopUp(){if(popUp.hasClass('shown')){popUp.removeClass('shown');grownElements.removeClass('grown');}else {popUp.addClass('shown');grownElements.addClass('grown');}};} // Contact
if($('.contact')[0]){var nlform;var span;(function(){var initSpan=function initSpan(textarea){span.text(textarea.text()).width(textarea.width()).css('font',textarea.css('font'));};if(Modernizr.mq('(min-width: 767px)')){nlform=new NLForm(document.getElementById('nl-form'));}span=$('<span>').css('display','inline-block').css('word-break','break-all').appendTo('body').css('visibility','hidden');$('textarea').on({input:function input(){var text=$(this).val();if(text!==''){span.text(text);$(this).height(text?span.height():'1.1em');}},focus:function focus(){initSpan($(this));},keypress:function keypress(e){if(e.which==13)e.preventDefault();}});$('form').submit(function(event){event.preventDefault();console.log('submit'); // var stuffToSend = {'input_values':{}}, myForm = $(this);
// // find form values and assign for gravity forms
// stuffToSend.input_values.input_1 = myForm.find('input#name').val();
// stuffToSend.input_values.input_2 = myForm.find('select#subject').val();
// stuffToSend.input_values.input_3 = myForm.find('input#message').val();
// stuffToSend.input_values.input_4 = myForm.find('input#email').val();
// $.ajax({
//   url: "/gravityformsapi/forms/1/submissions",
//   method: "POST",
//   data: JSON.stringify(stuffToSend),
//   dataType: "json",
//   processData: false,
//   headers: {"Content-Type":"application/json"}
// }).success(function(data) {
//   if ( data.response.is_valid ) {
//     // hide form
//     contactForm.hide();
//     // show thank you
//     $('.thankYou').html($(data.response.confirmation_message).find('.gform_confirmation_message').text());
//     $('.thankYou').show();
//     // fire analytics event
//     // ga();
//   } else {
//     // handle errors
//   }
// });
});})();}$(document).on('click','a[href*="#"]:not([href="#"])',function(e){if(location.pathname.replace(/^\//,'')===this.pathname.replace(/^\//,'')&&location.hostname===this.hostname){var target=$(this.hash);target=target.length?target:$('[name='+this.hash.slice(1)+']');if(target.length){$('html, body').animate({scrollTop:target.offset().top-90},1000);e.preventDefault();}}}); // Product Page Animation
if($('.productPage')[0]){var time;var cap;var overlay,closeBttn,transEndEventNames,transitionProps,transEndEventName,support;var imagePath;(function(){var loadImage=function loadImage(img){};var overlayToggle=function overlayToggle(){if(overlay.hasClass('open')){overlay.removeClass('open');overlay.addClass('close');var onEndTransitionFn=function onEndTransitionFn(ev){overlay.removeClass('close');if(support.transitions){if(ev.propertyName!=='visibility')return;this.removeEventListener(transEndEventName,onEndTransitionFn);}};if(support.transitions){ // callback for when css transition finishes
overlay.one(transEndEventName,onEndTransitionFn);}else {onEndTransitionFn();}}else if(!overlay.hasClass('open')){ // callback for when css transition finishes
overlay.addClass('open');}}; // listener
time=0;cap=$('.cap');cap.each(function(i,v){setTimeout(function(){$(v).addClass('shown');if(i==cap.length-1){$(' .logo').addClass('shown');}},time);time+=65;});$('.subMenu').stick_in_parent({'offset_top':175}); // product image clicking
overlay=$('.overlay');closeBttn=$('.overlay-close');transEndEventNames={'WebkitTransition':'webkitTransitionEnd','MozTransition':'transitionend','OTransition':'oTransitionEnd','msTransition':'MSTransitionEnd','transition':'transitionend'};transitionProps='webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';transEndEventName=transEndEventNames[Modernizr.prefixed('transition')];support={transitions:Modernizr.csstransitions};$('.overlay').on('click','.overlay-close',function(){overlayToggle();});imagePath=$('.product img').attr('src');imagePath=imagePath.substring(0,imagePath.indexOf('products/'))+'products';$('.product').on('click','img',function(e){var product=$(this),current=$(this).parent(),theProduct=current.data('product'),gotData=false;console.log(product,current,theProduct); // Load image for overlay
if(!gotData){console.log(theProductImage);if(productJson['products'].hasOwnProperty(theProduct)){var theProductImage=productJson['products'][theProduct].image;var productCategory=productJson['products'][theProduct].category;console.log(imagePath);var combinedPath=imagePath+theProductImage;var retinaPath=imagePath+'/2x'+theProductImage;console.log(retinaPath);var srcSetData=combinedPath+" 1x, "+retinaPath+" 2x";console.log(combinedPath);$('#overlay_image').attr({'srcset':srcSetData,'src':combinedPath}).removeClass().addClass(productCategory);}else {$('#overlay_image').attr({'src':imagePath+'/missingImage.png','srcset':''}).removeClass().addClass('missing');} // var jqxhr = $.getJSON("../products.json", function(data) {
//     console.log("success");
//     console.log(data);
//   })
//   .done(function() {
//     console.log("second success");
//   })
//   .fail(function() {
//     console.log("error");
//   })
//   .always(function() {
//     console.log("complete");
//   });
}else {}overlayToggle();});$(window).load(function(){var waypointOffset=200;var milk=$('#milk').waypoint(function(direction){if(direction==='down'){if(!$(this.element).hasClass('visible')){$(this.element).addClass('visible');$(this.element).find('.product').addClass('reveal'); // console.log(this.element.id)
// console.log(setSectionHeight(this.element));
// $(this.element).find('.productImages').height(setSectionHeight(this.element));
}}},{offset:waypointOffset});var flavoredMilk=$('#flavoredMilk').waypoint(function(direction){if(direction==='down'){if(!$(this.element).hasClass('visible')){$(this.element).addClass('visible');$(this.element).find('.product').addClass('reveal'); // console.log(this.element.id);
// $(this.element).find('.productImages').height(setSectionHeight(this.element));
}}},{offset:'250'});var iceCream=$('#iceCream').waypoint(function(direction){if(direction==='down'){if(!$(this.element).hasClass('visible')){$(this.element).addClass('visible');$(this.element).find('.product').addClass('reveal'); // console.log(this.element.id);
// $(this.element).find('.productImages').height(setSectionHeight(this.element));
}}},{offset:waypointOffset});var cheese=$('#cheese').waypoint(function(direction){if(direction==='down'){if(!$(this.element).hasClass('visible')){$(this.element).addClass('visible');$(this.element).find('.product').addClass('reveal'); // console.log(this.element.id);
// $(this.element).find('.productImages').height(setSectionHeight(this.element));
}}},{offset:waypointOffset});var butter=$('#butter').waypoint(function(direction){if(direction==='down'){if(!$(this.element).hasClass('visible')){$(this.element).addClass('visible');$(this.element).find('.product').addClass('reveal'); // console.log(this.element.id);
// $(this.element).find('.productImages').height(setSectionHeight(this.element));
}}},{offset:waypointOffset});var nonDairy=$('#nonDairy').waypoint(function(direction){if(direction==='down'){if(!$(this.element).hasClass('visible')){$(this.element).addClass('visible');$(this.element).find('.product').addClass('reveal'); // console.log(this.element.id);
// $(this.element).find('.productImages').height(setSectionHeight(this.element));
}}},{offset:waypointOffset});});})();} // Store Locatore / Find Page
if($('.mapContainer')[0]){ // $('#jlocator').height($(window).height()-$('.headerMain').height());
// $(window).resize(function() {
//   $('#jlocator').height($(window).height()-$('.headerMain').height());
// }).resize();
$('#jlocator').jlocator({startZoom:13,latitude:39.0936738,longitude:-94.589048});}transitionChange();$(window).on('resize',function(){transitionChange();});}); // end ready
});var breakpoint=767;function transitionChange(e){if(Modernizr.mq('(min-width:'+breakpoint+'px)')){$('.cd-navigation-wrapper').removeClass("transition");$('html').removeClass('navigation-is-open');$('.headerMain').removeClass('makeBlack');}}function newpage(){window.location=newLocation;}
//# sourceMappingURL=main.js.map
