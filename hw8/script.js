const formSelectEl = document.getElementById ('form');
const colorInputEl = document.getElementById ('color');
const createdFigure = document.getElementById ('figure');


colorInputEl.addEventListener('change', onColorChange);
formSelectEl.addEventListener('change', onShapeChange)

function onColorChange (){
    setColor(colorInputEl.value);
 };

 function onShapeChange (){
   setForm(formSelectEl.value);
};

 function setColor (color){
    createdFigure.style.backgroundColor = color;
 };

 function setForm (figure) {
   createdFigure.className = `figure ${figure}`
 };