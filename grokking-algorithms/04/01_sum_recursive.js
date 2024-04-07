function sumRecursive(arr) {
  if (arr.length === 1) return arr[0];

  return arr[0] + sumRecursive(arr.slice(1));
}

console.log(sumRecursive([2, 4, 6, 7]));
