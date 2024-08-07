 $(document).ready(function() {
 	//menu
 	$('.js-menu').click(function() {
 		$(this).toggleClass('is-open');
 		$('.header__nav').toggleClass('is-show');
 		alert("Где класс сука ? ");
 	});
	//sliders
	$('.js-slider-text').slick({
		dots: false,
		infinite: true,
		speed: 600,
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
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.js-slider-text',
		touchMove: false,
	});

	//popup
	$(".js-open-popup").on("click", function(){
		var link  = $(this).data('link'),
			popup = $('.js-popup[data-popup="' + link + '"]'),
			sliderText = popup.find('.js-slider-pop-text'),
			sliderPic = popup.find('.js-slider-pop-pic'),
			total = popup.find('.slider-pop-text__item').length,
			currentBlock = $('.slide-index__current');


		$("body").addClass('is-hidden');

		popup.addClass('is-active');

		sliderPic.slick({
			dots: false,
			arrows: false,
			infinite: true,
			speed: 600,
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: sliderText,
		});

		$('.slide-index__total').text(total);

		var currentSlide;

		sliderText.on("init", function(slick) {
			var currentSlide = sliderText.find('.slick-current.slick-active').data('slick-index') + 1;
			currentBlock.text(currentSlide);
		});

		sliderText.slick({
			dots: false,
			infinite: true,
			speed: 600,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			cssEase: 'linear',
			asNavFor: sliderPic,
			prevArrow: '.js-arrow-prev',
			nextArrow: '.js-arrow-next'
		});

		sliderText.on('afterChange', function() {
			var currentSlide = sliderText.find('.slick-current.slick-active').data('slick-index') + 1;
			currentBlock.text(currentSlide);
		})

		console.log(sliderText);
		console.log(sliderPic);

		return false;
	});

	$(".js-close").on("click", function(){
		$(this).parents(".js-popup").removeClass('is-active');
		$("body").removeClass('is-hidden');
	});

	//MAP
	var map,
		idMap = document.getElementById('map');
	function initMap() {

		var myLatLng = {lat: 49.407452, lng: 32.035812};

		var map = new google.maps.Map(idMap, {
			zoom: 15,
			center: myLatLng,
			disableDefaultUI: true,
			draggable: true,
			scrollwheel: false,
			styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}],

		});

		var marker = new google.maps.Marker({
			position: {lat: 49.407452, lng: 32.035812},
			map: map,
			title: 'Click to zoom!',
			icon: 'img/svg-copy/mark_icon.svg'
		});


		map.addListener('center_changed', function() {
			// marker.
			window.setTimeout(function() {
			  map.panTo(marker.getPosition());
			}, 3000);
		});

		marker.addListener('click', function() {
			map.setZoom(18);
			map.setCenter(marker.getPosition());
		});


	}

	if(idMap) {
		initMap();
	}
// // content-width
// 	if ( $(window).width() > 960 ) {
// 		var halfWidth = 480;
// 		$('.technology__content').outerWidth(halfWidth);
// 	}
});
