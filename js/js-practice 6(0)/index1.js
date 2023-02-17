// Створіть калькулятор за 
// допомогою конструктора, New Calculator

function Calculator(a, b) {
    this.a = a,
    this.b = b,
    this.getSum = () => {
        return this.a + this.b;
    },
    this.getSub = () => {
        return this.a - this.b;
    },
    this.getMult = () => {
        return this.a * this.b;
    },
    this.getDiv = () => {
        return this.a / this.b;
    }
};

const newCalculator = new Calculator(10,3);

console.log(newCalculator.getDiv());