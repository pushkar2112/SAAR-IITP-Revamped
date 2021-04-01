$('body').ready(() => {
    let slides = {};
    $('.anusmriti .cover-slide').each((i, el) => {
        slides[i] = el;
    });

    // in order to implement a looping carousel, i used the modulus (%) operator
    // to create a circular set of three variables - prev, active, next
    // had to change the prev code in order to 

    const num = Object.keys(slides).length;
    let prev = num - 1;
    let active = 0;
    let next = 1;

    init_carousel(prev, active, next);
    update_issue_text();

    function init_carousel(p, a, n){
        $('.anusmriti .cover-slide').removeClass('active prev next');
        $(slides[n]).addClass('next');
        $(slides[a]).addClass('active');
        $(slides[p]).addClass('prev');

        update_issue_text();

        $('.anusmriti .cover-slide.prev').click(() => active = (active + num - 1) % num);
        $('.anusmriti .cover-slide.next').click(() => active = (active + 1) % num);

        $('.anusmriti .cover-slide.prev, .anusmriti .cover-slide.next').click((e) => {
            $('.anusmriti .cover-slide').unbind();

            prev = (active + num - 1) % num;
            next = (active + 1) % num;

            init_carousel(prev, active, next);
        })
    }

    function update_issue_text(){
        let cover_name = $('.anusmriti .cover-slide.active').attr('src');
        cover_name = cover_name.substring(cover_name.lastIndexOf("/") + 1, cover_name.indexOf(".jpg"));
        $('.anusmriti .issue-text').text(cover_name);

        const volume = cover_name.substring(0, cover_name.indexOf('-') - 1).replace('. ', '').toLowerCase();
        const issue = cover_name.substring(cover_name.indexOf('-') + 2).replace(' ', '').toLowerCase();
        $('.anusmriti .more').attr('href', 'public/anusmriti/' + volume + '/' + issue + '.pdf');
    }

    // Keyboard nav
    $('html body').keydown(function(e) {
        if (e.keyCode == 37) { // left
            $(slides[prev]).trigger('click');
        } else if (e.keyCode == 39) { // right
            $(slides[next]).trigger('click');
        }
    });
});