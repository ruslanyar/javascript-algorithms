/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
  const arrayOfWords = str.split(' ');

  arrayOfWords.forEach((word, index) => {
    if (word) {
      arrayOfWords[index] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  });

  str = arrayOfWords.join(' ').replace(/\s+/g,' ').trim();

  return str;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость  всё  простит'));
console.log(capitalize('молодость    всё      простит'));
console.log(capitalize('молОдоСть вСё прОСтит'));
console.log(capitalize('молодость '));
console.log(capitalize(' '));
