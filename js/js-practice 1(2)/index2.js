// 1.
// За допомогою циклу for створіть новий рядок, додайте кожному элементу окрім 1 
// та останнього -.
// 1-2-3-4-5-6-7-8-9 - кінцевий результат

let numbers = '';

for (let i = 1; i < 10; i++) {
    numbers += `${i}-`;
}

console.log(numbers.slice(0, numbers.length - 1));