// http://gregfranko.com/blog/i-love-my-iife/
(function(library) {
		// Calls the second IIFE and locally passes in the global jQuery, window, and document objects
		library(window, document, window.jQuery);
	}

	(function(window, document, $) {
		var headerContainer = $('header');
		// lazy loader INIT
		//var layzr = new Layzr();

		var isLateralNavAnimating = false;

		var toggleFAQ = function(faq) {
			$(faq).next('.answer').toggleClass('open');
		};

		// on ready
		$(function() {
			var maxHeight = 0,
				halfHeight = 0;
			// header scroll
			window.addEventListener('scroll', function(e) {
				var distanceY = window.pageYOffset || document.documentElement.scrollTop,
					shrinkOn = 200;
				//console.log(distanceY);
				maxHeight = $(window).height() - ($(window).height() * 0.15);
				halfHeight = maxHeight * 0.5;
				console.log($(window).height());
				console.log(maxHeight);
				if (distanceY > shrinkOn) {
					headerContainer.addClass('smaller');

				} else {
					if (headerContainer.hasClass('smaller')) {
						headerContainer.removeClass('smaller');
					}
					var newH = 300 - distanceY;
					// $('#floatingBottle').css({
					// 	'top': newH
					// });
				}
			});

			//open/close lateral navigation
			$('.cd-nav-trigger').on('click', function(event) {
				event.preventDefault();

				console.log('clicked')
					//stop if nav animation is running
				if (!isLateralNavAnimating) {
					if ($(this).parents('.csstransitions').length > 0) {
						isLateralNavAnimating = true;
					}

					$('html').toggleClass('navigation-is-open');
					console.log($(window).height());

					$('.headerMain').toggleClass('makeBlack');
					$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
						//animation is over
						isLateralNavAnimating = false;
					});
				}
			});

			$('.faqContainer .question').on('click', function(event) {
				toggleFAQ(event.target);
			});

			if ($('#floatingBottle')[0]) {
				var theH = 0;
				var floatingBottle = $('#floatingBottle');
				var waypoints = $('#floatingTrigger').waypoint(function(direction) {
					console.log(direction)
					if (direction === 'down') {
						//$('#mainBottle').css({'max-width':'400px'});
						floatingBottle.addClass('start');
						
						
					
						$('.shadow').addClass('hidden');

					} else {
						//$('#mainBottle').css({'max-width':'250px'});
						floatingBottle.removeClass('start').css({
							'margin-top': '0'
						});

						if (!floatingBottle.hasClass('stop')) {
							$('.shadow').removeClass('hidden');
						}
					}


				}, {
					offset: '-200'
				});
				var stopWay = $('.bottleDetail').waypoint(function(direction) {
					console.log(direction)
					if (direction === 'down' && !floatingBottle.hasClass('stop')) {
						// $('#mainBottle').css({'max-width':'300px'});
						floatingBottle.css({
							'top': 'inherit'
						});
						floatingBottle.addClass('stop').removeClass('start');
						$('.shadow').addClass('hidden');
					} else {
						// $('#mainBottle').css({'max-width':'250px'});
						floatingBottle.addClass('start').removeClass('stop');
					}
				}, {
					offset: '-700'
				})
			}

			// Contact
			if ($('.contact')[0]) {
				if (Modernizr.mq('(min-width: 767px)')) {
					var nlform = new NLForm(document.getElementById('nl-form'));
				}
				var span = $('<span>').css('display', 'inline-block')
					.css('word-break', 'break-all').appendTo('body').css('visibility', 'hidden');

				function initSpan(textarea) {
					span.text(textarea.text())
						.width(textarea.width())
						.css('font', textarea.css('font'));
				}
				$('textarea').on({
					input: function() {
						var text = $(this).val();
						if (text !== '') {
							span.text(text);
							$(this).height(text ? span.height() : '1.1em');
						}
					},
					focus: function() {
						initSpan($(this));
					},
					keypress: function(e) {
						if (e.which == 13) e.preventDefault();
					}
				});
			}

			// Product Page Animation
			if ($('.productPage')[0]) {
				var time = 0;
				$('.cap').each(function(i, v) {
					setTimeout(function() {
						$(v).addClass('shown');
					}, time);
					time += 65;

				});
				var controller = new ScrollMagic.Controller({
					globalSceneOptions: {
						duration: 0
					}
				});
				// build scene
				var scene = new ScrollMagic.Scene({
						triggerElement: "#milk",
						reverse: false
					})
					.setClassToggle("#milk", "visible") // add class toggle
					//.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
				var scene = new ScrollMagic.Scene({
						triggerElement: "#flavoredMilk",
						reverse: false
					})
					.setClassToggle("#flavoredMilk", "visible") // add class toggle
					//.addIndicators() // add indicators (requires plugin)
					.addTo(controller);


				function productToggle(trigger, elem, switcher) {
					var self = $(this);

					if (!switcher) {
						$('.popUp_info').removeClass('popUp_info--open');
						$('.popUp_info__overlay').removeClass('active');
						console.log('false')
						$('.popUp_info__content').one(transitionEvent,
							function(event) {
								console.log('done')
								$('.popUp_info').detach().prependTo('body');
							});

					} else {
						if (Modernizr.mq('(max-width: 767px)')) {
							$('.popUp_info').detach().appendTo(trigger);
						} else {
							$('.popUp_info').detach().appendTo(trigger.parent());
						}

						// AJAX to GET PRODUCT INFO
						trigger.addClass('selected');
						$('.popUp_info__overlay').addClass('active');
						trigger.one(transitionEvent,
							function(event) {
								$('.popUp_info').addClass('popUp_info--open');

							});

						popUpShown = true;
					}

				};

				var popUpShown = false;

				$('.product').each(function(e) {
					var productID = $(this).data('dialog');

				});
				$('.product').on('click', function(e) {

					var theProduct = $(this).data('product');
					if (Modernizr.mq('(min-width: 767px)')) {
						if ($(this).hasClass('selected')) {
							$('.selected').removeClass('selected');
							productToggle($(this), theProduct, false);

						} else {
							$('.selected').removeClass('selected');
							productToggle($(this), theProduct, true);
							popUpShown = true;
						}
					} else {
						if (!$(this).hasClass('selected')) {
							console.log('product clicked');
							$('.selected').removeClass('selected');
							productToggle($(this), theProduct, true);
							popUpShown = true
						}
					}
				});
				$('.popUp_info__overlay, .popUp_close').on('click', function(e) {

					$('.product').removeClass('selected');
					$('.popUp_info__overlay').removeClass('active');
					$('.popUp_info').removeClass('popUp_info--open');
					popUpShown = false;
					e.stopPropagation();
				});

			}

			function whichTransitionEvent() {
				var t,
					el = document.createElement("fakeelement");

				var transitions = {
					"transition": "transitionend",
					"OTransition": "oTransitionEnd",
					"MozTransition": "transitionend",
					"WebkitTransition": "webkitTransitionEnd"
				}

				for (t in transitions) {
					if (el.style[t] !== undefined) {
						return transitions[t];
					}
				}
			}

			var transitionEvent = whichTransitionEvent();



			//dlgtrigger.addEventListener('click', dlg.toggle.bind(dlg));

			$('main').flowtype({
				minimum: 400,
				maximum: 1400,
				minFont: 18,
				maxFont: 32,
				fontRatio: 30
			});

			if ($('.mapContainer')[0]) {
				$('#jlocator').height($(window).height());
				$(window).resize(function() {
					$('#jlocator').height($(window).height());
				}).resize();
				$('#jlocator').jlocator({
					startZoom: 13,
					latitude: 39.0936738,
					longitude: -94.589048,
					jplist: {



						//panel controls
						control_types: {

							'autocomplete': {
								class_name: 'Autocomplete',
								options: {
									/* 
									Autocomplete control options:
									can be used to limit google autocomplete results to City and Country only
									for example:
									             
									types: ['(cities)']
									,componentRestrictions: {country: 'us'}
									*/
								}
							}
						}
					}

				});
			}


		}); // end ready
	})
);

/*
 * FlowType.JS v1.1
 * Copyright 2013-2014, Simple Focus http://simplefocus.com/
 *
 * FlowType.JS by Simple Focus (http://simplefocus.com/)
 * is licensed under the MIT License. Read a copy of the
 * license in the LICENSE.txt file or at
 * http://choosealicense.com/licenses/mit
 *
 * Thanks to Giovanni Difeterici (http://www.gdifeterici.com/)
 */

(function($) {
	$.fn.flowtype = function(options) {

		// Establish default settings/variables
		// ====================================
		var settings = $.extend({
				maximum: 9999,
				minimum: 1,
				maxFont: 9999,
				minFont: 1,
				fontRatio: 35
			}, options),

			// Do the magic math
			// =================
			changes = function(el) {
				var $el = $(el),
					elw = $el.width(),
					width = elw > settings.maximum ? settings.maximum : elw < settings.minimum ? settings.minimum : elw,
					fontBase = width / settings.fontRatio,
					fontSize = fontBase > settings.maxFont ? settings.maxFont : fontBase < settings.minFont ? settings.minFont : fontBase;
				$el.css('font-size', fontSize + 'px');
			};

		// Make the magic visible
		// ======================
		return this.each(function() {
			// Context for resize callback
			var that = this;
			// Make changes upon resize
			$(window).resize(function() {
				changes(that);
			});
			// Set changes on load
			changes(this);
		});
	};
}(jQuery));