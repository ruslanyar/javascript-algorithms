// You are given an array of arrays. Inside of the interior arrays are numbers. Join the arrays together by descending total array value ending up with one final array.

function cantBeatSoJoin(numbers) {
  return numbers
    .sort((a, b) => b.reduce((x, y) => x + y, 0) - a.reduce((x, y) => x + y, 0))
    .flat();
}

console.log(cantBeatSoJoin([[], [], [0], []]));
