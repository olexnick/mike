var jumboHeight = $('.bg').outerHeight();
console.log(jumboHeight, "первая");
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight-scrolled) + 'px');
    console.log(scrolled, "вторая");
}

$(window).scroll(function(e){
    parallax();
});


$(window).scroll(function(){

  var st = $(this).scrollTop()/5;
  console.log(st);
  $(".text").css({
    "transform" : "translate3d(0px, " + st  + "%, .01px)",
		"-webkit-transform" : "translate3d(0px, " + st  + "%, .01px)"
  });
  var st2 = $(this).scrollTop();
  $(".v3").css({
    "transform" : "translate3d(0px, " + st2/40  + "%, .01px)",
		"-webkit-transform" : "translate3d(0px, " + st2/25  + "%, .01px)"
  });


});




$(document).ready(function(){
                var scroll_start = 0;
                var startchange = $('#startchange');
                var offset = startchange.offset();
                    if (startchange.length){
                $(document).scroll(function() {
                    scroll_start = $(this).scrollTop();
                    if(scroll_start > offset.top) {
                          $(".navbar-default").css('background-color', '#ffffff');
                       } else {
                          $('.navbar-default').css('background-color', 'transparent');
                       }
                   });
                    }
                });
