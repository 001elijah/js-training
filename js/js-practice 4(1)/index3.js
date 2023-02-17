// Дано масив з рядками.
// Створіть функцію яка
// буде приймати масив та
// зробить великим перший символ кожного рядка.

const strings = ["java", "sql", "javaScript", "c++", "node"];
const firstBig = word => {
    acc = '';
    acc += word[0].toUpperCase();
    for (letter = 1; letter < word.length; letter += 1) {
        acc += word[letter];
    };
    return acc;
};

const bigFirstSymbol = (arr, callHelp) => {
    arr.forEach((element, index) => {
        arr[index] = callHelp(element);
    });
    return arr;
};

console.log(bigFirstSymbol(strings, firstBig));