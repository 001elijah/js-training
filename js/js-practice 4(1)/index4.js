// Є масив рядків потрібно реалізувати функцію 
// Яка на підрядки java виклиакає колбек функцію 
// яка повертає рядок супер! А на інші "так собі"

const strings = ["java", "sql", "javaScript", "c++", "node"];

const callTrue = word => {
    return console.log(word.includes('java') ? 'супер!' : 'так собі');
}

function javaSearch (arr, callBack) {
    arr.forEach(callBack);
};

javaSearch(strings, callTrue);