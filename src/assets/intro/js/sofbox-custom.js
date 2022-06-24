/*

Template: Sofbox
Author: iqonicthemes.in
Version: 1.0

*/

/*----------------------------------------------
Index Of Script
------------------------------------------------

Page Loader
Back To Top
Header
Scrolling
counter
Owl Carousel
Progress Bar
Parallax
Wow Animation

------------------------------------------------
Index Of Script
----------------------------------------------*/

$(document).ready(function() {

    /*------------------------
         Page Loader
        --------------------------*/
        jQuery("#load").fadeOut();
        jQuery("#loading").delay(0).fadeOut("slow");


        $(".navbar a").on("click", function(event) {
            if (!$(event.target).closest(".nav-item.dropdown").length) {
                $(".navbar-collapse").collapse('hide');
            }
        });

        /*------------------------
         Back To Top
        --------------------------*/
        $('#back-to-top').fadeOut();
        $(window).on("scroll", function() {
            if ($(this).scrollTop() > 250) {
                $('#back-to-top').fadeIn(1400);
            } else {
                $('#back-to-top').fadeOut(400);
            }
        });
        // scroll body to 0px on click
        $('#top').on('click', function() {
            $('top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });


			/*------------------------
                Header add class
            --------------------------*/
            $(document).ready(function() {
                $('.navbar-nav li a').on('click', function() {
                    $('.navbar-nav li a.active').removeClass('active');
                    $(this).addClass('active');
                });
            });

    /*------------------------
    Header
    --------------------------*/
    $('.navbar-nav li a').on('click', function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 0
        }, 1500);
        e.preventDefault();
    });
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('header').addClass('menu-sticky');
        } else {
            $('header').removeClass('menu-sticky');
        }
    });




$(document).ready(function(){
    $('.navbar-nav li a').on('click',function() {
    $('.navbar-nav li a.active').removeClass('active');
    $(this).addClass('active');
});
});




    /*------------------------
    Owl Carousel
    --------------------------*/
    $('.owl-carousel').each(function() {
        var $carousel = $(this);
        $carousel.owlCarousel({
            items: $carousel.data("items"),
            loop: $carousel.data("loop"),
            margin: $carousel.data("margin"),
            nav: $carousel.data("nav"),
            dots: $carousel.data("dots"),
            autoplay: $carousel.data("autoplay"),
            autoplayTimeout: $carousel.data("autoplay-timeout"),
             navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            responsiveClass: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: $carousel.data("items-mobile-sm")
                },
                // breakpoint from 480 up
                480: {
                    items: $carousel.data("items-mobile")
                },
                // breakpoint from 786 up
                786: {
                    items: $carousel.data("items-tab")
                },
                // breakpoint from 1023 up
                1023: {
                    items: $carousel.data("items-laptop")
                },
                1199: {
                    items: $carousel.data("items")
                }
            }
        });
    });






    /*------------------------
        Wow Animation
    --------------------------*/
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();


    /*------------------------
            3 Parallax
    --------------------------*/
    if ($("#scene").length) {
        var scene = document.getElementById('scene');

        var parallaxInstance = new Parallax(scene);
    }



    if ($("#scenethree").length) {
        var scene2 = document.getElementById('scenethree');
        var parallaxInstance = new Parallax(scene2);
    }
     if ($("#scenefour").length) {
        var scene3 = document.getElementById('scenefour');
        var parallaxInstance = new Parallax(scene3);
    }

     function sticky_relocate() {
        var window_top = $(window).scrollTop();
        if ($('#demos-isotop').length && $('rs-module-wrap').length) {
            var div_top = $('rs-module-wrap').offset().top  + 1250;
            if (window_top > div_top) {
                $('#demos-isotop .isotope-filters-fixed').addClass('show');
                $('#demos-isotop .isotope-filters-fixed').addClass('menu-sticky').show();
            } else {
                $('#demos-isotop .isotope-filters-fixed').removeClass('show');
                $('#demos-isotop .isotope-filters-fixed').removeClass('menu-sticky').show();
            }
        }
    }

    setTimeout (function () {

        $(function () {
            $(window).scroll(sticky_relocate);
            sticky_relocate();
        });


        // Isotope

        $('.isotope').isotope({
            itemSelector: '.iq-grid-item',
        });
        $('.isotope-filters').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $('.isotope').isotope({
                resizable: true,
                filter: filterValue
            });
            $('.isotope-filters button').removeClass('active');
            $(this).addClass('active');
        });
        var $msnry = $('.iq-masonry-block .iq-masonry');
        if ($msnry) {
            var $filter = $('.iq-masonry-block .isotope-filters');
            $msnry.isotope({
                percentPosition: true,
                resizable: true,
                itemSelector: '.iq-masonry-block .iq-masonry-item',
                masonry: {
                    gutterWidth: 0
                }
            });
            $filter.on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $msnry.isotope({
                    filter: filterValue
                });
                ;
            });
            $filter.each(function (i, buttonGroup) {
                var $buttonGroup = $(buttonGroup);
                $buttonGroup.on('click', 'button', function () {
                    $buttonGroup.find('.active').removeClass('active');
                    $(this).addClass('active');

                    if (jQuery('.isotope-filters-fixed').hasClass('menu-sticky')) {
                        $('html,body').animate({scrollTop: $(".iq-masonry").offset().top - 200}, 'slow');
                    }

                });

            });
        }

        // more button

        if ($(window).width() > 991) {
            jQuery(function ($) {
                var max_elem = 9;
                if ($(window).width() <= 1299) {
                    max_elem = 5;
                }
                var items = $('#demos-isotop .isotope-filters button');
                var surplus = items.slice(max_elem, items.length);
                surplus.wrapAll('<div class="more-btn hiden_menu"><div class="more-menu">');
                $('.hiden_menu').append('More');
            });
        }

        // counter

        var total = 0;
        $(".isotope-filters").children().each(function (element, index) {
            var cls = $(index).attr('data-filter');
            var number = $(cls).children('.home-block').length;
            total += parseInt(number);
            $(index).children().text("(" + number + ")");
            number = 0;
        });
        $("#total").text("(" + total + ")");
    },700);





});

