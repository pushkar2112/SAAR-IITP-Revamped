$('body').ready(() => {

    enable__smoothscroll();

    // hover aimation triggers

    // [[ i just toggled a class so that
    // it can be easier to change the animations later ]]

    $('.navbar .link').mouseenter((e) => {
        $('.navbar .link').addClass('unfocus');
        $(e.target).removeClass('unfocus');
    });

    $('.navbar').mouseleave(() => {
        $('.navbar .link').removeClass('unfocus');
    });

});


function enable__smoothscroll() {
    
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