// Adds the event listener to the document
document.getElementById("scheduleUpload").addEventListener("change", addSchedule);

/*
Adds the schedule
 */
function addSchedule(event) {
    const schedule = event.target.files[0];
    console.log(schedule);
}