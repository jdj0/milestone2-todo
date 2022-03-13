//Targeted elements
const header = document.querySelector(".header");
const list = document.querySelector(".todo-list");
const addTaskBtn = document.querySelector(".add-task");
const taskInput = document.querySelector(".task-input");
const completeBtn = document.getElementsByClassName("complete-todo");
const removeBtn = document.getElementsByClassName("remove-todo");
const todayDate = document.querySelector(".date");

//Event listeners
addTaskBtn.addEventListener("click", addTask);


//Takes input value and places it in the list with complete and remove buttons
function addTask() {

  console.log("test-add-task");

  list.innerHTML += `
    <div class="list-task">
      <p class="task">
        <i class="fa-solid fa-square-check complete-todo"></i>${taskInput.value}
        <i class="fa-solid fa-trash-can remove-todo"></i>
      </p>
    </div>
    `;
//Add Event listener to trash buttons
    for (var i = 0; i < removeBtn.length; i++){
      removeBtn[i].addEventListener("click", removeTask);
    };

//Add Event listener to complete buttons
    for (var i = 0; i < completeBtn.length; i++){
    completeBtn[i].addEventListener("click", complete);
    };

//Clear input ready for new task 
  taskInput.value = "";
};


//Deletes task
function removeTask() {

  const listTask = document.getElementsByClassName("list-task");

  this.parentElement.remove();

  console.log("test-remove-todo");

};

function complete() {

  console.log("test-complete");

  this.remove()

};

/*
//Code from stackoverflow. Noted in Read Me.
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = dd + '.' + mm + '.' + yyyy;

todayDate.innerHTML(today);
*/