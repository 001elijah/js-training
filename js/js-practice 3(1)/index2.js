// Створити функцію, яка з об'єкта
// створює масиви та повертає об'єкт цих масивів
// 1 - ключі, 2 значення
// результат: {keys: [], values: [] }

const obj = {
    first: "valueFirst",
    second: "valueSecond",
    third: "valueThird",
  };
function objectToArray(object) {
    const arrKeys = Object.keys(object);
    const arrVal = Object.values(object);
    const newObject = {
        keys: [],
        values: []
    };
    for (let i = 0; i < arrKeys.length; i++) {
        newObject['keys'].push(arrKeys[i]);
        newObject['values'].push(arrVal[i]);
    }
    return newObject;
};

console.log(objectToArray(obj));