function addToDo() {
    const newLi = document.createElement('li');
    const delBtn = document.createElement('button');
    const editBtn = document.createElement('button');
    const editText = document.createElement('input');
    const editAgreeBtn = document.createElement('button');

    delBtn.classList.add('list-del-btn');
    editBtn.classList.add('list-edit-btn');
    editText.classList.add('edit-text');
    editAgreeBtn.classList.add('list-agree-btn');

    newLi.textContent = toDoTextValue;
    editAgreeBtn.textContent = 'AGREE';
    delBtn.textContent = 'DELETE';
    editBtn.textContent = 'EDIT';

    newLi.appendChild(delBtn);
    newLi.appendChild(editBtn);
    toDoList.appendChild(newLi);

    editBtn.addEventListener('click', () => {
        editText.value = newLi.textContent.replace('DELETEEDIT', '');
        newLi.textContent = '';
        
        newLi.appendChild(editText);
        newLi.appendChild(editAgreeBtn);
    });
    
    editAgreeBtn.addEventListener('click', () => {
        newLi.textContent = editText.value;
        newLi.appendChild(delBtn);
        newLi.appendChild(editBtn);
    });

    delBtn.addEventListener('click', () => {
        liCount--;
        toDoList.removeChild(newLi);
    });
}

const emptyToDoText = () => alert('TO DO CANNOT BE EMPTY!');

const toManyToDo = () => alert('TO MANY TO DO');