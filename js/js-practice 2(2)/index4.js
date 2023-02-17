'use strict';
// Напишіть функцію mul(n,m), яка приймає
// два аргументи та повертає добуток цих аргументів
// 100 > "більше 100"
// 100 < "меньше 100"
// Передавати в функцію додатково 2 функції
// та викликати як колбек в залежності від умови
function lessMul () {
    return 'менше 100';
}
function moreMul () {
    return 'більше 100';
}
function mul(n, m, callbackOne, callbackTwo) {
    let multiply = n * m;
    return multiply > 100 ? callbackOne() : callbackTwo();
}

console.log(mul(30, 4, moreMul, lessMul));