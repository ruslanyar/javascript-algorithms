function count(arr) {
  if (arr[0] === undefined) return 0;

  return 1 + count(arr.slice(1));
}

console.log(count([1, 1, 1, 4, 4]));
