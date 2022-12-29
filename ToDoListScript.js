tasks=document.getElementsByClassName("task");

function addTask(){

    newTask = document.createElement("li"); //New task element in the list
    taskValue = document.createTextNode(document.getElementById("taskAdder").value);//take the taskvalue from the input
    newTask.appendChild(taskValue); //add the task value as the value for the new task
    if (document.getElementById("taskAdder").value !== '') {
        document.getElementById("taskAdder").value = "";
        const checklist = document.getElementById("checklist");
        checklist.append(newTask);
    }



}