// Намалювати ялинку
const size = 7;

function treeConstruct(size, spaces, symbols) {
    for (let i = 1; i <= size; i += 1) {
        console.log(`${spaces(size - i)}${symbols(i*2)}`);
    }
};

function createSpaces(quantity) {
    return ' '.repeat(quantity);
};
``
function createSymbols(quantity) {
    return '*'.repeat(quantity);
};

treeConstruct(size, createSpaces, createSymbols);

// Намалювати ялинку
// const size = 7;

// function treeConstruct(size, create) {
//     for (let i = 1; i <= size; i += 1) {
//         console.log(`${create(" ",size - i)}${create("*", i*2)}`);
//     }
// };

// function createElement(type, quantity) {
//     return `${type}`.repeat(quantity);
// }

// treeConstruct(size, createElement);