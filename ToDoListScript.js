tasks=document.getElementsByClassName("task");

function addTask(){
    newTask = document.createElement("li"); //New task element in the list
    taskValue = document.createTextNode(document.getElementById("taskAdder").value);//take the taskvalue from the input
    newTask.appendChild(taskValue); //add the task value as the value for the new task

    document.getElementById("taskAdder").value = "";//clear the input

    const currentDiv = document.getElementById("checklist");
    currentDiv.append(newTask);

}