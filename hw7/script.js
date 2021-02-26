
const inputEl = document.getElementById('task-input');
const btnEl = document.getElementById('task-add-btn');
const liEl = document.getElementById('task-list');

btnEl.addEventListener('click', onTaskCreate);
liEl.addEventListener('click', onLiClick);

function onTaskCreate() {
    const taskEl = document.createElement('li');
    taskEl.innerHTML = `${inputEl.value}`;
    liEl.append(taskEl);
    inputEl.value = '';
};
function onLiClick(e){
    e.target.classList.add('delEl');
}