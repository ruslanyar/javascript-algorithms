// We need a function count_sel() that receives an array or list of integers (positive and negative) and may give us the following information in the order and structure presented bellow:
// [(1), (2), (3), [[(4)], 5]]
// (1) - Total amount of received integers.
// (2) - Total amount of different values the array has.
// (3) - Total amount of values that occur only once.
// (4) and (5) both in a list
// (4) - It is (or they are) the element(s) that has (or have) the maximum occurrence. If there are more than one, the elements should be sorted (by their value obviously)
// (5) - Maximum occurrence of the integer(s)

function countSel(lst) {
  const totalCount = lst.length;
  const hash = {};
  const result = lst.reduce(
    (acc, cur) => {
      if (!hash[cur]) {
        hash[cur] = 1;
        acc.diffValCount++;
        acc.occurOnceCount.push(cur);
        if (acc.maxOccurVal === 0) acc.maxOccurVal = 1;
      } else {
        const x = ++hash[cur];
        if (x === 2) acc.occurOnceCount.pop();
        if (x > acc.maxOccurVal) acc.maxOccurVal = x;
      }

      let curMaxOccurArr = acc.maxOccurMap[hash[cur]];
      if (!curMaxOccurArr) {
        acc.maxOccurMap[hash[cur]] = curMaxOccurArr = [cur];
      } else {
        curMaxOccurArr.push(cur);
      }

      return acc;
    },
    {
      diffValCount: 0,
      occurOnceCount: [],
      maxOccurMap: {},
      maxOccurVal: 0,
    }
  );

  return [
    totalCount,
    result.diffValCount,
    result.occurOnceCount.length,
    [
      result.maxOccurMap[result.maxOccurVal].sort((a, b) => a - b),
      result.maxOccurVal,
    ],
  ];
}

function countSel2(lst) {
  const totalCount = lst.length;
  const occurCountMap = new Map();
  const occurOnceSet = new Set();
  let maxOccurVal = 0;

  for (const cur of lst) {
    if (!occurCountMap.has(cur)) {
      occurCountMap.set(cur, 1);
      occurOnceSet.add(cur);
      if (maxOccurVal === 0) maxOccurVal = 1;
    } else {
      const count = occurCountMap.get(cur) + 1;
      occurCountMap.set(cur, count);
      if (count === 2) occurOnceSet.delete(cur);
      if (count > maxOccurVal) maxOccurVal = count;
    }
  }

  const maxOccurArr = [];
  for (const [key, value] of occurCountMap.entries()) {
    if (value === maxOccurVal) {
      maxOccurArr.push(key);
    }
  }

  return [
    totalCount,
    occurCountMap.size,
    occurOnceSet.size,
    [maxOccurArr.sort((a, b) => a - b), maxOccurVal],
  ];
}

console.log(countSel([-3, -2, -1, 3, 4, -5, -5, 5, -1, -5]));
console.log(countSel([5, -1, 1, -1, -2, 5, 0, -2, -5, 3]));
console.log(countSel2([4, 4, 2, -3, 1, 4, 3, 2, 0, -5, 2, -2, -2, -5]));
