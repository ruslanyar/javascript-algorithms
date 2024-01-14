// Is every value in the array an array?
// This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

const arrCheck = (value) => value.every(Array.isArray);

console.log(arrCheck([[1], [2], [3]]));
console.log(arrCheck([[1], [2], {}]));
console.log(arrCheck([[1], [2], "string"]));
