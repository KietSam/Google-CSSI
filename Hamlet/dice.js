function testRoll () {
  var one = 0;
  var two = 0;
  var three = 0;
  var four = 0;
  var five = 0;
  var six = 0;
  var nope = 0;
  var i = 1;
  while (i <= 900000000) {
    var temp = roll();
    if (temp == 1) {
      one++;
    }
    else if (temp == 2) {
      two++;
    }
    else if (temp == 3) {
      three++;
    }
    else if (temp == 4) {
      four++;
    }
    else if (temp == 5) {
      five++;
    }
    else if (temp == 6) {
      six++;
    }
    else {
      nope++;
    }
    i++;
  }
  console.log("Here's the stats of the number counts from 1-6");
  console.log("one: " + one + " (" + Math.round(one/i*100) + "%)");
  console.log("two: " + two + " (" + Math.round(two/i*100) + "%)");
  console.log("three: " + three + " (" + Math.round(three/i*100) + "%)");
  console.log("four: " + four + " (" + Math.round(four/i*100) + "%)");
  console.log("five: " + five + " (" + Math.round(five/i*100) + "%)");
  console.log("six: " + six + " (" + Math.round(six/i*100) + "%)");
  console.log("error numbers: " + nope + " (" + Math.round(nope/i*100) + "%)");
}

function doubleRoll () {
  var a = roll();
  var b = roll();
  console.log("First roll: " + a);
  console.log("Second roll: " + b);
  console.log("The sum of the two rolls are " + (a + b))
}

function roll () {
  return Math.floor(Math.random()*6)+1;
}
