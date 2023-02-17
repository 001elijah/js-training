// Вивести перші букви ключів об'єкта,
// Та створити функцію яка повертає об'єкт
// з кількістю повторення букв

const objValues = {
    first: "valueFirst",
    second: "valueSecond",
    third: "valueThird",
    fourth: "valueFourth",
    Fifth: "valueFifth",
    sixth: "valueSixth",
  };


function getKeyCounterFirstLetter(obj) {
    const objKeys = Object.keys(objValues);
    const result = {};
    for (const key of objKeys) {
        result[key.slice(0, 1)] = '';
        console.log(key.slice(0, 1));
    };
    return result;
};

getKeyCounterFirstLetter(objValues);
console.log(getKeyCounterFirstLetter(objValues));

// Вивести перші букви ключів об'єкта,
// Та створити функцію яка повертає об'єкт
// з кількістю повторення букв

// const objValues = {
//     first: "valueFirst",
//     second: "valueSecond",
//     third: "valueThird",
//     fourth: "valueFourth",
//     Fifth: "valueFifth",
//     sixth: "valueSixth",
//   };
  
//   function getKeyCounterFirstLetter(obj) { 
//     const result = {};
  
//     for (const key in obj) { 
//       const firstLetter = key[0].toLowerCase();
  
//       if (!result[firstLetter]) { 
//         result[firstLetter] = 1;
//         continue;
//       } 
      
//       result[firstLetter] += 1;
  
//     }
    
//     return result;
//   }
//   console.log(getKeyCounterFirstLetter(objValues));