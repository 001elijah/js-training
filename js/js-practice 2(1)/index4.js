"use stirct"
// Напишіть сценарій, який поділяє масив на частини заданого розміру
// Приклад з sizeCouple = 2:
// [2, 3, 4, 5, 6, 7, 8, 9] => [[2, 3], [4, 5], [6, 7], [8, 9]]

const arr = [2, 3, 4, 5, 6, 7, 8, 9];
const sizeOfBatch = 2;
let reservedArr = [];
const newArr = [];
while (arr.length > 0) {
    reservedArr = arr.splice(0, sizeOfBatch);
    newArr.push(reservedArr);
}
console.log(newArr);