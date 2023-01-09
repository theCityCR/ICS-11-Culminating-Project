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
document.getElementById("defaultOpen").click(); //default open home

document.getElementById("date").innerHTML = new Date().toString();
setInterval( function(){
    document.getElementById("date").innerHTML = new Date().toString();
},10)
