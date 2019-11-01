

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
var scrolltop = $('.block').height()
var scrollheight = scrolltop * 3
console.log(scrolltop)
if(scroll > scrollheight){
$('.opencall').css({'opacity': .001 * scroll})
$('.opencall').addClass('opencallpop')
}

});
// $('.opencall').on('hover', function(){
//   $('.opencall').addClass('opencallcolor')
// })

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
