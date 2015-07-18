function roll() {
  var random_number = Math.random();
  random_number *= 6;
  random_number = Math.floor(random_number);
  random_number += 1;
  return random_number

  //more elegant answer
  //return Math.ceil(Math.random() * 6);
  //return Math.floor(Math.random() * 6) + 1;
}
