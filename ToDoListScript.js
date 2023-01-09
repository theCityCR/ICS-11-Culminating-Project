tasks=document.getElementsByClassName("task");
x=document.getElementsByClassName("closeTask");

for (i=0;i<tasks.length;i++){
    tasks[i].addEventListener("click",checkTask);
    x[i].addEventListener("click",closeTask);
}

document.addEventListener("keydown",defaultEnter,false);
function addTask(){

    newRow = document.createElement("tr"); //New task element in the list
    newTask1=document.createElement("td")
    newTask1.className="task";
    newTask2=document.createElement("td")
    newTask2.className="task";
    newX=document.createElement("td");
    newX.className="closeTask";
    taskValue1 = document.createTextNode(document.getElementById("taskAdder").value);//take the taskvalue from the input
    taskValue2 = document.createTextNode(document.getElementById("taskAdder").value);
    newTask1.appendChild(taskValue1); //add the task value as the value for the new task
    newTask2.appendChild(taskValue2); //add the task value as the value for the new task
    newX.appendChild(document.createTextNode("✖"));
    newHomeTask=document.createElement("tr");
    if (document.getElementById("taskAdder").value !== '') {
        document.getElementById("taskAdder").value = "";

        newRow.append(newTask1);
        newRow.append(newX);

        checklist = document.getElementById("checklist");
        checklist.append(newRow);

        newHomeTask.appendChild(newTask2);
        document.getElementById("checklistHome").append(newHomeTask);
    }
    newTask1.addEventListener("click",checkTask);
    newX.addEventListener("click",closeTask);
}

function checkTask(event){
    task=event.currentTarget
    check=task.previousElementSibling;
    if (task.style.textDecoration!== "line-through"){
        task.style.textDecoration = "line-through";
    }
    else {
        task.style.textDecoration = "";
    }

}

function closeTask(event){
    taskRow=event.currentTarget.parentElement;
    taskvalue=event.innerHTML;
    taskRow.remove();
}

function defaultEnter(event) {
    if (event.keyCode===13&&document.getElementById("To-do List").style.display==="block"){
        addTask();
    }
}




