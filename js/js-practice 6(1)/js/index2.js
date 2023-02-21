// Отримати всі елементи div з класом pane
// І перезаписати текст на текст із масива

const texts = [
    { name: "Кінь", text: "Навіщо я прочитав про коня" },
    { name: "Віслюк", text: "Навіщо я прочитав про віслюка" },
    { name: "Корова", text: "Навіщо я прочитав про корову" },
  ];

const paneDivs = document.querySelectorAll('.pane > p');

function rewriteText() {
  for (let i = 0; i < paneDivs.length; i += 1) {
    paneDivs[i].textContent = texts[i].text;
  };
};

rewriteText();
