'use strict';

var isAVowel = function(lttr){
  var judge = false;
  var vowels = ["a", "e", "i", "o", "u"];
  for (var i = 0; i < vowels.length; i++) {
    if (vowels[i] == lttr) {
      judge = true;
    }
  }
  return judge;
};

// ###########################
// DO NOT EDIT BELOW THIS LINE
// ###########################

$(function() {
  $( "#target" ).submit(function( event ) {
    event.preventDefault();
    var input = $("#in").val();
    var result = isAVowel(input);
    $('#result').text(result);
  });
});
