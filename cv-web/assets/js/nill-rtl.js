var $window = $(window);
var $root = $('html, body');

$(document).ready(function() {

    "use strict";

    colorScheme();
    menuToggler();
    sliderOwlCarousel();
    swiperSlider();
    typedJS();
    skills();
    countup();
    portfolioPopup();
    mapInit();
    validateEmail();
    sendEmail();
    $('.owl-item.active .hero-slide').addClass('zoom');


});

$window.on("load", (function() {
    $("#overlayer").delay(500).fadeOut('slow');
    $(".loader").delay(1000).fadeOut('slow');
    pagePilling();
    portfolioIsotop();
}));

/*-----------------------------------------------------------------------------
                                   FUNCTIONS
-----------------------------------------------------------------------------*/

/*-------------------------
       Page Pilling
-------------------------*/
function pagePilling() {

    "use strict";

    var ids = [];
    var tooltips = [];
    var colors = [];
    $('.section').each(function() {
        ids.push(this.id);
        tooltips.push($(this).data("navigation-tooltip"));
        colors.push($(this).data("navigation-color"));
    });
    $('#pagepiling').pagepiling({
        sectionsColor: colors,
        anchors: ids,
        menu: '#myMenu',
        direction: 'vertical',
        verticalCentered: true,
        navigation: {
            'position': 'left',
            'tooltips': tooltips
        },
        loopBottom: true,
        loopTop: true,
        scrollingSpeed: 700,
        easing: 'swing',
        css3: true,
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: true,
        //events
        afterRender: function() {},
        afterLoad: function(anchorLink, index) {}
    });
}

/*-------------------------
        Color Scheme
-------------------------*/
function colorScheme() {

    "use strict";

    $('.color-scheme').click(function() {
        $("body").toggleClass('nill-dark');
        $('.section').toggleClass('bg-dark');
        $(this).children().toggleClass('lni-night lni-sun');
    });
}
/*-------------------------
    MENU TOGGLER
-------------------------*/
function menuToggler() {

    "use strict";

    $(".header-info-area").click(function() {
        $('.overlay-menu').toggleClass("show");
    });
}

/*--------------------------
    HERO BACKGROUND IMAGE
---------------------------*/
var hero01 = $('.hero-01');
var backgrounImage = hero01.data("background-image");
hero01.css('background', 'url(' + backgrounImage + ') no-repeat');

/*---------------------------
    FOOTER BACKGROUND IMAGE
---------------------------*/
var footer = $('.footer');
var backgrounImage = footer.data("background-image");
footer.css('background', 'url(' + backgrounImage + ') no-repeat');


/*-----------------------------
      SLIDER OWL CAROUSEL
------------------------------*/
function sliderOwlCarousel() {
    "use strict";

    $('.hero .owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        dots: false,
        rtl: true,
        autoplay: true,
        touchDrag: true,
        smartSpeed: 5000,
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
    });
    $('#hero-slider').on("translate.owl.carousel", function() {
        setTimeout(function() {
            $('.hero-slide').removeClass("zoom");
        }, 1000)
    });
    $('#hero-slider').on("translated.owl.carousel", function() {
        $('.owl-item.active .hero-slide').addClass("zoom");
    });
}

/*-----------------------------
     HERO SWIPER SLIDER
------------------------------*/
function swiperSlider() {

    "use strict";

    if ($(".swiper-container").length) {
        var swiper = new Swiper('.swiper-container', {
            effect: "slide",
            allowTouchMove: 'false',
            touchRatio: 0,
            threshold: 992,
            autoplay: {
                delay: 5000,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        var textSwiper = new Swiper('.text-swiper', {
            effect: "fade",
            allowTouchMove: 'false',
            touchRatio: 0,
            threshold: 992,
            autoplay: {
                delay: 5000,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        $(".hero-item-image").css('background', function() {
            var bg = ('url(' + $(this).data("image-src") + ') no-repeat center');
            return bg;
        });
        var $fullscreen = $(".hero-04, .hero-swiper, .hero-text, .hero-images");
        $fullscreen.css("height", $window.height());
    }
}

/*-------------------------
        TYPED JS
-------------------------*/
function typedJS() {

    "use strict";

    var $element = $(".element");
    if ($element.length) {
        var options = {
            strings: $element.attr('data-elements').split(','),
            typeSpeed: 100,
            backDelay: 3000,
            backSpeed: 50,
            loop: true
        };
        var typed = new Typed(".element", options);
    }
}

/*-------------------------
            Skills
-------------------------*/
function skills() {

    "use strict";

    $('.skillbar').each(function() {
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 6000);
    });
}

/*-------------------------
            Count up
  -------------------------*/
function countup() {

    "use strict";

    $('.timer').countTo();
    $('.count-number').removeClass('timer');
}

/*-------------------------
     MAGNIFIC POPUP JS
-------------------------*/
function portfolioPopup() {

    "use strict";

    if (('.portfolio-items').length > 0) {
        $('.portfolio-items').each(function() {
            $(this).magnificPopup({
                delegate: '.js-zoom-gallery',
                type: 'image',
                gallery: {
                    enabled: true
                },
                callbacks: {
                    open: function() {
                        $.fn.pagepiling.setKeyboardScrolling(false);

                    },
                    close: function() {
                        $.fn.pagepiling.setKeyboardScrolling(true);
                    }
                }
            });
        });
    }
}

/*-------------------------
        ISOTOPE JS
-------------------------*/
function portfolioIsotop() {

    "use strict";

    var $container = $('.portfolio-items');
    var $filter = $('#portfolio-filter');
    $container.isotope({
        filter: '*',
        isOriginLeft: false,
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }
    });
    $filter.find('a').on("click", function() {
        var selector = $(this).attr('data-filter');
        $filter.find('a').removeClass('active');
        $(this).addClass('active');
        $container.isotope({
            filter: selector,
            animationOptions: {
                animationDuration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });
}

/*-------------------------
    Testimonial CAROUSEL JS
-------------------------*/
$(".testimonial .owl-carousel").owlCarousel({
    loop: true,
    stagePadding: 5,
    margin: 10,
    nav: true,
    autoplay: false,
    center: false,
    dots: true,
    rtl: true,
    mouseDrag: true,
    touchDrag: true,
    smartSpeed: 1000,
    autoplayHoverPause: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1200: {
            margin: 60,
            items: 2,
        },

    }
});

/*-------------------------
          GOOGLE Map
  -------------------------*/
function mapInit() {

    "use strict";
    var myMap = $('#my-map');

    if (myMap.length) {
        var lat = myMap.data("location-lat");
        var lng = myMap.data("location-lng");
        var options = {
            center: new google.maps.LatLng(lat, lng),
            zoom: 7,
            mapTypeControl: true,
            gestureHandling: 'cooperative',
            panControl: false,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.DEFAULT,
                position: google.maps.ControlPosition.TOP_LEFT
            },
            scaleControl: false,
            styles: [{
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#576ee9"
                }, {
                    "lightness": 17
                }]
            }, {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }, {
                    "lightness": 20
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffffff"
                }, {
                    "lightness": 17
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#ffffff"
                }, {
                    "lightness": 29
                }, {
                    "weight": 0.2
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }, {
                    "lightness": 18
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }, {
                    "lightness": 18
                }]
            }, {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }, {
                    "lightness": 21
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#d5d5d5"
                }, {
                    "lightness": 21
                }]
            }, {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#f8f8f8"
                }, {
                    "lightness": 25
                }]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "saturation": 36
                }, {
                    "color": "#222222"
                }, {
                    "lightness": 30
                }]
            }, {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }, {
                    "lightness": 19
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#fefefe"
                }, {
                    "lightness": 10
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#fefefe"
                }, {
                    "lightness": 17
                }, {
                    "weight": 1.2
                }]
            }],
        };
        var map = new google.maps.Map(document.getElementById('my-map'), options);
        var marker1 = new google.maps.Marker({
            position: map.getCenter(),
            title: $('title').text(),
            icon: myMap.data("location-icon"),
            animation: google.maps.Animation.BOUNCE
        });
        marker1.setMap(map);
    }
}
/*-------------------------
     AJAX CONTACT FORM
-------------------------*/
function validateEmail(email) {

    "use strict";

    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function sendEmail() {

    "use strict";

    var name = $('#name').val();
    var email = $('#email').val();
    //var subject  = $('#subject').val();
    var comments = $('#comments').val();
    $('#submit-btn').on("click", (function() {
        $('#message').toast('show');
    }))

    if (!name) {
        $('#message').toast('show').css("background-color", "#dc3545");
        $('.toast-body').html($('#name').data('name-error'));
    } else if (!email) {
        $('#message').toast('show').css("background-color", "#dc3545");
        $('.toast-body').html($('#email').data('email-error'));
    } else if (!validateEmail(email)) {
        $('#message').toast('show').css("background-color", "#dc3545");
        $('.toast-body').html($('#email').data('email-valid'));
    }
    //else if(!subject){
    //     $('.toast-body').html('Subject is  required');
    // }
    else if (!comments) {
        $('.toast-body').html($('#comments').data('comment-error'));
    } else {
        $.ajax({
            type: 'POST',
            data: $("#contactForm").serialize(),
            url: "sendEmail.php",
            beforeSend: function() {
                $('#submit-btn').html('<span class="spinner-border spinner-border-sm"></span> Loading..');
            },
            success: function(data) {
                $('#submit-btn').html('Submit');
                var myObj = JSON.parse(data);
                if (myObj['status'] == 'Congratulation') {
                    $('#message').toast('show').css("background-color", "#5cb85c");
                    $('.toast-body').html('<strong>' + myObj['status'] + ' : </strong> ' + myObj['message']);
                } else if (myObj['status'] == 'Error') {
                    $('#message').toast('show').css("background-color", "#5cb85c");
                    $('.toast-body').html('<strong>' + myObj['status'] + ' : </strong> ' + myObj['message']);
                } else if (myObj['status'] == 'Warning') {
                    $('#message').toast('show').css("background-color", "#5cb85c");
                    $('.toast-body').html('<strong>' + myObj['status'] + ' : </strong> ' + myObj['message']);
                }
            },
            error: function(xhr) {
                $('#submit-btn').html('Send Message');
                $('.toast-body').html('<strong> Error : </strong> Something went wrong, try again.');
            },
        });
    }
}