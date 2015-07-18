---
languages: javascript
tags: math, logic
---

# Grains

## Contents

* Background
* Instructions
* Hints
* Resources

## Background

> There once was a wise servant who saved the life of a prince. The king promised to pay whatever the servant could dream up. Knowing that the king loved chess, the servant told the king he would like to have grains of wheat. One grain on the first square of a chess board. Two grains on the next. Four on the third, eight on the fourth, and so on.

![grains on chessboard image](https://s3-us-west-2.amazonaws.com/web-dev-readme-photos/js/grains.png)

Learn more about the wheat and chessboard problem [here](http://en.wikipedia.org/wiki/Wheat_and_chessboard_problem).

## Instructions

### Square

Write a function, `square` that accepts one one parameter, the square's postition/number. It should return the number of grains of wheat on a chessboard given that the number on each square doubles.

For example:

```javascript
square(1)
// => 1

square(2)
// => 2

square(3)
// => 4

square(4)
// => 8

square(5)
// => 16

square(6)
// => 32

// etc.
```

### Total

Write a function, `total`, that accepts one one parameter, the square's postition/number. Given that number, it should return the total number of grains on the board *up until and including* that square.

For example:

```javascript
total(1)
// => 1

total(2)
// => 3

total(3)
// => 7

total(4)
// => 16

total(5)
// => 31

// etc.
```

Notice the relationship between the function `square` and the function `total`.

## Checking Results
There are jasmine tests available for learn or you can manually open the `index.html` file and check the results.

## Hints

* The return value of `total(5)` is equal to one less than the return value of `square(6)`.
* Take a look at JavaScript's [Math.pow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow) function.

## Resources

* [Wheat and chessboard problem](http://en.wikipedia.org/wiki/Wheat_and_chessboard_problem)
* [Math.pow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)
