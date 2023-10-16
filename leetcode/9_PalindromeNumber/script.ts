// Given an integer x, return true if x is a palindrome, and false otherwise.

function isPalindrome(x: number): boolean {
  // return x.toString().split("").reverse().join("") === x.toString();

  let reverse = 0;
  let copy = x;
  while (copy > 0) {
    const y = copy % 10;
    reverse = reverse * 10 + y;
    copy = Math.floor(copy / 10);
  }
  return x === reverse;
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
