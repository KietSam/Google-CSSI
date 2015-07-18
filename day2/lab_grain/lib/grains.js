'use strict';
$(function() {
  function square(num){
    var temp = 1;
    for (var i = 2; i <= num; i++) {
      temp *= 2;
    }
    return temp;
  };

  function total(numOfSquares){
    var sum = 0;
    for (var i = 1; i <= numOfSquares; i++) {
      sum+=square(i);
    }
    return sum;
  };

// ###########################
// DO NOT EDIT BELOW THIS LINE
// ###########################

//$(function() {

  $( "#target" ).submit(function( event ) {
    event.preventDefault();
    var input = parseInt($("#in").val());
    //alert( "Handler for .submit() called. with input " + square(input) );
    $('#square-result').text(square(input));
    $('#total-result').text(total(input));
  });
});
