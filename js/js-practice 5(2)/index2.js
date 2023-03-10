// Реалізуйте клас Validator, який перевірятиме рядки.
// Наприклад, у нього буде метод isEmail параметром приймає рядок
// і перевіряє, чи є він коректним емейлом чи ні. Якщо є – повертає true,
// якщо не є – то false. Крім того, клас буде мати такі
// методи: метод isDomain для перевірки домену, isName 
// для перевірки довжини щоб була більше 2 та 1 літера повинна бути велика 

class Validator {
    static domains = ["com", "net", "ua"];

    constructor(str) {
        this.str = str;
    }

    isEmail() {
        const dogMailIndex = this.str.indexOf('@');
        const dotIndex = this.str.indexOf('.')
        const afterDot = this.str.slice(dotIndex + 1);

        if (dogMailIndex < 1) {
            return false;
        }   
        
        if (dotIndex < 0 || (dotIndex - dogMailIndex) <= 3) {
            return false;
        }
        
        if (!Validator.domains.includes(afterDot)) {
            return false;
        }
        return true;

    } 
}

const instanceValidator = new Validator("1sdf@ass.com");

console.log(instanceValidator);
console.log(instanceValidator.isEmail());

