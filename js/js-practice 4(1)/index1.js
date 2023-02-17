// Даний масив із числами.
// зробити перебір масива
// та збільшивати
// кожний елемент удвічі.

const numbers = [1, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((item, index) => {
    numbers[index] = item * 2;
});
console.log(numbers);