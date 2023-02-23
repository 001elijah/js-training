// Наведено список повідомлень з кнопками
// для видалення [x]. Змусіть кнопки працювати.

const containerRef = document.querySelector('#container');

containerRef.addEventListener('click', buttonClose)

function buttonClose(e){
    if (!e.target.classList.contains('remove-button')) return
      
    e.target.closest(".pane").remove();    
}