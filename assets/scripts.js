//Targeted elements
const list = document.querySelector(".todo-list");
const addTaskBtn = document.querySelector(".add-task");
const taskInput = document.querySelector(".task-input")

//Event listeners
addTaskBtn.addEventListener("click", addTask);

//Functions

function addTask(){
    let setTask = document.createElement("li");
    setTask.innerHTML = taskInput.value;
    list.append(setTask);
};

function remove(){

}

function tick(){
    
};