//? Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:

// *When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
//* When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].

//? Constraints:

//* 0 <= nums.length <= 1000
//* 0 <= nums[i] <= 1000
//* Note: nums is the array passed to the constructor

class ArrayWrapper {
  nums: number[];
  constructor(nums: number[]) {
    this.nums = nums;
  }

  [Symbol.toPrimitive](hint: "number" | "string") {
    if (hint === "string") {
      return `[${this.nums.toString()}]`;
    } else {
      return this.nums.reduce((acc, num) => acc + num, 0);
    }
  }

  // valueOf(): number {
  //   return this.nums.reduce((acc, num) => acc + num, 0);
  // }

  // toString(): string {
  //   return `[${this.nums.toString()}]`;
  // }
}

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(+obj1 + +obj2); // 10
console.log(String(obj1)); // "[1,2]"
console.log(String(obj2)); // "[3,4]"
