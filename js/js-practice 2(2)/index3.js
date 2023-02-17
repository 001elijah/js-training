'use strict';
// Функція sequence(start, step) під час виклику повертає функцію-генератор.
// Кожен виклик генератора повертає нове число у числовій
// послідовності. start – стартове число (за замовчуванням 0)
// let generator = sequence(10, 3);
//           alert(generator()); // 10
//           alert(generator()); // 13
//           alert(generator()); // 16
function sequence(start = 0, step) {
    return function generatorFunction() {
        return start += step;
    };
}
let generator = sequence(10, 3);
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());