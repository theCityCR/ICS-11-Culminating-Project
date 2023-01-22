let tasks=document.getElementsByClassName("task"); // The tasks
let x=document.getElementsByClassName("closeTask"); // Close task parts

let whichImg=true; // which image

for (let i=0;i<tasks.length;i++){
    tasks[i].addEventListener("click",checkTask); // Checks if tasks checked
    x[i].addEventListener("click",closeTask); // Checks if tasks closed
}

document.addEventListener("keydown",defaultEnter,false); // Tasks added through enter button

/**
 * Adds task to the list
 */
function addTask(){
    let newRow = document.createElement("tr"); //New task element in the list
    let newTask1 = document.createElement("td"); // New task
    newTask1.className="task";
    let newTask2 = document.createElement("td"); // New task
    newTask2.className="task";
    let newX = document.createElement("td"); // Close button
    newX.className="closeTask";
    let taskValue1 = document.createTextNode(document.getElementById("taskAdder").value);//take the taskvalue from the input
    let taskValue2 = document.createTextNode(document.getElementById("taskAdder").value);
    newTask1.appendChild(taskValue1); //add the task value as the value for the new task
    newTask2.appendChild(taskValue2); //add the task value as the value for the new task
    newX.appendChild(document.createTextNode("✖"));
    let newHomeTask = document.createElement("tr");
    let checklist;
    if (document.getElementById("taskAdder").value !== '') { // Only adds task if space not empty
        document.getElementById("taskAdder").value = ""; // Clears

        newRow.append(newTask1);
        newRow.append(newX);

        checklist = document.getElementById("checklist");
        checklist.append(newRow); // Adds task

        newHomeTask.appendChild(newTask2); // Adds task
        document.getElementById("checklistHome").append(newHomeTask); // Adds task
    }
    newTask1.addEventListener("click",checkTask); // Adds checking
    newX.addEventListener("click",closeTask); // Adds checking
}

/**
 * Makes the text strikethrough
 * @param event - The event when checked task
 */
function checkTask(event){
    let task = event.currentTarget; // The task
    // Changes state of crossed or not crossed out
    if (task.style.textDecoration!== "line-through"){
        task.style.textDecoration = "line-through";
    }
    else {
        task.style.textDecoration = "";
    }

}

/**
 * Closes task (deletes it)
 * @param event - The event (what task was clicked)
 */
function closeTask(event){
    let taskRow = event.currentTarget.parentElement; // Row task closed
    let taskvalue = event.currentTarget.parentElement.getElementsByTagName("td")[0].innerHTML;
    let hometasks = document.getElementById("checklistHome").getElementsByTagName("td");
    for (let i=0; i<hometasks.length;i++){
        if (hometasks[i].innerHTML===taskvalue){
             hometasks[i].parentElement.remove();
             break;
        }
    }
    taskRow.remove(); // Removes the task
}

/**
 * Adds task if enter key is pressed
 * @param event - Enters the task
 */
function defaultEnter(event) {
    if (event.keyCode===13&&document.getElementById("To-do List").style.display==="block"){
        addTask();
    }
}

/**
 * Changes the image of the task
 */
function changeImg() {
    whichImg=!whichImg;
    if (whichImg){
        document.getElementById("addTaskButton").src="addTaskButton.png";
    }
    else {
        document.getElementById("addTaskButton").src="addTaskButtonHover.png";
    }

}



