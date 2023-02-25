// Щоразу, коли користувач буде
// вводити значення, виводити його
// в блок result.
// Робити це тільки тоді,
// коли людина перестала робити введення

const formElem = document.querySelector("#form");
const outputElem = document.querySelector('div.result');
const formData = {};

formElem.addEventListener('input', _.debounce(inputEvent, 500));

function inputEvent(event){
   const outElem = document.createElement('div');

    if (outputElem.children[1]) {
        outputElem.removeChild(outputElem.lastElementChild)
    }

    formData[event.target.name] = event.target.value;

    for(const key in formData){
        outElem.innerHTML += `<br>${key} - ${formData[key]}`;
    }

    outputElem.append(outElem);
}

// name : adasas;
// email : asdasd 