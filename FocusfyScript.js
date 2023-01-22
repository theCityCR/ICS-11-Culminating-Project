/**
 * Opens a tab when the user clicks on it
 * @param evt - The event object (not used)
 * @param tabName - The name of the tab to open
 */
function openTab(evt, tabName) {
    let i, tabcontent, tablinks, tablinksHome;
    tabcontent = document.getElementsByClassName("tabcontent"); //array of all elements with this classname
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"; //hide all the tabs
    }
    tablinks = document.getElementsByClassName("tablinks"); //array of all tablinks
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", ""); //make all tabs into their unclicked forms
    }
    tablinksHome = document.getElementsByClassName("tablinksHome"); //home button
    for (i = 0; i < tablinksHome.length; i++) {
        tablinksHome[i].className = tablinksHome[i].className.replace(" active", ""); //unclick the button
    }
    document.getElementById(tabName).style.display = "block"; //take the button we clicked and open the corresponding tab
    evt.currentTarget.className += " active"; //make the button into it's clicked form
}

/**
 * Converts the current date into a format that can be displayed to the user
 * @returns {string} The date in weekday, month, day, year format
 */
function dateFormatting(){
    // Finds the current date
    let dateArr = new Date().toString().substring(0, 15).split(" ");
    let weekday = dateArr[0];
    let month = dateArr[1];
    let day = dateArr[2];
    let year = dateArr[3]

    // Find the day of the week
    switch (weekday){
        case "Sun": weekday="Sunday";break;
        case "Mon": weekday="Monday";break;
        case "Tue": weekday="Tuesday";break;
        case "Wed": weekday="Wednesday";break;
        case "Thu": weekday="Thursday";break;
        case "Fri": weekday="Friday";break;
        case "Sat": weekday="Saturday";break;
    }
    // Combine all variables
    return weekday + " " + month + ". " + day + ", " + year;
}

document.getElementById("defaultOpen").click(); //default open home

document.getElementById("date").innerHTML = dateFormatting() // Puts date
setInterval( function(){
    document.getElementById("date").innerHTML = dateFormatting()
},1000) // Updates the date every second
