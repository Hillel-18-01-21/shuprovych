const formSelectEl = document.querySelector (".form");
const colorInputEl = document.querySelector ('.color');
const createdFigure = document.querySelector ('.figure');


// createdFigure.addEventListener('change', e => {
//     switch () {
//         case 'receivedForm'
//     }
// })
colorInputEl.addEventListener ('change', e => {
    createdFigure.style.backgroundColor = e.target.value;
});
