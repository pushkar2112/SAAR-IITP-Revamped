$('body').ready(() => {

    slider();

    function slider() {

        $('.scroller .image-card').click((e) => {
            $('.scroller .image-card').unbind();

            $('.scroller .image-card.active').removeClass('active');
            $(e.currentTarget).addClass('active');
            $('.viewer .active-img').attr('src', $(e.currentTarget).attr('src'));

            slider();
        })
    }

});