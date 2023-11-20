// Given an object or array obj, return a compact object. A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

// You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };

type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {
  if (Array.isArray(obj)) {
    const result: Array<JSONValue> = [];
    obj.forEach((el) => {
      if (typeof el === "object" && el !== null) result.push(compactObject(el));
      else if (!!el) result.push(el);
    });
    return result;
  } else {
    const result: Record<string, JSONValue> = {};
    for (let key in obj) {
      const x = obj[key];
      if (typeof x === "object" && x !== null) result[key] = compactObject(x);
      else if (!!x) result[key] = x;
    }
    return result;
  }
}

const obj1 = [null, 0, false, 1];
console.log(compactObject(obj1)); // [1]

const obj2 = { a: null, b: [false, 1] };
console.log(compactObject(obj2)); // {"b": [1]}

const obj3 = [null, 0, 5, [0], [false, 16]];
console.log(compactObject(obj3)); // [5, [], [16]]
