const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Function to add a new task
function addTask() {
  const todoText = todoInput.value.trim();

  if (todoText !== "") {
    // Create a new list item
    const listItem = document.createElement("li");
    listItem.textContent = todoText;

    // Create a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      todoList.removeChild(listItem);
    });

    listItem.appendChild(deleteBtn);
    todoList.appendChild(listItem);

    // Clear the input field
    todoInput.value = "";
  }
}

// Add task on button click
addButton.addEventListener("click", addTask);

// Add task on pressing "Enter" key
todoInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
