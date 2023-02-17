// Дано масив з рядками.
// Створіть функцію
// яка переверне символи кожного рядка
// у зворотному порядку.

const strings = ["java", "sql", "javaScript", "c++", "node"];

const wordReverse = word => {
    let reservedString = '';
    for (let i = word.length - 1; i >= 0; i -= 1) {
        reservedString += word[i];
    };
    return reservedString;
};

const arrWordsReverse = (arr, callHelp) => {
    arr.forEach((word, index) => {
        arr[index] = callHelp(word);
    });
    return arr;
};

console.log(arrWordsReverse(strings, wordReverse));