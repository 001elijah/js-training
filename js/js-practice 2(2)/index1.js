"use strict";
// Напишіть функцію, яка приймає 2 аргумента типу string
// та повертає їх разом через -
// mergStr("str1", "str2") => str1-str2
function mergStr(textOne, textTwo) {
    let textCommon = `${textOne}-${textTwo}`;
    return textCommon;
}

console.log(mergStr("str1", "str2"));