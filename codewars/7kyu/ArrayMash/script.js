// Mash 2 arrays together so that the returning array has alternating elements of the 2 arrays . Both arrays will always be the same length.

// eg. [1,2,3] + ['a','b','c'] = [1, 'a', 2, 'b', 3, 'c']

function arrayMash(array1, array2) {
  const result = [];
  let i = 0;

  while (i < array1.length) {
    result.push(array1[i], array2[i]);
    i++;
  }

  return result;
}

console.log(arrayMash([1, 2, 3], ["a", "b", "c"]));
