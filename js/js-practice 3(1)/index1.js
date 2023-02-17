// Створити функцію, яка з 2 масивів створює
// об'єкт та повертає його
// 1 - ключі, 2 значення

const keys = ["first", "second", "third"];
const values = ["valueFirst", "valueSecond", "valueThird"];

function getObjectFromArray(arrOne, arrTwo) {
    const newObject = {};
    for (let i = 0; i < arrOne.length; i++) {
        newObject[arrOne[i]] = arrTwo[i];
    }
    return newObject;
};

console.log(getObjectFromArray(keys, values));
