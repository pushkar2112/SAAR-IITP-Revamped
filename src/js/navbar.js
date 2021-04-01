const breakpoint_tablet = 920;

$('body').ready(() => {

    enable_smoothscroll();

    // hover aimation triggers

    // [[ i just toggled a class so that
    // it can be easier to change the animations
    // for different screen sizes]]

    $('.navbar .link').mouseenter((e) => {
        $('.navbar .link').addClass('unfocus');
        $(e.target).removeClass('unfocus');
    });

    $('.navbar .link').mouseleave(() => {
        $('.navbar .link').removeClass('unfocus');
    });

    $(window).on('resize load', () => {
        $('body').css('overflow-y', 'auto');

        if(window.innerWidth <= breakpoint_tablet){
            $('nav.navbar').prependTo($('body'));

            $('.navbar').css('pointer-events', 'none');
            $('.navbar').css('opacity', 0);
        }else{
            $('nav.navbar').appendTo('.home .main');
            
            $('.navbar').css('pointer-events', 'all');
            $('.navbar').css('opacity', 1);
        }
    })

});

function open_menu(){
    $('body').css('overflow-y', 'hidden');
    $('.navbar').css('pointer-events', 'all');
    $('.navbar').animate({'opacity': 1}, 200);
}

function close_menu(){
    $('body').css('overflow-y', 'auto');
    $('.navbar').css('pointer-events', 'none');
    $('.navbar').animate({'opacity': 0}, 200);
}

function enable_smoothscroll() {
    
    // code for smooth-scrolling
    const root = $('html, body');
    $(document).on('click', 'a[data-href]', function (event) {
        event.preventDefault();
    
        root.animate({
            scrollTop: $('.' + $(event.target).attr('data-href')).offset().top
        }, 500);
    });

    
    // [[ could've used css for this but i was
    // making sure tha it works on all browsers ]]
}