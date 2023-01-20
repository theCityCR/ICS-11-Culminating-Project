/*
 * @author Raymond, Sean, Alex
 */
function openTab(evt, cityName) {
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
    document.getElementById(cityName).style.display = "block"; //take the button we clicked and open the corresponding tab
    evt.currentTarget.className += " active"; //make the button into it's clicked form


}

function dateFormatting(){
    dateArr=new Date().toString().substring(0,15).split(" ");
    weekday=dateArr[0];
    month=dateArr[1];
    day=dateArr[2];
    year=dateArr[3]

    switch (weekday){
        case "Sun": weekday="Sunday";break;
        case "Mon": weekday="Monday";break;
        case "Tue": weekday="Tuesday";break;
        case "Wed": weekday="Wednesday";break;
        case "Thu": weekday="Thursday";break;
        case "Fri": weekday="Friday";break;
        case "Sat": weekday="Saturday";break;
    }
    finaldate=weekday+" "+month+". "+day+", "+year;
    return finaldate;
}

document.getElementById("defaultOpen").click(); //default open home

document.getElementById("date").innerHTML = dateFormatting()
setInterval( function(){
    document.getElementById("date").innerHTML = dateFormatting()
},1000)
