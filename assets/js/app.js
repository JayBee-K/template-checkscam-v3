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
            });
        }
    }
    $(function () {
        handleSliderHero();
    });
})(jQuery);
