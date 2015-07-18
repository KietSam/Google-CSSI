/* You will save your code during today's demos and exercises here. */

function okay () {
  for (var i = 1; i <= 100; i++){
    $('.frame').fadeOut(2000);
    $('.frame').fadeIn(1000);
  }
}
okay();

var index = 0;
var index2 = 1;
var index3 = 2;
$(window).resize(function () {
  var colors = ["blue", "black", "brown", "yellow", "red", "blue"]
  $('body').css('background-color', "rgb(" + Math.floor(Math.random() * 255)
      + "," + Math.floor(Math.random() * 255) + ","
      + Math.floor(Math.random() * 255) + ")");
  $('.frame').css('background-color', "rgb(" + Math.floor(Math.random() * 255)
      + "," + Math.floor(Math.random() * 255) + ","
      + Math.floor(Math.random() * 255) + ")");
  $('#wall').css('background-color', "rgb(" + Math.floor(Math.random() * 255)
      + "," + Math.floor(Math.random() * 255) + ","
      + Math.floor(Math.random() * 255) + ")");
  index = index + 3;
  index2++;
  index3++;
  if (index2 >= colors.length) {
    index2 = 0;
  }
  if (index >= colors.length) {
    index = 0;
  }
  if (index3 >= colors.length) {
    index3 = 0;
  }
});*/




/*$('#android').on('click', fader(1));
function fader (milliseconds) {
  var start = true;
  if (start) {
    setInterval(fade, 1);
  }
  var currentOpacity = $('img').css("opacity");
  function fade () {
    currentOpacity = currentOpacity - 1/milliseconds
    $('img').css("opacity", ""+currentOpacity);
    if (currentOpacity < 0) {
      start = false;
    }
  }﻿
}*/

//$('.frame').on('mousehover mouseleaves', fader);
/*$('.frame').hover(function (){
  console.log(this);
  $(this).fadeToggle();
});*/
