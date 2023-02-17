// Потрібно викинути мусор з массива, якщо там є
// null, undefined, true, false то видаляємо та
// Виводемо скільки мусора ми знайшли

// const arr = [1, 2, true, 3, undefined, "str", null, "asd", false]; --> [1,2,3,"str","asd"]

const arr = [1, 2, true, 3, undefined, "str", null, "asd", false];
let counter = 0;
const garbage = [null, undefined, true, false];
const freshArr = [];

for (item of arr) {
    if (garbage.includes(item)) {
        counter ++;
        continue;
    } 
    else {
        freshArr.push(item);
    }
}

console.log(`array cleaned, new array: \"${freshArr}\", items deleted: ${counter}`);