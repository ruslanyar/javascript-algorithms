function findNumbers(nums: number[]): number {
  let count = 0;

  for (let num of nums) {
    if (num.toString().length % 2 === 0) count++;
  }

  return count;
}

console.log(findNumbers([12, 345, 2, 6, 7896]));
console.log(findNumbers([555, 901, 482, 1771]));
