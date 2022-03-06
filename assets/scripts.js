//Targeted elements
const header = document.querySelector(".header")
const list = document.querySelector(".todo-list");
const addTaskBtn = document.querySelector(".add-task");
const taskInput = document.querySelector(".task-input")

//Event listeners
addTaskBtn.addEventListener("click", addTask);

//Functions
function addTask() {

  list.innerHTML += `
    <div class="list-task">
      <p class="task"><i class="fa-solid fa-square-check"></i>${taskInput.value}
      <i class="fa-solid fa-trash-can"></i>
      </p>
    </div>
    `;

  taskInput.value = "";
};

function remove() {

};

function complete() {

};

//Code taken from stackoverflow. Noted in Read Me.
/*var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = dd + '.' + mm + '.' + yyyy;

header.append(today);
*/