$(document).ready(function() {

	$('.js-slider-text').slick({
		dots: false,
		infinite: true,
		speed: 1200,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		cssEase: 'linear',
		asNavFor: '.js-slider-pic',
		touchMove: false,
	});

	$('.js-slider-pic').slick({
		dots: false,
		arrows: false,
		infinite: true,
		speed: 1200,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.js-slider-text',
		touchMove: false,
	});

});