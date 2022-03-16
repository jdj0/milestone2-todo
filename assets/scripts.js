/*jshint esversion: 6 */

//Targeted elements
const list = document.querySelector(".todo-list");
const addTaskBtn = document.querySelector(".add-task");
const taskInput = document.querySelector(".task-input");
const completeBtn = document.getElementsByClassName("complete-todo");
const removeBtn = document.getElementsByClassName("remove-todo");
const todayDate = document.querySelector(".date");

//Event listeners
addTaskBtn.addEventListener("click", addTask);

//Functions

//Takes input value and places it in the list with complete and remove buttons
function addTask() {

  //Alerts the user if the task input is empty
  if (taskInput.value == "") {
    alert("The task input is empty");
    return;
  }

  list.innerHTML += `
    <div class="list-task">
      <p class="task">
        <i class="fa-solid fa-square-check complete-todo"></i>${taskInput.value}
        <i class="fa-solid fa-trash-can remove-todo"></i>
      </p>
    </div>
    `;

  //Add Event listener to trash buttons
  for (var i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener("click", removeTask);
  }

  //Add Event listener to complete buttons
  for (var x = 0; x < completeBtn.length; x++) {
    completeBtn[x].addEventListener("click", complete);
  }

  //Clear input ready for new task 
  taskInput.value = "";
}

//Deletes task
function removeTask() {
  let popUp = confirm("Do you want to delete this task?");
    if(popUp){
      this.parentElement.remove();
  }
}

//Toggles cross-through text decoration
function complete() {
  this.parentElement.classList.toggle("complete");
}

//Code from stackoverflow and modified for UK format. Noted in Read Me.
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = dd + '.' + mm + '.' + yyyy;

todayDate.innerHTML = today;