tasks=document.getElementsByClassName("task");
x=document.getElementsByClassName("closeTask");

for (i=0;i<tasks.length;i++){
    tasks[i].addEventListener("click",checkTask);
    x[i].addEventListener("click",closeTask);
}
function addTask(){

    newRow = document.createElement("tr"); //New task element in the list
    newTask=document.createElement("td")
    newTask.className="task";
    newX=document.createElement("td");
    newX.className="closeTask";
    taskValue = document.createTextNode(document.getElementById("taskAdder").value);//take the taskvalue from the input
    newTask.appendChild(taskValue); //add the task value as the value for the new task
    newX.appendChild(document.createTextNode("✖"));

    if (document.getElementById("taskAdder").value !== '') {
        document.getElementById("taskAdder").value = "";

        newRow.append(newTask);
        newRow.append(newX);

        checklist = document.getElementById("checklist");
        checklist.append(newRow);
    }

    newTask.addEventListener("click",checkTask);
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
    taskRow.remove();
}



