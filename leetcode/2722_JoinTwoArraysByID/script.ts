// Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

// If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

// If two objects share an id, their properties should be merged into a single object:

// If a key only exists in one object, that single key-value pair should be included in the object.
// If a key is included in both objects, the value in the object from arr2 should override the value from arr1.

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type T = { id: number } & { [key: string]: JSONValue };

function join(arr1: T[], arr2: T[]): T[] {
  const sortedArr1 = [...arr1].sort((a, b) => a.id - b.id);
  const sortedArr2 = [...arr2].sort((a, b) => a.id - b.id);
  let i = 0,
    j = 0;
  let result: T[] = [];

  while (i < sortedArr1.length && j < sortedArr2.length) {
    if (sortedArr1[i].id < sortedArr2[j].id) {
      result.push(sortedArr1[i]);
      i++;
    } else if (sortedArr1[i].id > sortedArr2[j].id) {
      result.push(sortedArr2[j]);
      j++;
    } else {
      result.push({ ...sortedArr1[i], ...sortedArr2[j] });
      i++;
      j++;
    }
  }

  while (i < sortedArr1.length) {
    result.push(sortedArr1[i]);
    i++;
  }

  while (j < sortedArr2.length) {
    result.push(sortedArr2[j]);
    j++;
  }

  return result;
}

const arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
const arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];

console.log(join(arr1, arr2));
