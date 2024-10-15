function findOdd(numbers: number[]): number {
  const numberCounts = new Map<number, number>();

  for (const number of numbers) {
    const currentCount = numberCounts.get(number);
    if (currentCount) numberCounts.set(number, currentCount + 1);
    else numberCounts.set(number, 1);
  }

  const numberCountEntries = Array.from(numberCounts.entries());
  const [oddNumber] = numberCountEntries.find(([_, count]) => count % 2 !== 0) as [number, number];

  return oddNumber;
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
