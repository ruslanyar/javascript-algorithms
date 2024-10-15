// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

export function capitals(word: string): number[] {
  const arr: number[] = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) arr.push(i);
  }

  return arr;
}

console.log(capitals('CodEWaRs'));
