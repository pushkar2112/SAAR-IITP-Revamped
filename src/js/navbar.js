$('body').ready(() => {

    const root = $('html, body');
    $(document).on('click', 'a[data-href]', function (event) {
        event.preventDefault();
    
        root.animate({
            scrollTop: $('.' + $(event.target).attr('data-href')).offset().top
        }, 500);
    });

    $('.link').mouseenter((e) => {
        $('.link').css({'opacity': 0.6});
        $(e.target).css({'opacity': 1});
    });

    $('.navbar').mouseleave(() => {
        $('.link').css({'opacity': 1});
    });

});