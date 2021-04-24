const breakpoint_tablet = 960;

$('body').ready(() => {

    enable_smoothscroll();

    // hover aimation triggers

    // [[ i just toggled a class so that
    // it can be easier to change the animations
    // for different screen sizes]]

    $('nav.navbar .link').mouseenter(function() {
        $(this).siblings().addClass('unfocus');
    });

    $('nav.navbar .link').mouseleave(function() {
        $(this).siblings().removeClass('unfocus');
    });

    // changes the navbar layout on resizing
    $(window).on('resize load', () => {
        $('body').css('overflow-y', 'auto');

        if (window.innerWidth <= breakpoint_tablet) {
            $('nav.navbar')
            .prependTo($('body'))
            .css('pointer-events', 'none')
            .css('opacity', 0);
        } else {
            $('nav.navbar')
            .appendTo('.home .main')
            .css('pointer-events', 'all')
            .css('opacity', 1);
        }
    })

});

function open_menu() {
    $('body').css('overflow-y', 'hidden');
    $('nav.navbar')
    .css('pointer-events', 'all')
    .css('top', String($('body').scrollTop()) + 'px')
    .animate({ 'opacity': 1 }, 200);
}

function close_menu() {
    if (window.innerWidth <= breakpoint_tablet) {
        $('body').css('overflow-y', 'auto');
        $('nav.navbar')
        .css('pointer-events', 'none')
        .animate({ 'opacity': 0 }, 200, () => $('nav.navbar .links').scrollTop(0));
    }
}

function enable_smoothscroll() {

    // code for smooth-scrolling
    $('a[data-link-to').click(function(e) {
        e.preventDefault();

        $('body').animate({
            scrollTop: $('.' + $(this).attr('data-link-to'))[0].offsetTop
        }, 500);
    });


    // [[ could've used css for this but i was
    // making sure that it works on all browsers ]]
}