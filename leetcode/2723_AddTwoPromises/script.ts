//? 2723. Add Two Promises
//* Given two promises promise1 and promise2, return a new promise.
//* promise1 and promise2 will both resolve with a number.
//* The returned promise should resolve with the sum of the two numbers.

type P = Promise<number>;

async function addTwoPromises(promise1: P, promise2: P): P {
  return await Promise.all([promise1, promise2]).then(([v1, v2]) => v1 + v2);
}

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4
