// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.

type Fn = (n: number, i: number) => any;

function filter(arr: number[], fn: Fn): number[] {
  const result: number[] = [];

  // arr.forEach((el, i) => {
  //   if (fn(el, i)) result.push(el);
  // });

  // Or with "for loop"
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) result.push(arr[i]);

    // Without "Array.push" method
    // if (fn(arr[i], i)) result[result.length] = arr[i];
  }

  return result;
}

console.log(filter([0, 10, 20, 30], (n) => n > 10));
