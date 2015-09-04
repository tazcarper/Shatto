// http://gregfranko.com/blog/i-love-my-iife/
(function(library) {
    // Calls the second IIFE and locally passes in the global jQuery, window, and document objects
    library(window, document, window.jQuery);
  }

  (function(window, document, $) {
    var isLateralNavAnimating = false;

    var toggleFAQ = function(faq){
      $(faq).next('.answer').toggleClass('open');
    }

    // on ready
    $(function() {

      // console.log('hi')
      //open/close lateral navigation
      $('.cd-nav-trigger').on('click', function(event){
        event.preventDefault();

        // console.log('clicked')
        // stop if nav animation is running
        if( !isLateralNavAnimating ) {
          if($(this).parents('.csstransitions').length > 0 ) {
            isLateralNavAnimating = true;
          }

          $('html').toggleClass('navigation-is-open');
          // console.log($(window).height());

          $('.headerMain').toggleClass('makeBlack');
          $('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
            // animation is over
            isLateralNavAnimating = false;

          });
        }
      });

      $('.faqContainer .question').on('click',function(event){
        toggleFAQ(event.target);
      });
    }); // end ready
  })
);