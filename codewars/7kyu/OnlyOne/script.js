// Given any number of boolean flags function should return true if and only if one of them is true while others are false. If function is called without arguments it should return false.

function onlyOne(...args) {
  return args.filter(Boolean).length === 1;
}

console.log(onlyOne());
console.log(onlyOne(true, false, false));
console.log(onlyOne(true, false, false, true));
