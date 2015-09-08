jQuery(document).ready(function($) {
	var headerContainer = $('.headerContainer');
	// lazy loader INIT
	//var layzr = new Layzr();

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

	var isLateralNavAnimating = false;

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
});
