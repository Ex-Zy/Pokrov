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

	$(".js-open-popup").on("click", function(){

		var link  = $(this).data('link'),
		    popup = $('.js-popup[data-popup="' + link + '"]');

		$("body").addClass('is-hidden');

		popup.addClass('is-active');

		$('.js-slider-pop-pic').on('init', function (){}).slick({
			dots: false,
			arrows: false,
			infinite: true,
			speed: 1200,
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: '.js-slider-text',
		});

		$('.js-slider-pop-text').on('init', function (){}).slick({
			dots: false,
			infinite: true,
			speed: 1200,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			cssEase: 'linear',
			asNavFor: '.js-slider-pic',
		});

		return false;
	});
	$(".js-close").on("click", function(){
		$(this).parents(".js-popup").removeClass('is-active');
		$("body").removeClass('is-hidden');
	});
});