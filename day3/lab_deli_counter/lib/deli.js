var katzDeli = ["Katsy", "Robb", "Alex", "Becky"];
function takeANumber (arr, name) {
  arr.push(name);
  console.log("You are number " + arr.length);
  return arr.length;
}

function nowServing (arr) {
  if (arr.length == 0) {
    return "There is nobody waiting to be served";
  }
  var serving = arr[0];
  arr.splice(0,1);
  return serving;
}

function spot (arr, name) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == name) {
      return "You are at position " + (i + 1) + " in the line.";
    }
  }
  return "You are not in line!";
}

function line (arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i] + " is at position " + (i + 1) + " in the line.");
  }
}
