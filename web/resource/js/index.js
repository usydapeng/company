$(function() {
	$('.banner').unslider({
		speed: 700,               //  The speed to animate each slide (in milliseconds)
		delay: 3000,              //  The delay between slide animations (in milliseconds)
		//complete: function() {},  //  A function that gets called after every slide animation
		fluid: true,              //  Support responsive design. May break non-responsive designs
		keys: true,               //  Enable keyboard (left, right) arrow shortcuts
		dots: true,               //  Display dot navigation
		arrows: true
	});

});