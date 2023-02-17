// Створити функцію, яка буде
// виводити в консоль привітання і
// ім'я.

const objSpecWords = [
    { name: "Alex", welcome: "Hello!", order: 1 },
    { name: "Dima", welcome: "Hi!", order: 2 },
    { name: "Vasya", welcome: "Good evening!", order: 3 },
  ];

function hello() {
    return `${this.welcome} ${this.name}`;
};

objSpecWords.forEach(object => console.log(hello.call(object)));