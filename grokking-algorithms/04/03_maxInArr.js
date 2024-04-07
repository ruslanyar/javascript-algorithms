function maxInArr(arr) {
  const [a, b, ...rest] = arr;
  const max = a > b ? a : b;

  if (arr.length === 2) return max;

  return maxInArr([max, ...rest]);
}

console.log(maxInArr([1, 9, 4, 8, 3]));
