/*
 * @author Raymond, Sean, Alex
 */
timerStart=false;
function openTab(evt, cityName) {
    let i, tabcontent, tablinks,tablinksHome;
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
    //evt.currentTarget.className += " active";


}
let time = 1800000
document.getElementById("timeleft").innerHTML=hhmmss(time);

function hhmmss(miliseconds)
{
    let hours=Math.floor(miliseconds/3600000);
    let minutes=Math.floor((miliseconds-hours*3600000)/60000);
    let seconds=Math.floor((miliseconds-hours*3600000-minutes*60000)/1000);

    return (""+hours+":"+minutes+":"+seconds);
}
function startTimer()
{
    timerStart=!timerStart;
    if (timerStart) {
        setInterval(function(){
            time = time - 1;
            document.getElementById("timeleft").innerHTML=hhmmss(time);
            console.log(hhmmss(time));
        }, 1000);
    }
}
/*
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);*/
