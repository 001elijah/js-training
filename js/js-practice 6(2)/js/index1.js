// Дано посилання. Прив'яжіть всім посиланням подію -
// за наведенням на посилання в атрибут title запишеться її текст (textContent)

const links = document.querySelectorAll('a');
console.log(links);

function textToAttr(evt) {
    // this.setAttribute('title', `${this.textContent}`);
    // this.dataset.title = `${this.textContent}`;
    evt.target.dataset.title = `${this.textContent}`;
};

for (let link of links) {
    link.addEventListener('mouseover', textToAttr);
};