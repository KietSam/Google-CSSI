$(document).ready(function () {
  $('#links_group').width($('#bg').width());
  $('.links').width($('#bg').width()/2);
  var toDo = [fader("#startScreen", 3000, "This is my page."),
  fader("#startScreen", 3000, "All created by."),
  fader("#startScreen", 3000, "Magic."),
  fader("#startScreen", 3000, "Magic")];
  for (var a = 0; a < toDo.length; a++) {
    toDo[a];
  }
  //$('#startScreen').css({display: 'inherit'});
  $('#bg').animate({ opacity: '0' }, 12000, 'swing', function () {
    $('#bg').css('display', 'inherit');
  });
  $('#bg').animate({ opacity: '1'}, 3000);
  $('#links_group').height($('.links').height());

  $('#links_group').on('mouseenter', function () {
    $('.links').animate({ fontSize: '20px' }, 500);
  });
  $('#links_group').on('mouseleave', function () {
    $('.links').animate({ fontSize: '15px'}, 500);
  });

});

function fader (element, milliseconds, setNextText) {
  if (milliseconds == undefined) {
    milliseconds = 5000;
  }
  var originalFontSize = $(element).css("font-size");
  //$(element).css('font-size', (originalFontSize-10)+"px");
  //console.log($(element).css("font-size"));
  $(element).css({ display: 'block' });
  $(element).animate({ opacity: '1', fontSize: originalFontSize+'px'}, milliseconds*2/5);
  $(element).animate({ opacity: '1'}, milliseconds*1/5);
  $(element).animate({ opacity: '0', fontSize: '110px'}, milliseconds*2/5, 'swing', function (){
    $(element).fadeOut(0);
    $(element).text(setNextText);
    $(element).css('fontSize', originalFontSize);
  });
}


//$('#bg').fadeIn(2000);
/*$('#bg').on(function () {
    $('#bg').fadeOut(2000);
});*/
