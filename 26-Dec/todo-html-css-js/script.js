const inputEl = document.querySelector("input")
const addTodoBtn = document.querySelector("button")
const sectionToAddTodos = document.querySelector("#todo-items-section")

function addTodo() {
    const todoCard = document.createElement("p")
    todoCard.innerHTML = inputEl.value
    sectionToAddTodos.appendChild(todoCard)
    inputEl.value = ""
}




