numRows = 0;
//Arrays to keep track of times for each day
let sundayArr = [];
let mondayArr = [];
let tuesdayArr = [];
let wednesdayArr = [];
let thursdayArr = [];
let fridayArr = [];
let saturdayArr = [];

function binarySearch(arr, x) { //Binary search function, finds the index of an element
    let start=0, end=arr.length-1;
    while (start<=end){
        let mid=Math.floor((start + end)/2);
        if (arr[mid]===x) return mid;
        else if (arr[mid] < x)
            start = mid + 1;
        else
            end = mid - 1;
    }
    return -start-1; //returns this if the element was not found in the array
}
function addSchedule() {
    let day = document.getElementById("daySelect").value; //Takes the day from selection
    let start = document.getElementById("timeInput").value; //Takes the start time
    let end = document.getElementById("timeInput2").value; //Takes the end time
    let scheduleTable = document.getElementById(day); //Gets the schedule for the certain day
    //Creates a new row, data and div element
    let newRow = document.createElement("tr");
    let newData = document.createElement("td");
    let newDiv = document.createElement("div");
    //Gives these elements a class name
    newDiv.className = "scheduleDiv";
    newRow.className = "scheduleRow";
    newData.className = "scheduleData";

    let taskName = document.getElementById("addSchedule").value; //Takes the name of the task from the text box
    let scheduleValue = document.createTextNode(taskName); //Creates a new text node based on the task name
    let newLine = document.createElement("br"); //Creates a line break for the task
    let scheduleTime = document.createTextNode( start + ' - ' + end); //Creates a new text node based on the start and end times
    let insertion = 0; //Insertion point of the start time

    if (document.getElementById("addSchedule").value !== '' && document.getElementById("timeInput").value !== '' && document.getElementById("timeInput2").value !== '') {
        //Checks if everything is filled in
        let time = parseInt(start.substring(0, 2) + start.substring(3)); //converts the start time into an integer
        switch (day) { //Switch statement based off the day
            case "sunday":
                insertion = binarySearch(sundayArr, time); //Finds the insertion point using binary search
                if (insertion < 0) insertion = -insertion-1; //If it is negative convert to the positive insertion point
                sundayArr.splice(insertion, 0, time); //Add the element into the corresponding array based on the day
                break;
            case "monday":
                insertion = binarySearch(mondayArr, time);
                if (insertion < 0) insertion = -insertion-1;
                mondayArr.splice(insertion, 0, time);
                break;
            case "tuesday":
                insertion = binarySearch(tuesdayArr, time);
                if (insertion < 0) insertion = -insertion-1;
                tuesdayArr.splice(insertion, 0, time);
                break;
            case "wednesday":
                insertion = binarySearch(wednesdayArr, time);
                if (insertion < 0) insertion = -insertion-1;
                wednesdayArr.splice(insertion, 0, time);
                break;
            case "thursday":
                insertion = binarySearch(thursdayArr, time);
                if (insertion < 0) insertion = -insertion-1;
                thursdayArr.splice(insertion, 0, time);
                break;
            case "friday":
                insertion = binarySearch(fridayArr, time);
                if (insertion < 0) insertion = -insertion-1;
                fridayArr.splice(insertion, 0, time);
                break;
            case "saturday":
                insertion = binarySearch(saturdayArr, time);
                if (insertion < 0) insertion = -insertion-1;
                saturdayArr.splice(insertion, 0, time);
                break;
        }
        //Appends everything to the created table data element
        document.getElementById("addSchedule").value = "";
        newData.appendChild(scheduleValue);
        newData.appendChild(newLine);
        newData.appendChild(scheduleTime);
        newRow.append(newData);
        scheduleTable.insertBefore(newRow, scheduleTable.children[insertion+1]);
        //Adds event listener to the table data element
        newData.addEventListener("click",deleteSchedule);
    }
}
function deleteSchedule(event) {
    let task = event.currentTarget;
    let str = task.innerHTML; //Takes the data inside the table data and turns it into a string
    let time = str.substring(str.length-13, str.length-11) + str.substring(str.length-10, str.length-8); //Extracts out the start time
    let day = task.parentElement.parentElement.id; //Find the day the table data is in

    switch (day) { //Switch statement based on the day
        case "sunday":
            sundayArr.splice(binarySearch(sundayArr, time), 1); //Removes the time from the corresponding array
            break;
        case "monday":
            mondayArr.splice(binarySearch(mondayArr, time), 1);
            break;
        case "tuesday":
            tuesdayArr.splice(binarySearch(tuesdayArr, time), 1);
            break;
        case "wednesday":
            wednesdayArr.splice(binarySearch(wednesdayArr, time), 1);
            break;
        case "thursday":
            thursdayArr.splice(binarySearch(thursdayArr, time), 1);
            break;
        case "friday":
            fridayArr.splice(binarySearch(fridayArr, time), 1);
            break;
        case "saturday":
            saturdayArr.splice(binarySearch(saturdayArr, time), 1);
            break;
    }
    task.remove(); //Removes the table data element
}