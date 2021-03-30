$('body').ready(() => {

    Carousel($('.cover-carousel')[0]);
});

function Carousel(el) {

    loop();

    function loop() {

        let prev = $(el).children('.prev');
        let curr = $(el).children('.current');
        let next = $(el).children('.next');

        prev.remove();
        curr.remove();
        next.remove();
        $(el).prepend(next);
        $(el).prepend(curr);
        $(el).prepend(prev);


        //hovering action   
        prev.mouseenter(() => curr.css({ 'transform': 'translate(5px, 0)' }));
        next.mouseenter(() => curr.css({ 'transform': 'translate(-5px, 0)' }));
        prev.mouseleave(() => curr.css({ 'transform': '' }));
        next.mouseleave(() => curr.css({ 'transform': '' }));

        prev.click(() => {

            // remove the triggers and classes
            prev.unbind('mouseenter mouseleave');
            next.unbind('mouseenter mouseleave');


            // prev.css({ 'transform': 'translateX(calc(110% + 5px))' });
            curr.css({ 'transform': 'scale(0.85)' });
            // next.css({ 'transform': 'translateX(calc(-220% + 10px))' });

            prev[0].className = prev[0].className.replace(/\bprev\b/g, "current");
            curr[0].className = curr[0].className.replace(/\bcurrent\b/g, "next");
            next[0].className = next[0].className.replace(/\bnext\b/g, "prev");



            loop();
        });

        next.click(() => {

            // remove the triggers and classes
            prev.unbind('mouseenter mouseleave');
            next.unbind('mouseenter mouseleave');

            // prev.css({ 'transform': 'translateX(calc(110% + 5px))' });
            curr.css({ 'transform': 'scale(0.85)' });
            // next.css({ 'transform': 'translateX(calc(-220% + 10px))' });

            next[0].className = next[0].className.replace(/\bnext\b/g, "current");
            curr[0].className = curr[0].className.replace(/\bcurrent\b/g, "prev");
            prev[0].className = prev[0].className.replace(/\bprev\b/g, "next");



            loop();
        });



    }


}