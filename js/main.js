(function ($) {

"use strict";

    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });

        // WOW

        if ($(".wow").length) {

            var wow = new WOW({

                boxClass: 'wow',      // animated element css class (default is wow)

                animateClass: 'animated', // animation css class (default is animated)

                offset: 20,          // distance to the element when triggering the animation (default is 0)

                mobile: true,       // trigger animations on mobile devices (default is true)

                live: true,       // act on asynchronously loaded content (default is true)

            });

            wow.init();

        }

        //  AOS

        if ($("[data-aos]").length) {

            AOS.init({

                duration: 1000,

                mirror: true

            });

        }

        // nice select

        if ($.fn.niceSelect) {
            $('.select-option, .select-country').niceSelect();
        }

        // Search

        $('body').click(function () {
            if ($('.header-search-form').hasClass("header-search-form-open")) {
                $('.header-search-form').toggleClass("header-search-form-open");
            }
        });
        $('.search-trigger').click(function (e) {
            e.stopPropagation()
            $('.header-search-form').toggleClass("header-search-form-open");
        });
        $('.header-search-form').click(function (e) {
            e.stopPropagation();
        });

        $(window).on('scroll', function () {

            var scroll = $(window).scrollTop();

            if (scroll < 245) {

                $("#header-sticky").removeClass("sticky-bar");

            } else {

                $("#header-sticky").addClass("sticky-bar");

            }

        });

        // owl Carousel

        $('.product_slider').owlCarousel({
            nav: true,
            items: 3,
            margin: 30,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            autoplay: true,
            loop: true,
            responsiveClass: true,
            responsive: {
                300: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1170: {
                    items: 3
                }
            }
        });

        // owl Carousel

        $('.single-shop-slide').owlCarousel({
            loop: true,
            items: 1,
            margin: 30,
            autoplay: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        });


        // owl Carousel

        $('.testimonials-active').owlCarousel({
            nav: true,
            items: 2,
            margin: 30,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            autoplay: true,
            loop: true,
            responsiveClass: true,
            responsive: {
                300: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 2
                },
                1170: {
                    items: 2
                }
            }
        });

        //ScrollUp

        $.scrollUp({
            scrollText: '<i class="fa fa-arrow-up"></i>',
            easingType: 'linear',
            scrollSpeed: 900,
            zIndex: 8888,
            animation: 'fade'
        });

        jQuery(window).on("load", function() {  
            //preloader
            $('.preloader').fadeOut(1000);
        });


})(jQuery);