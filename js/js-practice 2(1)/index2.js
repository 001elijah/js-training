"use stirct";
// Потрібно дістати кожну першу букву та вивести їх через крапку в більшому регістрі
//I am a student again ----> S.A
//Якщо в нас слово має тільки дві букви або одну то пропускаємо
//const phrase = 'I am a student again';
//let result = '';

const phrase = ' I am a     student again';
const phraseNoSpaces = phrase.trim();
const splittedPharse = phraseNoSpaces.split(' ');
let abbreviation = '';
for (item of splittedPharse) {
    if (item.length <= 2) {
        continue;
    }
    abbreviation += item[0] + '.';
}
abbreviation = abbreviation.slice(0, abbreviation.length - 1);
console.log(`The abbreviation for the sentence is: ${abbreviation.toUpperCase(abbreviation)}`);

// split() робить із рядка масив
// join() із масива рядок