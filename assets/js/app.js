(function ($) {
	'use strict';
	const handleSliderHero = function () {
		if ($('#slider-hero').length) {
			new Swiper('#slider-hero .swiper', {
				speed: 500,
				slidesPerView: 1,
				preloadImages: false,
				effect: 'fade',
				loop: true,
				autoplay: {
					delay: 8000,
					disableOnInteraction: false,
				},
				navigation: {
					nextEl: "#slider-hero .slider-button_next",
					prevEl: "#slider-hero .slider-button_prev",
				},
				pagination: {
					el: "#slider-hero .slider-pagination",
					clickable: true,
				},
			});
		}
	}

	let initClipboardCopy = function (value) {
		let createTextarea = document.createElement('textarea');
		createTextarea.style.cssText = 'position: absolute; left: -99999px';
		createTextarea.setAttribute("id", "textareaCopy");
		document.body.appendChild(createTextarea);
		let textareaElm = document.getElementById('textareaCopy');
		textareaElm.value = value;
		textareaElm.select();
		textareaElm.setSelectionRange(0, 99999);
		document.execCommand("copy");
		textareaElm.remove();
	}
	$(function () {
		handleSliderHero();
		$(document).on('click', '.copy-value', function () {
			if ($(this).attr('data-value') != undefined) {
				initClipboardCopy($(this).attr('data-value'));
			} else {
				initClipboardCopy($(this).parent().find('input').val());
			}
		});
	});
})(jQuery);
