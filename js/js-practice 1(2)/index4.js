// Потрібно дістати кожну першу букву та вивести їх через крапку в більшому регістрі
// I am a student again --> S.A
// Якщо в нас слово має тільки дві букви або одну то пропускаємо

const phase = " I am a    student again";
let symbols = '';
let abbreviation = '';
for (let symbol of phase) {
    if (symbol === ' ') {
        console.log(`found space, counting letters in \"${symbols}\", deleteing cache if <= 2 or no letters, OR adding first letter`);
        if (symbols.length <= 2) {
            console.log(`length <= 2 -- deleteing cache`);
            symbols = '';
            continue;
        }
        else {
            abbreviation += symbols.slice(0, 1) + '.';
            console.log(`abbreviation so far: \"${abbreviation}\"`)
        }
        symbols = '';
        continue;
    }
    symbols += symbol;
    console.log(`symbols so far: \"${symbols}\"`);
}

abbreviation = abbreviation + symbols.slice(0, 1) + '.';
abbreviation = abbreviation.toUpperCase();
console.log(`final abbreviation: \"${abbreviation}\"`);

//or this option:
// const phaseNoSpaces = phase.trim();
// let partOfPhrase = "";
// let result = "";
// for (let i = 0; i < phaseNoSpaces.length; i++) {
//     if (phaseNoSpaces[i] === " ") continue;
//     partOfPhrase += phaseNoSpaces[i];
//     if (phaseNoSpaces[i + 1] === " " || !phaseNoSpaces[i + 1]) {
//         if (partOfPhrase.length <= 2) {
//             partOfPhrase = "";
//             continue;
//         }
//         result += !phaseNoSpaces[i + 1] ? partOfPhrase[0].toUpperCase() : partOfPhrase[0].toUpperCase() + ".";
//         partOfPhrase = "";
//     }
// }
// console.log(result)