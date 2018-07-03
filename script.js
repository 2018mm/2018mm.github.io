$(document).ready(function(){

  $('#navToggle').click(function(){
    $('#top-section').toggleClass('openNav');
  });

  $("img").on('contextmenu',function(e){
    return false;
  });

  $("img").on('mousedown mouseup',function(e){
    return false;
  });

  $('.photo-g a').hover(
    function(){
      $(this).parent('div').css(
      "border","1px solid gray");
    },
    function(){
      $(this).parent('div').css(
        "border","none");
    }
  );

  var slider =  $('.bxslider').bxSlider({
        mode: 'fade',
       maxSlides: 1,
       moveSlides: 1,
       pagerCustom: '.bx-pager',
       controls: false,
       slideWidth: 700
     });
 });
