// Створіть функцію-конструктор Accumulator(startingValue).

// Об'єкт, який вона створює, має вміти таке:

// Зберігати «поточне значення» як value. Початкове значення 
// встановлюється в аргументі конструктора StartValue.
// Метод read() повинен використовувати prompt для 
// зчитування нового числа та додавання його до value.

// Іншими словами, властивість value є сумою всіх введених 
// користувачем значень, з урахуванням початкового значення 
// startingValue.

function Accumulator(startingValue) {
    this.startingValue = startingValue,
    this.read = () => {
        this.startingValue += prompt('write a string');
    },
    this.getStartingValue = () => {
        return this.startingValue;
    }
};

const newAccumulator = new Accumulator(77);
newAccumulator.read();
newAccumulator.read();
newAccumulator.read();
newAccumulator.read();
newAccumulator.read();
console.log(newAccumulator.getStartingValue());