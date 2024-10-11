// You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

// Return the score of s.

function scoreOfString(s: string): number {
  let result = 0;

  for (let i = 0, j = i + 1; j < s.length; i++, j++) {
    result += Math.abs(s.charCodeAt(i) - s.charCodeAt(j));
  }

  return result;
}

scoreOfString('hello'); // 13
scoreOfString('zaz'); // 50
