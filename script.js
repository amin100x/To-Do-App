const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos")

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
    todos.forEach((todo) => {
        addTodo(todo);
    });
}

form.addEventListener('submit',
    (e) => {
        e.preventDefault();
        addTodo();
    });

function addTodo() {
    let todoText = input.value;

    if (todoText) {

        const todoEle = document.createElement("li");
        todoEle.innerText = todoText;
        todosUL.appendChild(todoEle);

        todoEle.addEventListener('click', () => {
            todoEle.classList.toggle("complete");
        });
        todoEle.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            todoEle.remove();
        })
    }
    input.value = "";
}

