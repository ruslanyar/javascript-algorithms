function comp(a1: number[] | null, a2: number[] | null): boolean {
  if (a1 === null || a2 === null || a1.length !== a2.length) return false;

  const sortedArray1 = a1.sort((a, b) => a - b);
  const sortedArray2 = a2.sort((a, b) => a - b);

  for (let i = 0; i < sortedArray1.length; i++) {
    if (sortedArray1[i] ** 2 !== sortedArray2[i]) return false;
  }

  return true;
}

console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
);
console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
  )
);
