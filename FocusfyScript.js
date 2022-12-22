/**
 * @author Raymond, Sean, Alex
 */

function openTab(evt, cityName) {
    let i, tabcontent, tablinks, tablinksHome;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    tablinksHome = document.getElementsByClassName("tablinksHome");
    for (i = 0; i < tablinksHome.length; i++) {
        tablinksHome[i].className = tablinksHome[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();