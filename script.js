$(document).ready(function () {
    /* for sticky navagation */
    $('.js--section-testimonials').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
            offset: '60px'
        });

    /* scroll on button click */
    $('.js--scroll-to-contact').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-form').offset().top }, 1000);
    });

    $('.js--scroll-to-services').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-services').offset().top }, 1000);
    });


    /* Navigation scroll */
    $(function () {
        $('a[href*=\\#]:not([href=\\#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });


    /* ANIMATION ON SCROLL */

    $('.js--wp0').waypoint(function (direction) {
        $('.js--wp0').addClass('animated pulse');
    }, {
            offset: '0%'
        });

    $('.js--wp1').waypoint(function (direction) {
        $('.js--wp1').addClass('animated fadeInRight');
    }, {
            offset: '55%'
        });

    $('.js--wp2').waypoint(function (direction) {
        $('.js--wp2').addClass('animated pulse');
    }, {
            offset: '55%'
        });

    $('.js--wp4').waypoint(function (direction) {
        $('.js--wp4').addClass('animated rubberBand');
    }, {
            offset: '85%'
        });

    $('.js--wp5').waypoint(function (direction) {
        $('.js--wp5').addClass('animated wobble');
    }, {
            offset: '85%'
        });

    /* NAV ANIMATION */

    $('.js--nav-icon').click(function () {

        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon svg');

        nav.slideToggle(200);

        if (icon.hasClass('fa-bars')) {
            icon.addClass('fa-times');
            icon.removeClass('fa-bars');

        } else {
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        }
    });
});



