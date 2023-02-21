// Отримати всі div і якщо
// дата атрибут дорівнюватиме
// good фарбувати в зелений якщо bad в червоний
// якщо unknown то в білий

// good  - green
// bad - red
// unknown - white

const divs = document.querySelectorAll('div');

for (const element of divs) {
    if (element.dataset.name === 'good') element.style.backgroundColor = 'green';
    if (element.dataset.name === 'bad') element.style.backgroundColor = 'red';
    if (element.dataset.name === 'unknown') element.style.backgroundColor = 'white';
};


