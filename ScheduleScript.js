numRows = 0;
let taskArr = [];
let timeArr = [];

// p u bli c s t a t i c i n t b i n a r y S e a r c h( i n t v ) {
//     i n t l = 0 ;
//     i n t r = a r r . l e n g t h − 1 ;
//     w hil e ( l <= r ) {
//         i n t m = ( l + r ) / 2 ;
//         i f ( a r r [m] == v )
//         r e t u r n m;
//         i f ( a r r [m] > v )
//         r = m − 1 ;
//         e l s e
//         l = m + 1 ;
//     }
//     r e t u r n −l − 1 ;
// }

function addSchedule(event) {
    let day = document.getElementById("daySelect").value;
    let start = document.getElementById("timeInput").value;
    let end = document.getElementById("timeInput2").value;
    let scheduleTable = document.getElementById(day);
    let newRow = document.createElement("tr");
    let newData = document.createElement("td");
    let newDiv = document.createElement("div");
    newDiv.className = "scheduleDiv";
    newRow.className = "scheduleRow";
    newData.className = "scheduleData";
    let taskName = document.getElementById("addSchedule").value;
    let scheduleValue = document.createTextNode(taskName);
    let newLine = document.createElement("br");
    let scheduleTime = document.createTextNode( start + ' - ' + end);
    if (document.getElementById("addSchedule").value !== '') {
        taskArr.push(taskName);
        taskArr.push(start);
        console.log(scheduleValue);
        console.log(start);

        document.getElementById("addSchedule").value = "";
        newData.appendChild(scheduleValue);
        newData.appendChild(newLine);
        newData.appendChild(scheduleTime);
        newRow.append(newData);
        scheduleTable.append(newRow);
        newData.addEventListener("click",deleteSchedule);
    }
    let arr=document.getElementById("sunday").getElementsByTagName("td");
    console.log(arr);
}
function deleteSchedule(event) {
    let task = event.currentTarget;
    task.remove();
}