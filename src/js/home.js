$('body').ready(() => {
    // scroll indicator animation
    $('.scroll-indic').css({
        'transform': 'translate(-50%, 0)',
        'opacity': 0.8
    });

    // adds the src images as background images for the parallax containers
    // this way the image urls are declared in the html itself
    $('.bg-parallax').each((i, el) => {
        el.style.backgroundImage = 'url("' + el.dataset.src + '")';
    })

    // cube parallax
    // this can be done using the css implementation of parallax
    // but the positioning was a little tricky
    $('body').scroll((e) => {
        const scrollPos = window.scrollY;
        const speed = 0.6;
        
        const about_top = $('.about').offset().top;
        const timeline_top = $('.timeline').offset().top;
        const anusmriti_top = $('.anusmriti').offset().top;

        $('.about .cubes.top-left').css({'transform': 'scale(-1, -1) translate(1vh, calc(1vh - ' + String((scrollPos - about_top)*speed) + 'px))'});
        $('.about .cubes.bottom-right').css({'transform': 'translate(0, calc(80vh + ' + String((scrollPos - about_top)*speed*1.2) + 'px))'});
        
        $('.timeline .cubes.top-right').css({'transform': 'translate(1vh, calc(-5vh + ' + String((scrollPos - timeline_top)*speed*0.9) + 'px))'});
        $('.timeline .cubes.bottom-left').css({'transform': 'scale(-1, 1) translate(-30px, calc(85vh + ' + String((scrollPos - timeline_top)*speed*1.3) + 'px))'});
        $('.timeline .cubes.bottom-right').css({'transform': 'translate(0, calc(95vh + ' + String((scrollPos - timeline_top)*speed*1.5) + 'px))'});

        $('.anusmriti .cubes.top-left').css({'transform': 'scale(-1, -1) translate(1vh, calc(1vh - ' + String((scrollPos - anusmriti_top)*speed) + 'px))'});
        $('.anusmriti .cubes.bottom-right').css({'transform': 'translate(0, calc(80vh + ' + String((scrollPos - anusmriti_top)*speed*1.2) + 'px))'});
        
        $('.timeline .event').each((i, el) => {
            if($(el).offset().top < window.scrollY + window.innerHeight*0.8){
                el.classList.add('active');
            }
        })
    })

    // *** PROPOSITION *** - for how to implement css parallax for the cubes
    // Pre-req: understand how css parallax works
    // HOW TO:
    // just put the cubes in a wrapper div;
    // push the wrapper back along z-axis between 0 - 1px;
    // scale it up according to scale_factor = (1 - distance/perspective);  [[ perspective is set to 1px ]]
});