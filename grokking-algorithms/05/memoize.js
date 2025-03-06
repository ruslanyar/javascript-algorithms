const operators = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
  '%': (a, b) => a % b,
  '^': (a, b) => a ** b,
  '>': (a, b) => a > b,
  '<': (a, b) => a < b,
  '==': (a, b) => a == b,
  '!=': (a, b) => a != b,
};

function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    console.log('before', cache);
    const argsString = JSON.stringify(...args);
    if (cache.has(argsString)) return cache.get(argsString);
    else {
      const value = fn(...args);
      cache.set(argsString, value);
      console.log('after', cache);
      return value;
    }
  };
}

function calculator(expression) {
  const [a, operator, b] = expression.split(' ');
  const result = operators[operator](parseFloat(a), parseFloat(b));
  return result;
}

const memoizedCalculator = memoize(calculator);
console.log(memoizedCalculator('2 + 2'));
console.log(memoizedCalculator('2 + 2'));
