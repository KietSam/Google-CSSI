function renderRoll(){
  $('#results').text(roll());
}

$('button').click(renderRoll);
