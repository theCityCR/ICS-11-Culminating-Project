numRows = 0;
function addSchedule(event) {
    scheduleTable = document.getElementById("scheduleTable")
    if (numRows === 0) {
        let newRow = document.createElement("tr");
        let newSchedule = document.createElement("td");
        newSchedule.className = "scheduleTask";
        let scheduleValue = document.createTextNode(document.getElementById("addSchedule").value);
        if (document.getElementById("addSchedule").value !== '') {
            for (let i = 0; i < 7; i++) {

            }
            document.getElementById("addSchedule").value = "";
            newSchedule.appendChild(scheduleValue);

        }
    }
    // newRow = document.createElement("tr");

}