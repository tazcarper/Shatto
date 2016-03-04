/**
 * jQuery Unveil
 * A very lightweight jQuery plugin to lazy load images
 * http://luis-almeida.github.com/unveil
 *
 * Licensed under the MIT license.
 * Copyright 2013 Luís Almeida
 * https://github.com/luis-almeida
 */

(function($) {

  $.fn.unveil = function(threshold, callback) {

    var $w = $(window),
      th = threshold || 0,
      retina = window.devicePixelRatio > 1,
      attrib = retina ? "data-src-retina" : "data-src",
      images = this,
      loaded;

    this.one("unveil", function() {
      var source = this.getAttribute(attrib);
      source = source || this.getAttribute("data-src");
      if (source) {
        this.setAttribute("src", source);
        if (typeof callback === "function") callback.call(this);
      }
    });

    function unveil() {
      var inview = images.filter(function() {
        var $e = $(this);
        if ($e.is(":hidden")) return;

        var wt = $w.scrollTop(),
          wb = wt + $w.height(),
          et = $e.offset().top,
          eb = et + $e.height();

        return eb >= wt - th && et <= wb + th;
      });

      loaded = inview.trigger("unveil");
      images = images.not(loaded);
    }

    $w.on("scroll.unveil resize.unveil lookup.unveil", unveil);

    unveil();

    return this;

  };

})(window.jQuery || window.Zepto);

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
      // console.log('ready')
      window.onbeforeunload = function() {
        window.scrollTo(0, 0);
      }
      $('img').unveil(300);
      var maxHeight = 0,
        halfHeight = 0;

      var widthMatch = matchMedia("all and (max-width: 767px)");
      var widthHandler = function(matchList) {
        if (matchList.matches) {
          // console.log('small')
        } else {
          // Do stuff for larger screens
        }
      };

      widthMatch.addListener(widthHandler);
      widthHandler(widthMatch);

      // browser check
      outdatedBrowser({
        bgColor: '#f25648',
        color: '#ffffff',
        lowerThan: 'transform',
        languagePath: 'your_path/outdatedbrowser/lang/en.html'
      })

      // header scroll
      window.addEventListener('scroll', function(e) {
        // distance from top
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
          //parallax image


          shrinkOn = 200;

        //console.log(distanceY);
        maxHeight = $(window).height() - ($(window).height() * 0.15);
        halfHeight = maxHeight * 0.5;
        // console.log($(window).height());
        // console.log(maxHeight);
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
        // adjust bg of parallax
        if ($('.parallax')[0]) {
          $('.parallax').each(function() {

            var yPos = (($(window).scrollTop() - $(this).offset().top) / $(this).data('speed')),
              coords = '50% ' + yPos + 'px';
            $(this).css({
              backgroundPosition: coords
            });
          });
        }
      });



      //open/close lateral navigation
      $('.cd-nav-trigger').on('click', function(event) {
        event.preventDefault();

        // console.log('clicked')
        //stop if nav animation is running
        if (!isLateralNavAnimating) {
          if ($(this).parents('.csstransitions').length > 0) {
            isLateralNavAnimating = true;
          }

          $('html').toggleClass('navigation-is-open');


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

      // homepage scripts
      if ($('#floatingBottle')[0]) {

        var theH = 0,
          floatingBottle = $('#floatingBottle');

        var bottleWidth = $('#floatingBottle img').width(),
          theBottle = $('#floatingBottle'),
          bottles = 16,
          arrayIndex = 8,
          // Custom rotation order
          customRotation = [9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          screenWidth,
          bottlesArray = Array.apply(null, {
            length: bottles
          }).map(Number.call, Number);
        for (var i = 2; i <= bottlesArray.length; i++) {
          theBottle.append('<img src="/wp-content/themes/shatto-website/dist/images/rotation/' + i + '.png" data-bottleposition="' + i + '">');
        }

        function bottleMouseMove(e) {
          if (floatingBottle.hasClass('start')) {
            var x = e.pageX - $('#floatingBottle').offset().left;
            var bottlePos = customRotation[parseInt(x / screenWidth * customRotation.length)];
            arrayIndex = parseInt(x / screenWidth * customRotation.length);
            // console.log(arrayIndex);
            $('.pod').removeClass('visible');
            if (arrayIndex === 8) {
              $('.pod').removeClass('visible');
            } else if (arrayIndex <= 3) {

              $('.pod1').addClass('visible');
            } else if (arrayIndex <= 7) {
              $('.pod2').addClass('visible');
            } else if (arrayIndex <= 12) {
              $('.pod3').addClass('visible');
            } else if (arrayIndex <= 16) {
              $('.pod4').addClass('visible');
            }
            if ($('.shown').data('bottleposition') !== bottlePos) {
              $('.shown').removeClass('shown');
              theBottle.find("[data-bottleposition='" + bottlePos + "']").addClass('shown');
            }
          }
        }

        function changeIt(i) {
          var origNum = i;
          // console.log('run change it');
          $('.shown').removeClass('shown');
          theBottle.find("[data-bottleposition='" + customRotation[i] + "']").addClass('shown');
          // if not on starting position
          if (i !== 8) {

            if (arrayIndex !== 8 && arrayIndex < 8) {
              origNum++;
              setTimeout(function() {
                changeIt(origNum)
              }, 35);
            } else if (arrayIndex !== 8 && arrayIndex > 8) {
              origNum--;
              setTimeout(function() {
                changeIt(origNum)
              }, 35);
            }

          }
          // if center frame, reset base array index to starting position (8)
          if (i === 8) {
            arrayIndex = 8;
          }
        }

        function rotateBack() {

          changeIt(arrayIndex);



        }
        // if desktop

        function onResize() {
          screenWidth = theBottle.width();
        }


        theBottle.on('mousemove', bottleMouseMove);


        $(window).resize(onResize);
        onResize();


        var waypoints = $('#floatingTrigger').waypoint(function(direction) {
          if (direction === 'down') {
            //$('#mainBottle').css({'max-width':'400px'});
            floatingBottle.addClass('start');
            $('#mainBottle').addClass('shown');



            $('.shadow').addClass('hideIt');

          } else {
            floatingBottle.removeClass('start');
            rotateBack();

            if (!floatingBottle.hasClass('stop')) {
              $('.shadow').removeClass('hideIt');
            }
          }


        }, {
          offset: '-600'
        });
        var stopWay = $('.bottleDetail').waypoint(function(direction) {
          if (direction === 'down' && !floatingBottle.hasClass('stop')) {
            // $('#mainBottle').css({'max-width':'300px'});

            floatingBottle.addClass('stop').removeClass('start').find('a').attr('href', '/products.html#milk');
            rotateBack();
            //$('#mainBottle').wrap('<a href="/products.html#milk"></a>');
            $('.product').each(function(e) {
              $(this).addClass('productShown')
            })
          } else {
            // $('#mainBottle').css({'max-width':'250px'});
            floatingBottle.addClass('start').removeClass('stop').find('a').attr('href', '');
            //$('#mainBottle').unwrap('<a href="/products.html#milk"></a>');

          }
        }, {
          offset: '-650'
        })

      }
      // Events page - Grid init
      if ($('.og-grid')[0]) {
        Grid.init();
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

        $('form').submit(function(event){
          event.preventDefault();
          console.log('submit');

          // var stuffToSend = {'input_values':{}}, myForm = $(this);

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

        var moving = false;

        function productToggle(trigger, elem, switcher) {
          var self = $(this);
          moving = true;

          // FALSE
          if (switcher === false) {
            $('.popUp_info__overlay').removeClass('active');
            $('.popUp_info').removeClass('popUp_info--open');


            trigger.one(transitionEvent,
              function(event) {
                // console.log('done')
                $('.popUp_info').detach().prependTo('body');
                moving = false;
              });

          }
          // TRUE
          else {
            if (Modernizr.mq('(max-width: 767px)')) {
              $('.popUp_info').detach().appendTo(trigger);
            } else {
              $('.popUp_info').detach().appendTo(trigger.parent());
            }

            // AJAX to GET PRODUCT INFO
            trigger.addClass('selected');

            trigger.one(transitionEvent,
              function(event) {

                $('.popUp_info').addClass('popUp_info--open');
                $('.popUp_info__overlay').addClass('active');
                moving = false;

              });


          }

        };



        $('.product').each(function(e) {
          var productID = $(this).data('dialog');

        });
        var moving = false;
        $('.product img').on('click', function(e) {
          var current = $(this).parent();

          var theProduct = current.data('product');

          if (Modernizr.mq('(min-width: 767px)')) {


            if (current.hasClass('selected') && moving === false) {
              // console.log('img click close')
              $('.selected').removeClass('selected');

              productToggle(current, theProduct, false);

            } else {
              if (!moving) {
                $('.selected').removeClass('selected');
                productToggle(current, theProduct, true);
              }
            }

          } else {

            if (!current.hasClass('selected')) {

              // console.log('product clicked');
              $('.selected').removeClass('selected');
              productToggle(current, theProduct, true);

            }
          }
        });
        $('.popUp_info__overlay, .popUp_close').on('click', function(e) {

          $('.selected').removeClass('selected');
          $('.popUp_info__overlay').removeClass('active');
          $('.popUp_info').removeClass('popUp_info--open');
          moving = false;
          e.stopPropagation();
        });

        $(window).load(function() {
          var waypointOffset = 200;
          $('.productImages').each(function(e) {
            var self = $(this);
            self.height(setSectionHeight(self));
          });
          var milk = $('#milk').waypoint(function(direction) {

            if (direction === 'down') {
              if (!$(this.element).hasClass('visible')) {
                $(this.element).addClass('visible');
                $(this.element).find('.product').addClass('reveal');
                // console.log(this.element.id)
                // console.log(setSectionHeight(this.element));
                // $(this.element).find('.productImages').height(setSectionHeight(this.element));
              }
            }
          }, {
            offset: waypointOffset
          });
          var flavoredMilk = $('#flavoredMilk').waypoint(function(direction) {

            if (direction === 'down') {
              if (!$(this.element).hasClass('visible')) {
                $(this.element).addClass('visible');
                $(this.element).find('.product').addClass('reveal');
                // console.log(this.element.id);
                // $(this.element).find('.productImages').height(setSectionHeight(this.element));
              }
            }
          }, {
            offset: '250'
          });
          var iceCream = $('#iceCream').waypoint(function(direction) {

            if (direction === 'down') {
              if (!$(this.element).hasClass('visible')) {
                $(this.element).addClass('visible');
                $(this.element).find('.product').addClass('reveal');
                // console.log(this.element.id);
                // $(this.element).find('.productImages').height(setSectionHeight(this.element));
              }
            }
          }, {
            offset: waypointOffset
          });
          var cheese = $('#cheese').waypoint(function(direction) {


            if (direction === 'down') {
              if (!$(this.element).hasClass('visible')) {
                $(this.element).addClass('visible');
                $(this.element).find('.product').addClass('reveal');
                // console.log(this.element.id);
                // $(this.element).find('.productImages').height(setSectionHeight(this.element));
              }
            }
          }, {
            offset: waypointOffset
          });
          var butter = $('#butter').waypoint(function(direction) {


            if (direction === 'down') {
              if (!$(this.element).hasClass('visible')) {
                $(this.element).addClass('visible');
                $(this.element).find('.product').addClass('reveal');
                // console.log(this.element.id);
                // $(this.element).find('.productImages').height(setSectionHeight(this.element));
              }
            }
          }, {
            offset: waypointOffset
          });

          var nonDairy = $('#nonDairy').waypoint(function(direction) {


            if (direction === 'down') {
              if (!$(this.element).hasClass('visible')) {
                $(this.element).addClass('visible');
                $(this.element).find('.product').addClass('reveal');
                // console.log(this.element.id);
                // $(this.element).find('.productImages').height(setSectionHeight(this.element));
              }
            }
          }, {
            offset: waypointOffset
          });

        });

        function setSectionHeight(section) {
          var self = $(this);
          var largestHeight = 0;
          $(section).children('.product').each(function(e, i) {

            var titleHeight = 70;

            var itsHeight = $(i).height() + titleHeight;

            if (itsHeight > largestHeight) {
              largestHeight = itsHeight;
            }
          });
          return largestHeight;
        }
        var heightAdjusted = false;
        $(window).resize(function() {
          if (Modernizr.mq('(min-width: 767px)')) {
            if (!heightAdjusted) {
              $('.productImages').each(function(e) {
                var self = $(this);
                self.height(setSectionHeight(self));
              });
              heightAdjusted = true;
            }
          } else {
            if (heightAdjusted) {
              heightAdjusted = false;
            }

          }


        });
      }

      function makeShadows(section) {
        // console.log(section)
        // $.each($(section + ' .product'), function(){
        // 	console.log(i);
        // 	var self = $(this);

        // 	console.log('main image width');
        // 	console.log(self);

        // 	console.log(self[0].clientWidth);
        // 	var shadowWidth = self[0].clientWidth * 1.625;
        // 	var shadowLeft = shadowWidth  / 2;
        // 	self.find('.bottleShadow').css({'width':shadowWidth});
        // });
      }

      // css3 transition event listener
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

      // $('main').flowtype({
      // 	minimum: 400,
      // 	maximum: 1400,
      // 	minFont: 32,
      // 	maxFont: 32,
      // 	fontRatio: 30
      // });

      // Store Locatore / Find Page
      if ($('.mapContainer')[0]) {

        // $('#jlocator').height($(window).height()-$('.headerMain').height());

        // $(window).resize(function() {
        //   $('#jlocator').height($(window).height()-$('.headerMain').height());
        // }).resize();

        $('#jlocator').jlocator({
          startZoom: 13,
          latitude: 39.0936738,
          longitude: -94.589048
        });
      }


    }); // end ready
  })
);


// fade out on link click

// $('a').click(function(event) {

// 	event.preventDefault();

// 	newLocation = this.href;

// 	$('body').fadeOut(150, newpage);

// });

function newpage() {

  window.location = newLocation;

}