/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
  if (str === ' ') return str;

  const array = str.split(' ');

  for (let i = 0; i < array.length; i++) {
    if (array[i] === '') {
      array.splice(i, 1);
      i--;
    };
  };

  for (let i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].toLowerCase().slice(1);
  };

  str = array.join(' ');

  return str;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость  всё  простит')); // "Молодость Всё Простит"
console.log(capitalize('молодость    всё      простит'));
console.log(capitalize('молОдоСть вСё прОСтит'));
console.log(capitalize('молодость '));
console.log(capitalize(' '));
