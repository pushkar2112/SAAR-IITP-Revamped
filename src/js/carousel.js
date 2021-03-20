$('body').ready(() => {
    Carousel($('.gallery_container')[0]);
    // Carousel($('.newsletter_container')[0]);
});

function Carousel(el) {
    // image changing feature
    const N = $(el).children('.image').length;
    let prev = N - 1;
    let i = 0;
    let next = 1;

    carousel_init();

    function carousel_init(){
        // pulls out .prev, .active, .next from the gallery_container and prepends them to the container in order.
        let prev_img = $(el).children('.prev');
        let active_img = $(el).children('.active');
        let next_img = $(el).children('.next');

        prev_img.remove();
        active_img.remove();
        next_img.remove();
        $(el).prepend(next_img);
        $(el).prepend(active_img);
        $(el).prepend(prev_img);
        
        // just for hover animation
        $(el).children('.prev').mouseenter(() => $(el).children('.active').css({'transform': 'translate(5px, 0)'}));
        $(el).children('.next').mouseenter(() => $(el).children('.active').css({'transform': 'translate(-5px, 0)'}));
        $(el).children('.prev, .next').mouseleave(() => $(el).children('.active').css({'transform': ''}));
        
        $(el).children('.prev').click(() => { i = (i + N - 1) % N } );
        $(el).children('.next').click(() => { i = (i + 1) % N } );

        $(el).children('.prev, .next').click(() => {
            prev = (i + N - 1) % N;
            next = (i + 1) % N;

            // remove the triggers and classes
            $(el).children('.prev, .next').unbind('mouseenter mouseleave');
            $(el).children('.active').css('transform', '');
            $(el).children('.prev, .active, .next').removeClass('prev active next');

            //  add new classes
            $(el).children('[data-index=' + String(prev) + ']').addClass('prev');
            $(el).children('[data-index=' + String(i) + ']').addClass('active');
            $(el).children('[data-index=' + String(next) + ']').addClass('next');

            carousel_init();
        });
    }

}