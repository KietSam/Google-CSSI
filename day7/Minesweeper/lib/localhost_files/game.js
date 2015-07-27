$(document).ready(function() {
  width = 20;
  height = 20;
  bombs = 50;
  $('#game_layout').css({"width" : width*50+"px", "minWidth" : width*50+"px"});
  $('#game_layout').css({"height" : height*50+"px", "minHidth" : height*50+"px"});

  layout = add_numbers_to_layout(create_layout(width, height, bombs));
  push_layout(layout);
  $('.box').on('click', function() {
    var id = this.id;
    //Get's the x and y coordinates of the box that was clicked in integers.
    var x = parseInt(id.substring(0, id.indexOf("y")).replace("x", ""));
    var y = parseInt(id.substring(id.indexOf("y")+1));
    update_layout(x, y, layout);
    console.log($(this).attr("value"));
  });
});

function game_lost (layout) {
  console.log("You lose");
  jQuery("body").animate({"backgroundColor" : "#D50000"}, 2000, "swing");
  for (var y = 0; y < layout.length; y++){
    for (var x = 0; x < layout[0].length; x++){
      layout[y][x] = "*";
    }
  }
  disappear_layout(0, 0, layout);
    /*for (var x = 0; x < width; x++){
      jQuery("#x"+x+"y"+y).animate({"backgroundColor" : "#FF1744", "opacity": 1}, 1000, "swing");
      jQuery("body").animate({"backgroundColor" : "#D50000"}, 2000, "swing");
      layout[y][x] = "*";
      $("#x"+x+"y"+y).css({"fontSize" : "10px"});
      $("#x"+x+"y"+y).html("you suck");
    }*/
}

function disappear_layout (x, y, layout){
  $("#x"+x+"y"+y).css({"fontSize" : "10px"});
  $("#x"+x+"y"+y).html("you suck");
  //console.log(layout[0].length);
  $("#x"+x+"y"+y).animate({"backgroundColor" : "#C62828"}, 0.25, "swing", function (){
    if (x+1 < layout[0].length){
      disappear_layout(x+1, y, layout);
    }
    else if (y + 1 < layout.length) {
      disappear_layout(0, y+1, layout);
    }
  });
}

function update_layout (x, y, layout) {
  //for blocks with numbers
  if (layout[y][x] != 0 && layout[y][x] != "*"){
    //$("#x"+x+"y"+y).css({"backgroundColor" : "#448AFF"}); //A400
    jQuery("#x"+x+"y"+y).animate({"backgroundColor" : "#448AFF"}, 100); //A400
    $("#x"+x2+"y"+y2).attr("value2", "true");
    $("#x"+x+"y"+y).html(layout[y][x]);
  }
  else if (layout[y][x] == "*"){
    game_lost(layout);
  }
  else {
    for (var a = 0; a < 3; a++){
      for (var b = 0; b < 3; b++){
        var y2 = y - 1 + a;
        var x2 = x - 1 + b;
        if (y2 >= 0 && y2 < layout.length &&
             x2 >= 0 && x2 < layout[0].length) {
          if ($("#x"+x2+"y"+y2).attr("value2") == "false"){
            //for blocks with no numbers or bombs
            if (layout[y2][x2] == 0){
              //$("#x"+x2+"y"+y2).css({"backgroundColor" : "#82B1FF"}); //Blue200
              jQuery("#x"+x2+"y"+y2).animate({"backgroundColor" : "#82B1FF"}, 100); //Blue200
              $("#x"+x2+"y"+y2).attr("value2", "true");
              update_layout(x2, y2, layout);
            }
            //for blocks with numbers
            else if (layout[y2][x2] != "*"){
              //$("#x"+x2+"y"+y2).css({"backgroundColor" : "#448AFF"}); //A400
              jQuery("#x"+x2+"y"+y2).animate({"backgroundColor" : "#448AFF"}, 200); //A400
              $("#x"+x2+"y"+y2).attr("value2", "true");
              $("#x"+x2+"y"+y2).html(layout[y2][x2]);
              //update_layout(x2, y2, layout);
            }
          }
        }
      }
    }
  }
}

function add_numbers_to_layout (layout) {
  for (var y = 0; y < layout.length; y++){
    for (var x = 0; x < layout[0].length; x++){
      if (layout[y][x] != "*"){
        var count = 0;
        for (var a = 0; a < 3; a++){
          for (var b = 0; b < 3; b++){
            var y2 = y - 1 + a;
            var x2 = x - 1 + b;
            if (y2 >= 0 && y2 < layout.length &&
                 x2 >= 0 && x2 < layout[0].length) {
              if (layout[y2][x2] == "*"){
                count++;
              }
            }
          }
        }
        if (count == 0){
          layout[y][x] = 0;
        }
        else {
          layout[y][x] = count;
        }
      }
    }
  }
  return layout;
}

function push_layout (layout) {
  for (var y = 0; y < layout.length; y++){
    for (var x = 0; x < layout[0].length; x++){
      var text = "<div class='box' id='x"+x+"y"+y+"' value='"+layout[y][x]+"' value2='false'> <span class='box_text' value='"+layout[y][x]+"'></span> </div>"
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
    var counter = 0;
    layout = create_2d_array(width, height);
    for (var y = 0; y < height; y++){
      for (var x = 0; x < width; x++){
        if (Math.floor(Math.random()*width*height)+1 <= bombs){
          layout[y][x] = "*";
          counter += 1;
        }
        else {
          layout[y][x] = "";
        }
      }
    }
    //if (counter == bombs){
      continue_ = false;
    //}
  }
  return layout;
}
