numRows = 0;
let sundayArr = [];
let mondayArr = [];
let tuesdayArr = [];
let wednesdayArr = [];
let thursdayArr = [];
let fridayArr = [];
let saturdayArr = [];
function binarySearch(arr, x) {
    let start=0, end=arr.length-1;
    while (start<=end){
        let mid=Math.floor((start + end)/2);
        if (arr[mid]===x) return mid;
        else if (arr[mid] < x)
            start = mid + 1;
        else
            end = mid - 1;
    }
    return -start-1;
}
function addSchedule() {

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
    let insertion = 0;

    if (document.getElementById("addSchedule").value !== '' && document.getElementById("timeInput").value !== '' && document.getElementById("timeInput2").value !== '') {
        let time = parseInt(start.substring(0, 2) + start.substring(3));
        switch (day) {
            case "sunday":
                insertion = binarySearch(sundayArr, time);
                if (insertion < 0) insertion = -insertion-1;
                sundayArr.splice(insertion, 0, time);
                console.log(sundayArr);
                break;
            case "monday":
                insertion = binarySearch(mondayArr, time);
                if (insertion < 0) insertion = -insertion-1;
                mondayArr.splice(insertion, 0, time);
                console.log(mondayArr);
                break;
            case "tuesday":
                insertion = binarySearch(tuesdayArr, time);
                if (insertion < 0) insertion = -insertion-1;
                tuesdayArr.splice(insertion, 0, time);
                console.log(tuesdayArr);
                break;
            case "wednesday":
                insertion = binarySearch(wednesdayArr, time);
                if (insertion < 0) insertion = -insertion-1;
                wednesdayArr.splice(insertion, 0, time);
                console.log(wednesdayArr);
                break;
            case "thursday":
                insertion = binarySearch(thursdayArr, time);
                if (insertion < 0) insertion = -insertion-1;
                thursdayArr.splice(insertion, 0, time);
                console.log(thursdayArr);
                break;
            case "friday":
                insertion = binarySearch(fridayArr, time);
                if (insertion < 0) insertion = -insertion-1;
                fridayArr.splice(insertion, 0, time);
                console.log(fridayArr);
                break;
            case "saturday":
                insertion = binarySearch(saturdayArr, time);
                if (insertion < 0) insertion = -insertion-1;
                saturdayArr.splice(insertion, 0, time);
                console.log(saturdayArr);
                break;
        }
        console.log(insertion);

        document.getElementById("addSchedule").value = "";
        newData.appendChild(scheduleValue);
        newData.appendChild(newLine);
        newData.appendChild(scheduleTime);
        newRow.append(newData);
        scheduleTable.insertBefore(newRow, scheduleTable.children[insertion+1]);
        newData.addEventListener("click",deleteSchedule);
    }
}
function deleteSchedule(event) {
    let task = event.currentTarget;
    task.remove();
}