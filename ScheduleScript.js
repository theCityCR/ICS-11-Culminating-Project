numRows = 0;
function addSchedule(event) {
    let day = document.getElementById("daySelect").value;
    let scheduleTable = document.getElementById(day);
    let newRow = document.createElement("tr");
    let newData = document.createElement("td");
    let newDiv = document.createElement("div");
    newDiv.className = "scheduleDiv";
    newRow.className = "scheduleRow";
    newData.className = "scheduleData";
    let scheduleValue = document.createTextNode(document.getElementById("addSchedule").value);
    if (document.getElementById("addSchedule").value !== '') {
        document.getElementById("addSchedule").value = "";

        newDiv.appendChild(scheduleValue);
        newData.append(newDiv);
        newRow.append(newData);
        scheduleTable.append(newRow);
        newData.addEventListener("click",deleteSchedule);
    }
}

function deleteSchedule(event) {
    let task = event.currentTarget;
    task.remove();
}