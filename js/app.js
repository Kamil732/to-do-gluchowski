// variables
const toDoList = document.getElementById('to-do-list');
const toDoText= document.getElementById('add-to-do-text');
const toDoForm = document.getElementById('to-do-form');
let toDoTextValue = '';
let liCount = 0;

toDoForm.addEventListener('submit', e => {
    e.preventDefault();
    // if(toDoText.value == 0 || liCount >= 25) return;
    if(liCount >= 25) {
        toManyToDo();
        return;
    } 
    if(toDoText.value == 0) {
        emptyToDoText(); 
        return;
    }
    liCount >= 25 ? toManyToDo() : null;

    toDoTextValue = toDoText.value;
    
    addToDo();
    toDoText.value = '';
    liCount++;
});