import '../global.js'
import 'jquery-match-height'
import 'slick-carousel'

export const MobileNav = () => {
    var navopener = $('.js-nav-opener'),
    navwrap   = $('.js-nav'),
    links     = navwrap.find('a'),
    navactive = 'js-nav-active';

    navopener.click(function() {
        $('body').toggleClass(navactive);
    });

    $('.js-nav ul li').each(function() {
        var item = $(this);
        var drop = item.find('ul');
        var link = item.find('a').eq(0);
        if(drop.length) {
            item.addClass('hasdrop');
            drop.attr('data-more-content', '');
            if(link.length) link.addClass('hasdrop-a').attr({'data-more': '', 'data-outside': ''});
        }
    });

    links.click(function() {
        $(this).hasClass('hasdrop-a') ? false : $('body').removeClass(navactive);
    });

    $('html').on('click touchstart pointerdown MSPointerDown', function(e) {
        var target = $(e.target);
        if(!target.closest(navopener).length && !target.closest(navwrap).length) {
            $('body').removeClass(navactive);
        }

        if(!(target.closest('[data-outside]').length) && !(target.closest('[data-outside] + [data-more-content]').length)) {
            $('[data-outside]').removeClass('active').next('[data-more-content]').slideUp(200);
        }
    });
}

export const OpenClose = () => {
    $('[data-more]').next('[data-more-content]').hide();

    $('[data-more]').click(function(e) {
        e.preventDefault();
        // $('[data-more]').not(this).removeClass('active').next('[data-more-content]').slideUp(200);
        $(this).hasClass('active') ? $(this).removeClass('active').next('[data-more-content]').slideUp(200) : $(this).addClass('active').next('[data-more-content]').slideToggle(200);
    })

    $('[data-outside] + [data-more-content]').find('a:not(.hasdrop-a)').click(function() {
        $('[data-outside]').removeClass('active').next('[data-more-content]').slideUp(200);
    })
}

export const Tabs = () => {
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $(this).siblings().removeClass('current');
        $("#"+tab_id).siblings().removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })
}

export const MatchHeight = () => {
    $('.js-h1').matchHeight();
    $('.js-h2').matchHeight();
    $('.js-h3').matchHeight();
    $('.js-h4').matchHeight();
}

export const ImgReveal = () => {
    var win = jQuery(window),
        img = jQuery('.js-img-reveal');

    function onScroll() {
        var bar    = img.find('.js-img'),
        top    = win.scrollTop(),
        wh     = win.height();

        if(img.offset().top < top + wh) {
            var bounds = img.get(0).getBoundingClientRect(),
                position = 100 - Math.max(Math.min((bounds.top + bounds.height / 2) / wh * 100, 100), 0);
            bar.css('width', position + '%');
        }
    }

    if (img.length) {
        win.on('scroll', onScroll);
    }
}

export const SlickCarousel = () => {
    $('.js-fade-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.js-fade-slider-nav'
    });

    $('.js-fade-slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: true,
        prevArrow: '<a href="#" class="slick-prev icon-chevron-left"></a>',
        nextArrow: '<a href="#" class="slick-next icon-chevron-right"></a>',
        asNavFor: '.js-fade-slider'
    });

    $('.js-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<a href="#" class="slick-prev icon-chevron-left"></a>',
        nextArrow: '<a href="#" class="slick-next icon-chevron-right"></a>',
    });
}

export const Help = () => {
    $('.js-help').click(function() {
        // $(this).toggleClass('active');
        if($(this).hasClass('active')) {
            $('body').find('.js-will-blur').removeClass('blur');
            $('body').find('.js-help-block').addClass('opacity-0 invisible').removeClass('opacity-100 visible');
            $('body').removeClass('cart-active');
            $(this).removeClass('active');
        } else {
            $('body').find('.js-will-blur').addClass('blur');
            $('body').find('.js-help-block').removeClass('opacity-0 invisible').addClass('opacity-100 visible');
            $('body').addClass('cart-active');
            $(this).addClass('active');
        }
    });
}