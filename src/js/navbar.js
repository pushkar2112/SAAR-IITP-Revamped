const breakpoint_lg = 960;
const breakpoint_xsm = 446;

$('body').ready(() => {

    enable_smoothscroll();
    listen_mouseevents();

    // changes the navbar layout on resizing
    $(window).on('resize load', () => {
        $('body').css('overflow-y', 'auto');

        if (window.innerWidth <= breakpoint_lg) {
            $('nav.navbar')
            .prependTo($('body'))
            .css('pointer-events', 'none')
            .css('opacity', 0);

            $('nav.navbar .alum-portal')
            .addClass('link');

        } else {
            $('nav.navbar')
            .appendTo('.landing .main')
            .css('pointer-events', 'all')
            .css('opacity', 1);

            $('nav.navbar .alum-portal')
            .removeClass('link');
        }

        if (window.innerWidth <= breakpoint_xsm){
            $('.landing .main h5').appendTo('.landing .main');
        }else{
            $('.landing .main .open-menu').appendTo('.landing .main');
        }

        listen_mouseevents();
    })

    $('nav.navbar').on('scroll', function () {
        if(window.innerWidth <= breakpoint_lg && $(this).scrollTop() > 0){
            $('nav.navbar .close-menu').addClass('scrolled');
        }else{
            $('nav.navbar .close-menu').removeClass('scrolled');
        }
    });

});

function open_menu() {
    $('body').css('overflow-y', 'hidden');
    $('nav.navbar')
    .css('pointer-events', 'all')
    .css('top', String($('body').scrollTop()) + 'px')
    .animate({ 'opacity': 1 }, 200);
}

function close_menu() {
    if (window.innerWidth <= breakpoint_lg) {
        $('body').css('overflow-y', 'auto');
        $('nav.navbar')
        .css('pointer-events', 'none')
        .animate({ 'opacity': 0 }, 200, () => $('nav.navbar .links').scrollTop(0));
    }
}

function enable_smoothscroll() {

    // code for smooth-scrolling
    $('a[data-link-to]').click(function(e) {
        e.preventDefault();
        console.log(this);

        $('body').animate({
            scrollTop: $('.' + $(this).attr('data-link-to'))[0].offsetTop
        }, 500);
    });


    // [[ could've used css for this but i was
    // making sure that it works on all browsers ]]
}

function listen_mouseevents(){
    // hover aimation triggers

    // [[ i just toggled a class so that
    // it can be easier to change the animations
    // for different screen sizes]]

    $('nav.navbar .links *').off('mouseenter mouseleave');

    $('nav.navbar .link').mouseenter(function() {
        $(this).addClass('focus')
        .siblings('.link').addClass('unfocus');
    });

    $('nav.navbar .link').mouseleave(function() {
        $(this).removeClass('focus')
        .siblings('.link').removeClass('unfocus');
    });
}