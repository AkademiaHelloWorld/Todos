window.onload = function() { 
    const todoListContainer = document.getElementById("todoListContainer");
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");

    for (let i = 0; i < todos.length; i++) {
        const id = todos[i].id;
        const todo = todos[i].todo;
        todoListContainer.innerHTML +=  
            `<div class="todoContainer" id="todoContainer${id}">
                <button class="todoButton" id="todoButton${id}" onclick="deleteTodo(${id})">x</button>
                <input type="checkbox" class="todoCheckbox" id="todoCheckbox${id}" onchange="changeCheckbox(${id})"/>
                <label class="todoLabel" id="todoLabel${id}">${todo}</label>
            </div>`
    }
}

function changeInput() {
    const todoInput = document.getElementById("todoInput");
    const inputButton = document.getElementById("inputButton");

    if (todoInput.value === '') {
        inputButton.style.display = "none";
    } else {
        inputButton.style.display = "inline";
    }

    if (event.keyCode === 13) {
        addTodo();
    }
}

// function addTodo() {
//     const todoInput = document.getElementById("todoInput");
//     const todoListContainer = document.getElementById("todoListContainer");
//     const inputButton = document.getElementById("inputButton");
//     const todoContainers = document.getElementsByClassName("todoContainer");

//     todoListContainer.innerHTML +=  
//             `<div class="todoContainer" id="todoContainer${todoContainers.length + 1}">
//                 <button class="todoButton" id="todoButton${todoContainers.length + 1}" onclick="deleteTodo(${todoContainers.length + 1})">x</button>
//                 <input type="checkbox" class="todoCheckbox" id="todoCheckbox${todoContainers.length + 1}" onchange="changeCheckbox(${todoContainers.length + 1})"/>
//                 <label class="todoLabel" id="todoLabel${todoContainers.length + 1}">${todoInput.value}</label>
//             </div>`

//     todoInput.value = '';
//     inputButton.style.display = "none";
// }

function deleteTodo(id) {
    const container = document.getElementById(`todoContainer${id}`);
    container.remove();
}

function changeCheckbox(id) {
    const checkbox = document.getElementById(`todoCheckbox${id}`);
    const label = document.getElementById(`todoLabel${id}`);
    if(checkbox.checked) {
       label.style.textDecoration = "line-through";
    } else {
        label.style.textDecoration = "none";
    }
}


function addTodo() {
    const todoInput = document.getElementById("todoInput");
    const todoListContainer = document.getElementById("todoListContainer");
    const inputButton = document.getElementById("inputButton");
    const todoContainers = document.getElementsByClassName("todoContainer");

    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    let currentId;

    if(todos.length === 0) {
        currentId = 0;
    } else {
        currentId = todos[todos.length - 1].id;
    }
    

    todos.push({id: currentId + 1, todo: todoInput.value});

    localStorage.setItem("todos", JSON.stringify(todos));

    todoListContainer.innerHTML +=  
            `<div class="todoContainer" id="todoContainer${currentId + 1}">
                <button class="todoButton" id="todoButton${currentId + 1}" onclick="deleteTodo(${currentId + 1})">x</button>
                <input type="checkbox" class="todoCheckbox" id="todoCheckbox${currentId + 1}" onchange="changeCheckbox(${currentId + 1})"/>
                <label class="todoLabel" id="todoLabel${currentId + 1}">${todoInput.value}</label>
            </div>`

    todoInput.value = '';
    inputButton.style.display = "none";
}