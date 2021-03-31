$num = $('.cover-slide').length;
$even = $num / 2;
$odd = ($num + 1) / 2;

if ($num % 2 == 0) {
    $('.cover-slide:nth-child(' + $even + ')').addClass('active');
    $('.cover-slide:nth-child(' + $even + ')').prev().addClass('prev');
    $('.cover-slide:nth-child(' + $even + ')').next().addClass('next');
} else {
    $('.cover-slide:nth-child(' + $odd + ')').addClass('active');
    $('.cover-slide:nth-child(' + $odd + ')').prev().addClass('prev');
    $('.cover-slide:nth-child(' + $odd + ')').next().addClass('next');
}

var cover_name = $('.active').attr('src');
cover_name = cover_name.substring(cover_name.lastIndexOf("/") + 1, cover_name.indexOf(".jpg"));
$('.issue-text').text(cover_name);

$('.cover-slide').click(function() {

    $(this).removeClass('prev next');
    $(this).siblings().removeClass('prev active next');

    $(this).addClass('active');
    var cover_name = $(this).attr('src');
    cover_name = cover_name.substring(cover_name.lastIndexOf("/") + 1, cover_name.indexOf(".jpg"));
    $('.issue-text').text(cover_name);

    $(this).prev().addClass('prev');
    $(this).next().addClass('next');
});


// Keyboard nav
$('html body').keydown(function(e) {
    if (e.keyCode == 37) { // left
        $('.active').prev().trigger('click');
    } else if (e.keyCode == 39) { // right
        $('.active').next().trigger('click');
    }
});