$(function() {
    var img = $('.rick').html();
    for (var i = 0; i < 10; i++) {
        moar(img);
    }
    $(window).on('scroll', function() {
        if ($(this).scrollTop() >= $('.rick').height() - $(this).height()) {
            moar(img);
        }
    });
    function moar(content) {
        $('.rick').append(content);
    }
});
