const inputEl = document.querySelector("input");
const addTodoBtn = document.querySelector("button");
const sectionToAddTodos = document.querySelector("#todo-items-section");

function createTodoCard(value) {
  const todoCard = document.createElement("div");
  todoCard.classList.add("todo-card");
  const todoContent = document.createElement("p");
  todoContent.innerHTML = value;
  todoCard.appendChild(todoContent);

  //TASK1 - convert todo-completed class to a toggle class
  todoContent.addEventListener("click", function () {
    todoContent.classList.add("todo-completed");
  });


  //TASK3 - Get a confirmation from the user before deleting the todo
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";
  todoCard.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", function () {
    let todos = localStorage.getItem("todos");
    todos = JSON.parse(todos)
    console.log(todos)
    todos = todos.filter(todo => todo !== value)
    localStorage.setItem("todos", JSON.stringify(todos))
    todoCard.remove();
  });

  const editBtn = document.createElement("button");
  editBtn.innerText = "edit";
  todoCard.appendChild(editBtn);
  editBtn.addEventListener("click", function () {
    const editInput = document.createElement("input");
    editInput.value = value;
    todoCard.appendChild(editInput);

    //TASK2 - Instead of creating input box in addition to todoContent, replace todoContent with edit box when clicked on edit button
    editInput.addEventListener("keypress", function (e) {
      if (e.key == "Enter") {
        // 1. Whatever value is present inside editInput should be copied to todoContent
        // 2. Once copied, delete editInput
        todoContent.innerText = editInput.value;
        editInput.remove();
      }
    });
  });

  sectionToAddTodos.appendChild(todoCard);
}

function addTodo() {
  if (!inputEl.value) {
    alert("Please enter a valid todo!");
  } else {
    createTodoCard(inputEl.value);
    let todos = localStorage.getItem("todos");
    if (todos) {
      todos = JSON.parse(todos);
      todos.push(inputEl.value)
      localStorage.setItem("todos", JSON.stringify(todos))
    } else {
      localStorage.setItem("todos", JSON.stringify([inputEl.value]))
    }
    inputEl.value = "";
  }
}


function prePopulateTodos() {
  let todos = localStorage.getItem("todos");
  if (todos) {
    todos = JSON.parse(todos);
  } else {
    todos = [];
  }

  // ["first todo", "second todo"]
  todos.forEach(todo => createTodoCard(todo))
}

prePopulateTodos()