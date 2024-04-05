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
  saveData();
}

taskContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "IMG") {
      e.target.parentElement.remove();
      updateTaskCount(); // reduces the tasks when deleted
      saveData();
    }
  },
  false
);

// update count of the task
function updateTaskCount() {
  const activeTasks = taskContainer.querySelectorAll("li:not(.checked)").length;
  const countElement = document.getElementById("task-left-count");
  countElement.textContent = activeTasks + " items left";
  saveData();
}
//function to show all tasks
function showAll() {
  const tasks = taskContainer.querySelectorAll("li");
  tasks.forEach(function (task) {
    task.style.display = "block"; //shows all task
  });
  updateTaskCount();
  saveData();
}

// Function to show only active tasks
function showActive() {
  const tasks = taskContainer.querySelectorAll("li");
  tasks.forEach(function (task) {
    if (!task.classList.contains("checked")) {
      task.style.display = "block"; // Show active tasks
    } else {
      task.style.display = "none"; // Hide completed tasks
    }
  });
  // updateTaskCount();
  saveData();
}
// Function to show only completed tasks
function showCompleted() {
  const tasks = taskContainer.querySelectorAll("li");
  tasks.forEach(function (task) {
    if (task.classList.contains("checked")) {
      task.style.display = "block"; // Show completed tasks
    } else {
      task.style.display = "none"; // Hide active tasks
    }
  });
}
// Function to clear completed tasks
function clearCompleted() {
  const completedTasks = taskContainer.querySelectorAll("li.checked");
  completedTasks.forEach(function (task) {
    task.remove(); // Remove completed tasks
  });
  saveData();
}

allButton.addEventListener("click", showAll);
activeButton.addEventListener("click", showActive);
completedButton.addEventListener("click", showCompleted);
clearCompletedButton.addEventListener("click", clearCompleted);

// function to save data on the browser everytime is refreshed
function saveData() {
  localStorage.setItem("data", taskContainer.innerHTML);
  console.log("data");
}
saveData();
//function to show details of data saved even after being refreshed
function showTask() {
  taskContainer.innerHtml = localStorage.getItem("data");
}
showTask();

// toggle

document.getElementById("image").addEventListener("click", function () {
  let img = document.getElementById("image");

  if (img.src.endsWith("images/icon-sun.svg")) {
    img.src = "images/icon-moon.svg";
    img.alt = "Image 2";
    document.body.style.backgroundColor = "hsl(236,0%, 92%)";
    document.getElementById("to-do").style.backgroundImage =
      "url('images/bg-desktop-light.jpg')";
    document.getElementById("tasks").style.backgroundColor = "hsl(0, 0%, 98%)";
    document.getElementById("input-box").style.color = "hsl(235, 21%, 11%)";
    document.getElementById("task-container").style.backgroundColor =
      "hsl(0, 0%, 98%)";
    document.getElementById("task-container").style.color =
      "hsl(235, 24%, 19%)";
    document.getElementById("tfooter").style.backgroundColor =
      "hsl(0, 0%, 98%)";
  } else {
    img.src = "images/icon-sun.svg";
    img.alt = "sun-image";
    document.body.style.backgroundColor = "hsl(235,21%, 11%)";
    document.getElementById("to-do").style.backgroundImage =
      "url('images/bg-desktop-dark.jpg')";
    document.getElementById("tasks").style.backgroundColor =
      "hsl(235, 24%, 19%)";
    document.getElementById("input-box").style.color = "hsl(0, 0%, 98%)";
    document.getElementById("task-container").style.backgroundColor =
      "hsl(235, 24%, 19%)";
    document.getElementById("task-container").style.color = "hsl(0, 0%, 98%)";
    document.getElementById("tfooter").style.backgroundColor =
      "hsl(235, 24%, 19%)";
  }
});
