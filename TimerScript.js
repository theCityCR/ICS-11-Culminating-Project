timerStart=false;

let time = 1800000
document.getElementById("timeleft").innerHTML=hhmmss(time);

function hhmmss(miliseconds)
{
    let hours=Math.floor(miliseconds/3600000);
    let minutes=Math.floor((miliseconds-hours*3600000)/60000);
    let seconds=Math.floor((miliseconds-hours*3600000-minutes*60000)/1000);

    if (hours==="0")
    {
        return (""+minutes+":"+seconds);
    }
    else if (hours.length===1)
    {
        return (""+hours+":"+minutes+":"+seconds);
    }
    else
    {
        return (""+hours+":"+minutes+":"+seconds);
    }

    //return (""+hours+":"+minutes+":"+seconds);
}
function startTimer()
{
    timerStart=!timerStart;
    if (timerStart) {
        setInterval(function(){
            time = time - 1000;
            document.getElementById("timeleft").innerHTML=hhmmss(time);
            console.log(hhmmss(time));
        }, 1000);
    }
}