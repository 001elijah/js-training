// Є інпут з вибором типу фігури
// При зміні значення інпута
// div з атрибутом canChange змінюються
// на ті, що були обрані в інпуті

const selectType = document.querySelector('#type');
const changableDivs = document.querySelectorAll('div[canchange]');

let currentInputValue = selectType.value;


function replaceClass(evt) {
    changableDivs.forEach(changableDiv => {
        changableDiv.classList.replace(`${currentInputValue}`, `${evt.currentTarget.value}`);
    });
    currentInputValue = evt.currentTarget.value;
};

selectType.addEventListener('input', replaceClass);