// Напишіть сценарій на JavaScript
// для встановлення кольору фону абзацу.
// Напишіть функцію яка буде повертати випадковий колір.
// та назначати абзацу

function randomColor() {
    return `background-color: rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)});`
};

const pElements = document.querySelectorAll('p');
pElements.forEach(paragrpaph => paragrpaph.style = `${randomColor()}`);