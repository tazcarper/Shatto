jQuery(document).ready(function($){
	var isLateralNavAnimating = false;
	console.log('hi')
	//open/close lateral navigation
	$('.cd-nav-trigger').on('click', function(event){
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