// Lately, feature requests have been piling up and you need a way to make global estimates of the time it would take to implement them all. If you estimate feature A to take 4 to 6 hours to implement, and feature B to take 2 to 5 hours, then in the best case it will only take you 6 (4 + 2) hours to implement both features, and in the worst case it will take you 11 (6 + 5). In the average case, it will take you 8.5 hours.
// For example,

// estimates = [[1, 2], [3, 4]]
// globalEstimate(estimates) == [4, 5, 6]

function globalEstimate(estimates) {
  let min = 0,
    max = 0;
  estimates.forEach((estimate) => {
    min += Math.min(...estimate);
    max += Math.max(...estimate);
  });
  let average = (min + max) / 2;

  return [min, average, max];
}

console.log(
  globalEstimate([
    [1, 2],
    [3, 4],
  ])
);
