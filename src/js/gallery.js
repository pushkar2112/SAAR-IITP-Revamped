$('body').ready(() => {

    $('.scroller .album').each((i, el) => {
        let album_cover = $(el).children()[0];
        el.style.backgroundImage = 'url(' + album_cover.src + ')';
    });

    let album_images = {};
    $('.scroller .album.active .image-card').each((i, el) => {
        album_images[i] = el;
    });

    let num = Object.keys(album_images).length;
    let prev = num - 1;
    let active = 0;
    let next = 1;

    init_carousel(prev, active, next);
    slider();
    pull_up();


    function init_carousel(p, a, n) {
        // $('.viewer .album-image').removeClass('active prev next');

        $('.viewer .album-image.next').attr('src', album_images[n].src);
        $('.viewer .album-image.active').attr('src', album_images[a].src);
        $('.viewer .album-image.prev').attr('src', album_images[p].src);

        $('.viewer .album-image.prev').click(() => active = (active + num - 1) % num);
        $('.viewer .album-image.next').click(() => active = (active + 1) % num);

        $('.viewer .album-image.prev, .viewer .album-image.next').click((e) => {

            $('.viewer .album-image').unbind();

            prev = (active + num - 1) % num;
            next = (active + 1) % num;

            init_carousel(prev, active, next);
        })
    }

    function slider() {

        $('.scroller .album').click((e) => {
            $('.scroller .album').unbind();

            $('.scroller .album.active').removeClass('active');
            $(e.currentTarget).addClass('active');

            album_images = {}
            $('.scroller .album.active .image-card').each((i, el) => {
                album_images[i] = el;
            });

            num = Object.keys(album_images).length;
            prev = num - 1;
            active = 0;
            next = 1;

            slider();
            init_carousel(prev, active, next);
        })
    }

    function pull_up() {
        $('.arrow-icon').click((e) => {
            // console.log(e);
            $('.scroller').toggleClass('hide');
            $('.arrow-icon').toggleClass('hide');

        })
    }

});