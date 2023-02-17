// Напишіть функцію getAvgSalary(emp)
// яка приймає масив об'єктів
// із властивістю salary та повертає сер. зп

const employees = [
    { name: 'Nikita', salary: 500 },
    { name: 'Volodymyr', salary: 700 },
    { name: 'Vasya', salary: 350 },
];
const getAvgSalary = emp => {
    let avg = 0;
    emp.map(employee => employee.salary).forEach(salary => avg += salary);
    return Math.round(avg / emp.map(employee => employee.salary).length);
};

console.log(getAvgSalary(employees));