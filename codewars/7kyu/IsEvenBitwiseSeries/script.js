// Is the number even?
// If the numbers is even return true. If it's odd, return false.
// Oh yeah... the following symbols/commands have been disabled!
// use of %

var isEven = function (n) {
  //if n is even return true, otherwise, return false
  return !(n & 1);
};

console.log(isEven(4));
console.log(isEven(5));
