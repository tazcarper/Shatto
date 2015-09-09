// http://gregfranko.com/blog/i-love-my-iife/
(function(library) {
    // Calls the second IIFE and locally passes in the global jQuery, window, and document objects
    library(window, document, window.jQuery);
  }

  (function(window, document, $) {
  	var headerContainer = $('.headerContainer');
  	// lazy loader INIT
  	//var layzr = new Layzr();

    var isLateralNavAnimating = false;

    var toggleFAQ = function(faq){
      $(faq).next('.answer').toggleClass('open');
    };

    // on ready
    $(function() {

    	// header scroll
    	window.addEventListener('scroll', function(e) {
    		var distanceY = window.pageYOffset || document.documentElement.scrollTop,
    			shrinkOn = 200;

    		if (distanceY > shrinkOn) {
    			headerContainer.addClass('smaller');
    		} else {
    			if (headerContainer.hasClass('smaller')) {
    				headerContainer.removeClass('smaller');
    			}
    		}
    	});

    	//open/close lateral navigation
    	$('.cd-nav-trigger').on('click', function(event) {
    		event.preventDefault();

    		console.log('clicked')
    		//stop if nav animation is running
    		if( !isLateralNavAnimating ) {
    			if($(this).parents('.csstransitions').length > 0 ) {
    				isLateralNavAnimating = true;
    			}

    			$('html').toggleClass('navigation-is-open');
    			console.log($(window).height());

    			$('.headerMain').toggleClass('makeBlack');
    			$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
    				//animation is over
    				isLateralNavAnimating = false;
    			});
    		}
    	});

      $('.faqContainer .question').on('click', function(event){
        toggleFAQ(event.target);
      });

    }); // end ready
  })
);
