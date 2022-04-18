//all variable selectors
const todoInput = document.querySelector('#todo-input');
const todoBtn = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoFilter = document.querySelector('#filter-todo');

//Event Listener
document.addEventListener("DOMContentLoaded", getTodos)
todoBtn.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);
todoFilter.addEventListener('click', filterTodo);

//add the list item Functions
function addToDo(event) {
    event.preventDefault();
    //create div and li and li append the div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);
    //Add the local storage
    saveLocalTodo(todoInput.value);
    //CHECK MARK BUTTON
    const cmplteBtn = document.createElement('button');
    cmplteBtn.innerHTML = "<i class='fas fa-check'></i>";
    cmplteBtn.classList.add('complete-btn');
    todoDiv.appendChild(cmplteBtn);
    //CHECK TRASH BUTTON
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = "<i class='fas fa-trash'></i>";
    trashBtn.classList.add('trash-btn');
    todoDiv.appendChild(trashBtn);
    //APPEND TO LIST
    todoList.appendChild(todoDiv);
    //CLEAR THE INPUT FIELD
    todoInput.value = '';
}

//delete check function
function deleteCheck(e) {
    const item = e.target;
    console.log(item);
    if (item.classList[0] === 'trash-btn') {
        const deletItem = item.parentElement;
        deletItem.classList.add('fall')
        removeLocalTodos(deletItem)
        deletItem.addEventListener('transitionend', function () {
            deletItem.remove();
        })
    }

    //check mark button
    if (item.classList[0] === 'complete-btn') {
        const checkItem = item.parentElement;
        checkItem.classList.toggle('completed');
    }
}

//filter todo function
function filterTodo(e) {
    const toods = todoList.childNodes;
    toods.forEach(function (todo) {
        switch (e.target.value) {
            case "All":
                todo.style.display = "flex";
                break;
            case "Complete":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                }
                else {
                    todo.style.display = "none";
                }
                break;
            case "UnComplete":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                }
                else {
                    todo.style.display = "none";
                }
                break;
        }
    })
}


//local stroage save the todo data
function saveLocalTodo(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach((todo) => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        const newTodo = document.createElement('li');
        newTodo.classList.add('todo-item');
        newTodo.innerText = todo;
        todoDiv.appendChild(newTodo);
        //CHECK MARK BUTTON
        const cmplteBtn = document.createElement('button');
        cmplteBtn.innerHTML = "<i class='fas fa-check'></i>";
        cmplteBtn.classList.add('complete-btn');
        todoDiv.appendChild(cmplteBtn);
        //CHECK TRASH BUTTON
        const trashBtn = document.createElement('button');
        trashBtn.innerHTML = "<i class='fas fa-trash'></i>";
        trashBtn.classList.add('trash-btn');
        todoDiv.appendChild(trashBtn);
        //APPEND TO LIST
        todoList.appendChild(todoDiv);
    })
}

function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos))
}