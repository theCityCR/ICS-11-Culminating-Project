/**
 * @author Raymond, Sean, Alex
 */

function openTab(evt, cityName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function addSchedule(event) {
    const schedule = event.target.files[0];
}

document.getElementById("defaultOpen").click();

const d = new Date().toLocaleString();
document.getElementById("date").value = d;
console.log(d);

document.getElementById("scheduleUpload").addEventListener("change", addSchedule);