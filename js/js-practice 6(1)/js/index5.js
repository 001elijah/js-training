// Напишіть функцію, яка має 2 параметри, 1 - кількість div, 2 тип div.
// Після запуску цієї функції на сторінці відобразяться ці елементию
// Типи: square, circle, text.
// Викличте функцію 3 рази і щоразу передавайте різний тип

function createDiv(divAmount, divType) {
    const newElements = [];
    for (let i = 0; i < divAmount; i += 1) {
        newElements.push(document.createElement('div'));
    };
    newElements.forEach(element => {
        element.classList.add(divType);
    });
    document.body.append(...newElements);
};

createDiv(2, 'circle');
createDiv(1, 'square');
createDiv(4, 'text');