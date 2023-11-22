function minMax(arr) {
  // const sorted = [...arr].sort((a, b) => a - b);
  // return [sorted[0], sorted[sorted.length - 1]];

  return [Math.min(...arr), Math.max(...arr)];
}

console.log(minMax([1, 2, 3, 4, 5]));
