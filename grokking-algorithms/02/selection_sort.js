function selectionSort(array, direction = "asc") {
  if (direction !== "asc" && direction !== "desc") {
    throw new Error("Wrong direction value");
  }

  if (!Array.isArray(array)) {
    throw new TypeError("The first argument must be an array");
  }

  const result = [];
  const copyArr = [...array];

  while (copyArr.length > 0) {
    let element = copyArr[0];
    let index = 0;

    for (let i = 1; i <= copyArr.length; i++) {
      if (direction === "asc" ? copyArr[i] < element : copyArr[i] > element) {
        element = copyArr[i];
        index = i;
      }
    }
    result.push(copyArr.splice(index, 1)[0]);
  }

  return result;
}

console.log(selectionSort([156, 141, 35, 94, 88, 61, 111]));
