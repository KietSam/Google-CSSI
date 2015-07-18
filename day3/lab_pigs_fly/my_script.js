$(document).ready(function(){
  var go = true;
  $("#pig1").on('click', function(){
    if (go) {
      for (var i = 1; i <= 1000; i++) {
        $("#pig1").animate({ left: '1000px'}, 500, 'easeInElastic');
        $("#pig1").animate({ left: '0px'}, 200, 'easeInElastic');
        $("#pig2").animate({ left: '1000px'}, 500, 'linear');
        $("#pig2").animate({ left: '0px'}, 200, 'linear');

      }
      //go = false;
    }
    /*} else {
      $("#pig1").animate({ left: '0px'}, 500, 'easeInElastic');
      $("#pig2").animate({ left: '0px'}, 500, 'linear');
      go = true;
    }*/
  });

  /*$("#pig").mouseleave(function(){
    $("#pig").animate({ margin: '0px' }, 200);
  });*/

  /*for (var i = 1; i <= 100; i++) {
    $("#pig").animate({ width: '1000px'}, 100);
    $("#pig").animate({ opacity: '0' }, 100);
    $("#pig").animate({ width: '100px'}, 100);
    $("#pig").animate({ opacity: '1' }, 100);
  }*/

});

var myObject = {"golden" : "retreiver", "pug" : "lazy"}
var myDef = myObject["golden"]
