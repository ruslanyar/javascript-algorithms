function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const guess = arr[mid];

    if (guess === target) return mid;
    if (guess < target) left = mid + 1;
    else right = mid - 1;
  }

  return null;
}

const myList = Array.from({ length: 128 }, (_, i) => i + 1);

console.log(binarySearch(myList, 91));
