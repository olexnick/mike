$(document).ready(function(){
  $('.btn-mesage').bind('click', function(){
      $('.wrapper-message').show();
      });
  $('.wrapper-message-icon').bind('click', function(){
      $('.wrapper-message').hide();
      });
  $('.send-messag').bind('click', function(){
    if(document.getElementById('btn-name').value!=""){
      $('#err_name').hide();
      if(document.getElementById('btn-call').value!=""){
        $('#err_call').hide();
        if(document.getElementById('btn-text').value!=""){
          $('#err_question').hide();

          setTimeout (function(){
            $('.message-input-wrapper').fadeOut(1000);
          }, 1010);
          setTimeout (function(){
            $('.message-sent-text').fadeIn(2000);
          }, 2011);
          setTimeout (function(){
            $('.wrapper-message').fadeOut(2000);
          }, 5011);

        } else{
          $('#err_question').show();
        }
      } else{
        $('#err_call').show();
      }
    } else {
      $('#err_name').show();
    }
  });

  var wid;
  wid = window.screen.width;
  if(wid >= 1366){
    $("iframe").each(
      function(index, elem) {
        elem.setAttribute("width","650px");
        elem.setAttribute("height","570px");
      }
    );
  } else if (wid >= 1024){
    $("iframe").each(
      function(index, elem) {
        elem.setAttribute("width","450px");
        elem.setAttribute("height","450px");
      }
    );
  }else if (wid >= 768){
    $("iframe").each(
      function(index, elem) {
        elem.setAttribute("width","330px");
        elem.setAttribute("height","450px");
      }
    );
  }

});
