var isRobAwesome = "YES";
var colorOfRobShirt = "YELLOW";

console.log("Hello World");
console.log("And all our yesterdays are lighted fools");
console.log("This is a long sentence");

console.log("Yesterday you said tomorrow " + isRobAwesome);

function checkout(item1, item2, coupon, salesTax) {
  var subtotal = item1 + item2;
  subtotal = subtotal * (1-coupon);
  var total = subtotal * (1+salesTax);

  return Math.round(total*100)/100;
}

function goToLunch (name) {
  alert("LUNCH TIME!");
  alert("Close your computer, " + name);
  console.log("Let's eat food!");
}

/* Write a function that takes one variable called "gpa"
and either give an alert that I am awesome or I need to study.*/

function checkGPA (GPA, isFootballPlayer, needToGetIntoGradSchool) {
  if (GPA >= 4.0) {
    alert("I am so awesome");
  } else if (GPA >= 3.0 && needToGetIntoGradSchool) {
    alert("Better get a job");
  } else if (GPA >= 3.0) {
    alert("Not too shaby!");
  } else if (isFootballPlayer) {
    alert("I'm happy either way.");
  } else {
    alert("Crap! Better study");
  }
}

var favorite_tv_shows = ["Breaking Bad", "Walking Dead", "The Office", "Parks and Recreation", "Game of Thrones"]
var stuff = ["blank1", "blank2", "blank3"];
var test = favorite_tv_shows + stuff;
var test2 = [];
test2.push(favorite_tv_shows);
test2.push(stuff);
var test3 = [];
test3 = test3 + favorite_tv_shows + stuff;

var myArr = new Array();
myArr.push("Hello");
myArr.push(undefined);
myArr.push(true);

var fruits = ["Apples", "Oranges", "Pears", "Banana"]
var numbers = [2,3,5,7,11,13,17,23]
console.log(numbers);
var i = 0;
while (i < numbers.length) {
  numbers[i]++;
  i++;
}

/*Write a function that takes an array "arr" as an argument and multiplies
each element in the array by 2*/

function multiplyArray (arr, multiplier) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] > 1){
      arr.splice(arr.length, 0, 1);
    }
    arr[i]*=multiplier;
    i++;
    console.log(arr);
  }
  return arr;
}

function multiplyArray2 (arr, multiplier) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] *= multiplier;
    console.log(arr);
  }
}

function printFibonnaci () {
  var fib = [1, 1]
  var count = 1;
  while (count <= 100) {
    console.log(fib);
    fib.push(fib[count-1] + fib[count]);
    count++;
  }
}

setInterval(timedFibLoop, 500);
var fibb = [1, 1];
function timedFibLoop () {
  console.log(fibb);
  fibb.push(fibb[fibb.length-2] + fibb[fibb.length-1]);
}
