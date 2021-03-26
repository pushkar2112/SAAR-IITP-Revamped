$('body').ready(() => {
    $('.scroll-indic').css({
        'transform': 'translate(-50%, 0)',
        'opacity': 0.8
    });

    var rellax = new Rellax('.parallax');

    $('.parallax').each((i, el) => {
        el = $(el);

        el.css('background-image', 'url("'+ el.attr('data-src') + '")');
        // el.paroller({
        //     factor: el.attr('data-speed'),
        //     type: 'foreground',
        //     direction: 'vertical',
        //     transition: 'all 0s'
        // });
    })

    // $(window).scroll(() => {
    //     const scrollPos = window.scrollY;
    //     const speed = 0.6;
        
    //     const about_top = document.querySelector('.about').offsetTop;
    //     const timeline_top = document.querySelector('.timeline').offsetTop;

    //     $('.about .cubes.top-left').css({'transform': 'scale(-1, -1) translate(1vh, calc(1vh - ' + String((scrollPos - about_top)*speed) + 'px))'});
    //     $('.about .cubes.bottom-right').css({'transform': 'translate(0, calc(80vh + ' + String((scrollPos - about_top)*speed*1.2) + 'px))'});
        
    //     $('.timeline .cubes.top-right').css({'transform': 'translate(1vh, calc(-5vh + ' + String((scrollPos - timeline_top)*speed*1.4) + 'px))'});
    //     $('.timeline .cubes.bottom-left').css({'transform': 'scale(-1, 1) translate(-30px, calc(85vh + ' + String((scrollPos - timeline_top)*speed*1.3) + 'px))'});
    //     $('.timeline .cubes.bottom-right').css({'transform': 'translate(0, calc(95vh + ' + String((scrollPos - timeline_top)*speed*1.5) + 'px))'});
        
    //     $('.timeline .event').each((i, el) => {
    //         if($(el).offset().top < window.scrollY + window.innerHeight*0.8){
    //             el.classList.add('active');
    //         }
    //     })
    // })
});