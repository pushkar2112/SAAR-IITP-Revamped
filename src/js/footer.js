$('body').ready(() => {
    $('body').scroll((e) => {
        const scrollPos = window.scrollY;
        const speed = 0.6;
        
        const footer_top = $('.footer').offset().top;

        $('.footer .cubes.top-left').css({'transform': 'scale(-1, -1) translate(20%, calc(30% - ' + String((scrollPos - footer_top)*speed*0.5) + 'px))'});
        $('.footer .bg-logo').css({'bottom': '-' + String((scrollPos - footer_top)*speed*0.6) + 'px'});
})
});