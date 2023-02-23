// Створіть дерево, яке на
// кліку на заголовок приховує-показує нащадків


// const tree = document.querySelector('#tree');

// tree.addEventListener('click', toggleChild);

// function toggleChild(event){
//     if(event.target.children){
//         if( event.target.children[0].style.display === 'none'){
//             event.target.children[0].style.display = 'block'
//             return
//         }
//         event.target.children[0].style.display = "none" 
//     }
    
// }


const tree = document.querySelector('#tree');

tree.addEventListener('click', toggleChild);

function toggleChild({target : {children}}){
    if(!children) return;

    const display = children[0].style.display;

    children[0].style.display =  display === "none" ? "block" : "none";
}
