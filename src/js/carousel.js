($('body').ready(() => {
    carousel_init();

    // image changing feature
    const N = $('.gallery_container .image').length;
    let prev = N - 1;
    let i = 0;
    let next = 1;

    function carousel_init(){
        // pulls out .prev, .active, .next from the gallery_container and prepends them to the container in order.
        let prev_img = $('.gallery_container .prev');
        let active_img = $('.gallery_container .active');
        let next_img = $('.gallery_container .next');

        prev_img.remove();
        active_img.remove();
        next_img.remove();
        $('.gallery_container').prepend(next_img);
        $('.gallery_container').prepend(active_img);
        $('.gallery_container').prepend(prev_img);
        
        // just for hover animation
        $('.gallery_container .prev').mouseenter(() => $('.gallery_container .active').css({'transform': 'translate(5px, 0)'}));
        $('.gallery_container .next').mouseenter(() => $('.gallery_container .active').css({'transform': 'translate(-5px, 0)'}));
        $('.gallery_container .prev, .gallery_container .next').mouseleave(() => $('.gallery_container .active').css({'transform': ''}));
        
        $('.gallery_container .prev').click(() => { i = (i + N - 1) % N } );
        $('.gallery_container .next').click(() => { i = (i + 1) % N } );

        $('.gallery_container .prev, .gallery_container .next').click(() => {
            prev = (i + N - 1) % N;
            next = (i + 1) % N;

            // remove the triggers and classes
            $('.gallery_container .prev, .gallery_container .next').unbind('mouseenter mouseleave');
            $('.gallery_container .active').css('transform', '');
            $('.gallery_container .prev, .gallery_container .active, .gallery_container .next').removeClass('prev active next');

            //  add new classes
            $('[data-index=' + String(prev) + ']').addClass('prev');
            $('[data-index=' + String(i) + ']').addClass('active');
            $('[data-index=' + String(next) + ']').addClass('next');

            carousel_init();
        });
    }

}))