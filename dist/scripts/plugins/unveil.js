"use strict"; /**
 * jQuery Unveil
 * A very lightweight jQuery plugin to lazy load images
 * http://luis-almeida.github.com/unveil
 *
 * Licensed under the MIT license.
 * Copyright 2013 Luís Almeida
 * https://github.com/luis-almeida
 */;(function($){$.fn.unveil=function(threshold,callback){var $w=$(window),th=threshold||0,retina=window.devicePixelRatio>1,attrib=retina?"data-src-retina":"data-src",images=this,loaded;this.one("unveil",function(){ // var regImg = $('img.main').attr('srcset').substring(0, $('img.main').attr('srcset').indexOf(','));
// regImg = regImg.substring(0, regImg.indexOf(' 1x'));
// var retinaImg = $('img.main').attr('srcset').substring($('img.main').attr('srcset').indexOf(', ') + 2, $('img.main').attr('srcset').length);
// retinaImg = retinaImg.substring(0, retinaImg.indexOf(' 2x'));
var source=this.getAttribute(attrib);source=source||this.getAttribute("data-src");if(source){this.setAttribute("src",source);if(typeof callback==="function")callback.call(this);}});function unveil(){var inview=images.filter(function(){var $e=$(this);if($e.is(":hidden"))return;var wt=$w.scrollTop(),wb=wt+$w.height(),et=$e.offset().top,eb=et+$e.height();return eb>=wt-th&&et<=wb+th;});loaded=inview.trigger("unveil");images=images.not(loaded);}$w.on("scroll.unveil resize.unveil lookup.unveil",unveil);unveil();return this;};})(window.jQuery||window.Zepto);
//# sourceMappingURL=unveil.js.map
