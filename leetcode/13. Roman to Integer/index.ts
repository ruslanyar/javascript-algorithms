const map: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  const length = s.length;
  let result = map[s[length - 1]];

  for (let i = length - 2; i >= 0; i--) {
    if (map[s[i]] < map[s[i + 1]]) result -= map[s[i]];
    else result += map[s[i]];
  }

  return result;
}

console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('VI'));
console.log(romanToInt('IX'));
console.log(romanToInt('MCMXCIV'));
