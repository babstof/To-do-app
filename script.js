const inputBox = document.getElementById("input-box");
const taskContainer = document.getElementById("task-container");
const allButton = document.getElementById("show-all");
const activeButton = document.getElementById("show-active");
const completedButton = document.getElementById("show-completed");
const clearCompletedButton = document.getElementById("clear-completed");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li"); // createElement was used to create li
    li.innerHTML = inputBox.value; // inputBox.value allows me to access the content that the user entered into the input field
    taskContainer.appendChild(li); // adds an html element li
    let imgElement = document.createElement("img");
    imgElement.src = "images/icon-cross.svg"; // adds an img frm the file path
    li.appendChild(imgElement);
  }
  inputBox.value = "";
  updateTaskCount();
}

taskContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "IMG") {
      e.target.parentElement.remove();
    }
  },
  false
);

// let tasks = [
//   { text: "Task 1", completed: false },
//   { text: "Task 2", completed: true },
//   { text: "Task 3", completed: false },
// ];

populateList();

allButton.addEventListener("click", showAll);
activeButton.addEventListener("click", showActive);
completedButton.addEventListener("click", showCompleted);
clearCompletedButton.addEventListener("click", clearCompleted);

function populateList() {
  taskContainer.innerHTML = "";
  // tasks.forEach((task) => {
  //   let li = document.createElement("li");
  //   li.textContent = task.text;
  //   if (task.completed) {
  //     li.classList.add("checked");
  //   }
  //   taskContainer.appendChild(li);
  // });
  // updateTaskCount();
}
console.log(task);

// counts the number of tasks left
function updateTaskCount() {
  const activeTasks = taskContainer.querySelectorAll("li:not(.checked)").length;
  const countElement = document.getElementById("task-left-count");
  countElement.textContent = activeTasks + " items left";
}

function showAll() {
  populateList();
}

function showActive() {
  const activeTasks = tasks.filter((task) => !task.completed);
  renderTasks(activeTasks);
}

function showCompleted() {
  const completedTasks = tasks.filter((task) => task.completed);
  renderTasks(completedTasks);
}

function clearCompleted() {
  tasks = tasks.filter((task) => !task.completed);
  populateList();
}

function renderTasks(filteredTasks) {
  taskContainer.innerHTML = "";
  filteredTasks.forEach((task) => {
    let li = document.createElement("li");
    li.textContent = task.text;
    if (task.completed) {
      li.classList.add("checked");
    }
    taskContainer.appendChild(li);
  });
  // updateTaskCount();
}
