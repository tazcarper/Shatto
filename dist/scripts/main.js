function newpage(){window.location=newLocation}!function(e){e.fn.unveil=function(t,n){function i(){var t=d.filter(function(){var t=e(this);if(!t.is(":hidden")){var n=s.scrollTop(),i=n+s.height(),o=t.offset().top,l=o+t.height();return l>=n-a&&i+a>=o}});o=t.trigger("unveil"),d=d.not(o)}var o,s=e(window),a=t||0,l=window.devicePixelRatio>1,r=l?"data-src-retina":"data-src",d=this;return this.one("unveil",function(){var e=this.getAttribute(r);e=e||this.getAttribute("data-src"),e&&(this.setAttribute("src",e),"function"==typeof n&&n.call(this))}),s.on("scroll.unveil resize.unveil lookup.unveil",i),i(),this}}(window.jQuery||window.Zepto),function(e){e(window,document,window.jQuery)}(function(e,t,n){var i=n("header"),o=!1,s=function(e){n(e).next(".answer").toggleClass("open")};n(function(){function a(e){if(g.hasClass("start")){var t=e.pageX-n("#floatingBottle").offset().left,i=T[parseInt(t/C*T.length)];_=parseInt(t/C*T.length),n(".pod").removeClass("visible"),8===_?n(".pod").removeClass("visible"):3>=_?n(".pod1").addClass("visible"):7>=_?n(".pod2").addClass("visible"):12>=_?n(".pod3").addClass("visible"):16>=_&&n(".pod4").addClass("visible"),n(".shown").data("bottleposition")!==i&&(n(".shown").removeClass("shown"),b.find("[data-bottleposition='"+i+"']").addClass("shown"))}}function l(e){var t=e;n(".shown").removeClass("shown"),b.find("[data-bottleposition='"+T[e]+"']").addClass("shown"),8!==e&&(8!==_&&8>_?(t++,setTimeout(function(){l(t)},35)):8!==_&&_>8&&(t--,setTimeout(function(){l(t)},35))),8===e&&(_=8)}function r(){l(_)}function d(){C=b.width()}function c(e){U.text(e.text()).width(e.width()).css("font",e.css("font"))}function f(e,t,i){n(this);B=!0,i===!1?(n(".popUp_info__overlay").removeClass("active"),n(".popUp_info").removeClass("popUp_info--open"),e.one(M,function(e){n(".popUp_info").detach().prependTo("body"),B=!1})):(Modernizr.mq("(max-width: 767px)")?n(".popUp_info").detach().appendTo(e):n(".popUp_info").detach().appendTo(e.parent()),e.addClass("selected"),e.one(M,function(e){n(".popUp_info").addClass("popUp_info--open"),n(".popUp_info__overlay").addClass("active"),B=!1}))}function p(e){var t=(n(this),0);return n(e).children(".product").each(function(e,i){var o=70,s=n(i).height()+o;s>t&&(t=s)}),t}function h(){var e,n=t.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in i)if(void 0!==n.style[e])return i[e]}e.onbeforeunload=function(){e.scrollTo(0,0)},n("img").unveil(300);var u=0,v=0,m=matchMedia("all and (max-width: 767px)"),w=function(e){e.matches};if(m.addListener(w),w(m),outdatedBrowser({bgColor:"#f25648",color:"#ffffff",lowerThan:"transform",languagePath:"your_path/outdatedbrowser/lang/en.html"}),e.addEventListener("scroll",function(o){var s=e.pageYOffset||t.documentElement.scrollTop,a=200;if(u=n(e).height()-.15*n(e).height(),v=.5*u,s>a)i.addClass("smaller");else{i.hasClass("smaller")&&i.removeClass("smaller")}n(".parallax")[0]&&n(".parallax").each(function(){var t=(n(e).scrollTop()-n(this).offset().top)/n(this).data("speed"),i="50% "+t+"px";n(this).css({backgroundPosition:i})})}),n(".cd-nav-trigger").on("click",function(e){e.preventDefault(),o||(n(this).parents(".csstransitions").length>0&&(o=!0),n("html").toggleClass("navigation-is-open"),n(".headerMain").toggleClass("makeBlack"),n(".cd-navigation-wrapper").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){o=!1}))}),n(".faqContainer .question").on("click",function(e){s(e.target)}),n("#floatingBottle")[0]){for(var C,g=n("#floatingBottle"),b=(n("#floatingBottle img").width(),n("#floatingBottle")),y=16,_=8,T=[9,10,11,12,13,14,15,16,1,2,3,4,5,6,7,8,9],k=Array.apply(null,{length:y}).map(Number.call,Number),x=2;x<=k.length;x++)b.append('<img src="/wp-content/themes/shatto-website/dist/images/rotation/'+x+'.png" data-bottleposition="'+x+'">');b.on("mousemove",a),n(e).resize(d),d();n("#floatingTrigger").waypoint(function(e){"down"===e?(g.addClass("start"),n("#mainBottle").addClass("shown"),n(".shadow").addClass("hideIt")):(g.removeClass("start"),r(),g.hasClass("stop")||n(".shadow").removeClass("hideIt"))},{offset:"-600"}),n(".bottleDetail").waypoint(function(e){"down"!==e||g.hasClass("stop")?g.addClass("start").removeClass("stop").find("a").attr("href",""):(g.addClass("stop").removeClass("start").find("a").attr("href","/products.html#milk"),r(),n(".product").each(function(e){n(this).addClass("productShown")}))},{offset:"-650"})}if(n(".og-grid")[0]&&Grid.init(),n(".contact")[0]){if(Modernizr.mq("(min-width: 767px)")){new NLForm(t.getElementById("nl-form"))}var U=n("<span>").css("display","inline-block").css("word-break","break-all").appendTo("body").css("visibility","hidden");n("textarea").on({input:function(){var e=n(this).val();""!==e&&(U.text(e),n(this).height(e?U.height():"1.1em"))},focus:function(){c(n(this))},keypress:function(e){13==e.which&&e.preventDefault()}})}if(n(".productPage")[0]){var z=0;n(".cap").each(function(e,t){setTimeout(function(){n(t).addClass("shown")},z),z+=65});var B=!1;n(".product").each(function(e){n(this).data("dialog")});var B=!1;n(".product img").on("click",function(e){var t=n(this).parent(),i=t.data("product");Modernizr.mq("(min-width: 767px)")?t.hasClass("selected")&&B===!1?(n(".selected").removeClass("selected"),f(t,i,!1)):B||(n(".selected").removeClass("selected"),f(t,i,!0)):t.hasClass("selected")||(n(".selected").removeClass("selected"),f(t,i,!0))}),n(".popUp_info__overlay, .popUp_close").on("click",function(e){n(".selected").removeClass("selected"),n(".popUp_info__overlay").removeClass("active"),n(".popUp_info").removeClass("popUp_info--open"),B=!1,e.stopPropagation()}),n(e).load(function(){var e=200;n(".productImages").each(function(e){var t=n(this);t.height(p(t))});n("#milk").waypoint(function(e){"down"===e&&(n(this.element).hasClass("visible")||(n(this.element).addClass("visible"),n(this.element).find(".product").addClass("reveal")))},{offset:e}),n("#flavoredMilk").waypoint(function(e){"down"===e&&(n(this.element).hasClass("visible")||(n(this.element).addClass("visible"),n(this.element).find(".product").addClass("reveal")))},{offset:"250"}),n("#iceCream").waypoint(function(e){"down"===e&&(n(this.element).hasClass("visible")||(n(this.element).addClass("visible"),n(this.element).find(".product").addClass("reveal")))},{offset:e}),n("#cheese").waypoint(function(e){"down"===e&&(n(this.element).hasClass("visible")||(n(this.element).addClass("visible"),n(this.element).find(".product").addClass("reveal")))},{offset:e}),n("#butter").waypoint(function(e){"down"===e&&(n(this.element).hasClass("visible")||(n(this.element).addClass("visible"),n(this.element).find(".product").addClass("reveal")))},{offset:e}),n("#nonDairy").waypoint(function(e){"down"===e&&(n(this.element).hasClass("visible")||(n(this.element).addClass("visible"),n(this.element).find(".product").addClass("reveal")))},{offset:e})});var E=!1;n(e).resize(function(){Modernizr.mq("(min-width: 767px)")?E||(n(".productImages").each(function(e){var t=n(this);t.height(p(t))}),E=!0):E&&(E=!1)})}var M=h();n(".mapContainer")[0]&&(n("#jlocator").height(n(e).height()),n(e).resize(function(){n("#jlocator").height(n(e).height())}).resize(),n("#jlocator").jlocator({startZoom:13,latitude:39.0936738,longitude:-94.589048}))})});