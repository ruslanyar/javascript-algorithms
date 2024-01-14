// Get the number n to return the sequence from n to 1. The number n can be negative and also large number. (See the range as the following)
// Example :
// n=5  >> [5,4,3,2,1]
// n=-1 >> [-1,0,1]
// Range : -9999 < n < 9999

function seqToOne(n) {
  return Array.from({ length: Math.abs(n - 1) + 1 }, (_, i) =>
    n > 0 ? n - i : n + i
  );
}

console.log(seqToOne(-1));
