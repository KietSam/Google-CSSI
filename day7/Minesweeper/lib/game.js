$(document).ready(function() {
  width = 16;
  height = 16;
  bombs = 40;
  $('#game_layout').css({"width" : width*50+"px", "minWidth" : width*50+"px"});
  layout = add_numbers_to_layout(create_layout(width, height, bombs));
  push_layout(layout);
  $('.box').css({"border" : "0.25vw solid #90CAF9"});
  $('.box').on('click', function() {
    var id = this.id;
    //Get's the x and y coordinates of the box that was clicked in integers.
    var x = parseInt(id.substring(0, id.indexOf("y")).replace("x", ""));
    var y = parseInt(id.substring(id.indexOf("y")+1));
    update_layout(x, y, layout);
    console.log($(this).attr("value"));
  });
  $(document).keydown("space", function () {
    console.log(event.which);
  })
});

function game_lost (layout) {
  console.log("You lose");
  for (var y = 0; y < layout.length; y++){
    for (var x = 0; x < layout[0].length; x++){
      var bgColor = "";
      if (layout[y][x] == 0){
        bgColor = "#82B1FF"; //Blue A100
      }
      else if (layout[y][x] == "*"){
        bgColor = "#F44336"; //red500
      }
      else {
        bgColor = "#448AFF"; //Blue A200
        $("#x"+x+"y"+y).html(layout[y][x]);
      }
      $("#x"+x+"y"+y).animate({"backgroundColor" : bgColor}, 400, "swing");
    }
  }
}

/*This function updates the layout everytime the user clicks a tile. */
function update_layout (x, y, layout) {
  /*If the tile selected is 0 then update the surrounding tiles
  to reveal all other 0 tiles near the clicked tile aswell as
  numbered tiles.*/
  if (layout[y][x] == 0) {
    update_surrounding_tiles(x, y, layout);
  }
  /*If the tile selected isn't a * that means that the tile must be a numbered
  if so, then update the numbered tile with a fixed color (Blue A200).*/
  else if (layout[y][x] != "*"){
    update_tile(x, y, layout, "#448AFF", true);
  }
  /*If the function reaches this else statement this means that the tile selected
  was a bomb. If so, update the board to show all of the tile values.*/
  else {
    game_lost(layout);
  }
}

function update_surrounding_tiles (x, y, layout){
  for (var a = 0; a < 3; a++){
    for (var b = 0; b < 3; b++){
      var y2 = y - 1 + a;
      var x2 = x - 1 + b;
      if (y2 >= 0 && y2 < layout.length && x2 >= 0 && x2 < layout[0].length) {
        if ($("#x"+x2+"y"+y2).attr("value2") == "false"){
          //for blocks with no numbers
          if (layout[y2][x2] == 0){
            update_tile(x2, y2, layout, "#82B1FF", false); //Blue A100
            update_surrounding_tiles(x2, y2, layout);
          }
          //for blocks with numbers
          else if (layout[y2][x2] != "*"){
            update_tile(x2, y2, layout, "#448AFF", true); //Blue A200
          }
        }
      }
    }
  }
}

/*updates the clicked tile by changing it's background color*/
function update_tile (x, y, layout, color, addText){
  jQuery("#x"+x+"y"+y).animate({"backgroundColor" : color}, 300); //A200
  $("#x"+x+"y"+y).attr("value2", "true");
  if (addText) {
    $("#x"+x+"y"+y).html(layout[y][x]);
  }
}

/*function use_surrounding_tiles (x, y, layout, functionCall) {
  for (var a = 0; a < 3; a++){
    for (var b = 0; b < 3; b++){
      var y2 = y - 1 + a;
      var x2 = x - 1 + b;
      if (y2 >= 0 && y2 < layout.length && x2 >= 0 && x2 < layout[0].length) {
        functionCall(x2, y2, layout, counter);
      }
    }
  }
}

function check_tile_for_bomb (x, y, layout, counter) {
  if (layout[y][x] == "*"){
    return counter+1;
  }
  return counter;
}*/

function add_numbers_to_layout (layout) {
  for (var y = 0; y < layout.length; y++){
    for (var x = 0; x < layout[0].length; x++){
      if (layout[y][x] != "*"){
        var count = 0;
        for (var a = 0; a < 3; a++){
          for (var b = 0; b < 3; b++){
            var y2 = y - 1 + a;
            var x2 = x - 1 + b;
            if (y2 >= 0 && y2 < layout.length && x2 >= 0 && x2 < layout[0].length) {
              if (layout[y2][x2] == "*"){
                count++;
              }
            }
          }
        }
        layout[y][x] = count == 0 ? 0 : count;
      }
    }
  }
  return layout;
}

function push_layout (layout) {
  for (var y = 0; y < layout.length; y++){
    for (var x = 0; x < layout[0].length; x++){
      var text = "<div class='box' id='x"+x+"y"+y+"' value='"+layout[y][x]+"' value2='false'> <span class='box_text' value='"+layout[y][x]+"'></span> </div>"
      //var text = "<div class='box' id='x"+x+"y"+y+"' value='"+layout[y][x]+"' value2='false'> <span class='box_text' value='"+layout[y][x]+"'> "+layout[y][x]+"</span> </div>"
      $('#game_layout').append(text);
    }
  }
}

function test_layout (width, height, bombs, times) {
  var percentage_array = create_2d_array(width, height)
  var layout = create_layout(width, height, bombs)
  for (var i = 0; i < (times-1); i++){
    var temp_layout = create_layout(width, height, bombs)
    for (var y = 0; y < height; y++){
      for (var x = 0; x < width; x++){
        layout[y][x]+= temp_layout[y][x];
      }
    }
  }
  for (var y = 0; y < height; y++){
    for (var x = 0; x < width; x++){
      percentage_array[y][x] = (Math.round((layout[y][x]/times+0.00001)*1000)/10) + "%";
    }
  }
  return percentage_array;
}

function print_2d_array (layout){
  for (var y = 0; y < layout.length; y++){
    text = "";
    for (var x = 0; x < layout[0].length; x++){
      text += layout[y][x] + ", ";
    }
    console.log(text);
  }
}

function create_2d_array (width, height){
  var layout = new Array(height);
  for (var i = 0; i < height; i++) {
    layout[i] = new Array(width)
  }
  return layout;
}

function create_layout (width, height, bombs) {
  if (bombs > (width * height)){
    return "ERROR: MORE BOMBS THAN THERE ARE BOXES"
  }
  var layout = [];
  var continue_ = true;
  while (continue_){
    /*This counter counts the number of times a bomb has been
    added to the layout.*/
    var counter = 0;
    layout = create_2d_array(width, height);
    for (var y = 0; y < height; y++){
      for (var x = 0; x < width; x++){
        if (Math.floor(Math.random()*width*height)+1 <= bombs){
          layout[y][x] = "*";
          counter += 1;
        }
      }
    }
    /*If the layout doesn't have the required number of bombs
    then create a layout again. Else return the layout. */
    if (counter == bombs){
      return layout;
    }
  }
}
