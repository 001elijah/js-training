// написати функцію
// яка поверне масив об'єктів
// але замість імені буде перегорнуте ім'я

let users = [
    { id: 'john', name: 'John Smith', age: 20 },
    { id: 'ann', name: 'Ann Smith', age: 24 },
    { id: 'pete', name: 'Pete Peterson', age: 31 },
];

const userModificate = users.map(user => {
    return {...user, name: reverseString(user.name)};
});

console.log(userModificate);

function reverseString(str) {
    return str.split('').reverse().join('');
}