/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    if (str === ' ') {return str};
    if (!str) {return str};
    
    
    const arr = str.split(' ').map(function(item) {
        return item = item[0].toUpperCase() + item.slice(1);
    });
    let str2;
    return str2 = arr.join(' ');
  }

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
console.log(capitalize('молодость'));