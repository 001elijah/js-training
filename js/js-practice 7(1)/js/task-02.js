// Сплив і занурення.
// Потрібно зробити так,
// щоб на Capturing phase (занурення) div фарбувався в чорний,
// Після 1 кліка відбудится фаза Capturing, потім після натискання кнопки
// ми змінемо поведінку та зробимо так, щоб процес став
// Bubbling phase (спливання) і вже тут покрасити в сірий

const btn = document.querySelector('button.up');

const divEls = document.querySelectorAll('div');

// console.log(divEls.forEach(div => console.log(div)));

let counter = 0;

function colorBlack() {
    divEls.forEach(div => div.style.backgroundColor = 'black');
};

function colorGrey() {
    divEls.forEach(div => div.style.backgroundColor = 'grey');
};

function colorSwitch() {
    counter += 1;
    if (counter % 2 === 0) {
        console.log(counter);
        divEls.forEach(div => {
            div.style.backgroundColor = 'grey';
            console.log(div.style.backgroundColor);
            return;
        });
    };
    if (counter % 2 !== 0) {

    };
    console.log(counter);
    divEls.forEach(div => {
        div.style.backgroundColor = 'black';
        console.log(div.style.backgroundColor);
    });
}

// btn.addEventListener('click', colorBlack, { capture: true });
// btn.addEventListener('click', colorGrey);

btn.addEventListener('click', colorSwitch);