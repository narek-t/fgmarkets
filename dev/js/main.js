$(document).ready(function() {
	var stepsSlider = new Swiper ('.steps-slider', {
		loop: true,
		slidesPerView: 3,
		nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 80,
        breakpoints: {
        	992: {
        		spaceBetween: 40,
        	},
        	768: {
        		slidesPerView: 1,
        	},
        }
	});
	$(".toggle-mobile").click(function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
		$(".nav-row ul").toggleClass('active');
	});
	var clientssSlider = new Swiper ('.clients-slider', {
		loop: true,
		slidesPerView: 4,
		nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 80,
        breakpoints: {
        	992: {
        		spaceBetween: 40,
        	},
        	768: {
        		slidesPerView: 2,
        	},
        	480: {
        		slidesPerView: 1,
        	},
        }
	});
});