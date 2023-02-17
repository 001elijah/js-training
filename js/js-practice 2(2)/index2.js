'use strict';
// Напишіть функцію addN(n), яка поверне іншу функцію.
// Повернена функція повинна складати одержуваний аргумент
// з аргументом n функції, що повертає
function addN(n) {
    return function otherFunction(a){
        return n + a;
    };
}

console.log(addN(2)(3));

// const twoValue = addN(2);
// const hundryValue = addN(100);

// console.log(twoValue(10))
// console.log(hundryValue(10));

// ||***************||***********************************||*************||

// function chooseBlock(blockName) {
//     return function (numberOfFlat) {
//         if (blockName === "A") {
//             return [1,3,4,5,6,7].includes(numberOfFlat)
//         }

        
//     }
// }


// const blockA = chooseBlock("A");
// const blockB = chooseBlock("B");


// console.log(blockA(3))