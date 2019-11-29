import '../global.js'
import 'jquery-match-height'
import 'slick-carousel'
import 'picturefill'
import '../plugins/retinacover.js'
import Popper from 'popper.js'

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
        var drop = item.find('ul, .dropdown');
        var link = item.find('a').eq(0);
        if(drop.length) {
            item.addClass('hasdrop');
            drop.addClass('dropdown');
            if(link.length) link.addClass('hasdrop-a').attr({'data-opener': '', 'data-outside': ''});
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

        if(!(target.closest('[data-outside]').length) && !(target.closest($('[data-outside]').next()).length)) {
            $('[data-outside]').removeClass('active').next().removeClass('active');
        }
    });
}

export const OpenClose = () => {
    $('[data-opener]').click(function(e) {
        e.preventDefault();
        var el = $(this);
        el.hasClass('active') ? el.removeClass('active').next().removeClass('active') : el.addClass('active').next().addClass('active');

        if(el.next('.dropdown').length) {
            setTimeout(function() {
                var popper = new Popper(el.parent(),(el.next('.dropdown')),{
                    placement: 'top'
                });
            }, 90)
        }

        if(el.next().find('input').length) {
            el.next().find('input').focus();
        }
    });

    $('[data-outside]').next().find('a:not(.hasdrop-a)').click(function() {
        $('[data-outside]').removeClass('active');
    });

    $('[data-id-toggle]').click(function(e){
        e.preventDefault();
        var tab_id = $(this).attr('href');

        $(this).toggleClass('current');
        $(tab_id).toggleClass('current');
    });

    $('[data-cart-opener]').click(function(e){
        e.preventDefault();
        $('body').toggleClass('cart-active');
    });
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

    const settings = {
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<a href="#" class="slick-prev icon-chevron-left"></a>',
        nextArrow: '<a href="#" class="slick-next icon-chevron-right"></a>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: "unslick"
            }
        ]
    }
    const sl =  $('.js-slider-desktop').slick(settings);
    $(window).on('resize', function() {
       if( $(window).width() > 767 &&  !sl.hasClass('slick-initialized')) {
             $('.js-slider-desktop').slick(settings);
        }
    });


    var win = jQuery(window);
    jQuery('[data-slick-mobile]').each(function() {
        var holder = jQuery(this);
        var holderClasses = holder.attr('class');
        var holderHtml = holder.html();
        var mode = null;
        
        var refresh = function() {
            switch(mode) {
                case 'desktop':
                holder.attr('class',holderClasses)
                .html(holderHtml);
                break;
                case 'mobile':
                holder.slick({
                    slidesToScroll: 1,
                    rows: 0,
                    arrows: true,
                    dots: true,
                    adaptiveHeight: true,
                    infinite: true,
                    // autoplay: true,
                    autoplaySpeed: 2000,
                    prevArrow: '<a href="#" class="slick-prev icon-chevron-left"></a>',
                    nextArrow: '<a href="#" class="slick-next icon-chevron-right"></a>',
                });
                break;
            }
        };
        var resizeHandler = function() {
            if (window.innerWidth > 767) {
                if (mode !== 'desktop') {
                    mode = 'desktop';
                    refresh();
                }
                MatchHeight();
            } else {
                if (mode !== 'mobile') {
                    mode = 'mobile';
                    refresh();
                }
            }
        };
        win.on('resize orientationchange', resizeHandler);
        resizeHandler();
    });
    jQuery('[data-slick-mobile]').on( 'touchend touchcancel touchmove', function() { jQuery(this).slick('slickPlay'); } );
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

export const Modal = () => {
    $('[data-modal]').on('click', function() {
        $('body').addClass('modal-active');
        $('.modal').removeClass('show');
        $($(this).attr('href')).addClass('show');
        return false;
    });

    jQuery('.modal .close').click(function(e) {
        e.preventDefault();
        $('body').removeClass('modal-active');
        $('.modal').removeClass('show');
    });

    jQuery('html').on('click touchstart pointerdown MSPointerDown', function(e) {
        var target = jQuery(e.target);
        if(!target.closest('.modal-box').length) {
            $('body').removeClass('modal-active');
            $('.modal').removeClass('show');
        }
    });
}

export const BgStretch = () => {
    $('[data-bg]').retinaCover();
}