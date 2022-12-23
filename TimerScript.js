timerStart=false; //To check if the timer should be running

let time = 1800000 //default time of 30:00
document.getElementById("timeleft").innerHTML=hhmmss(time); //Set the timer to display 30:00 not 1800000

function hhmmss(miliseconds) //Function to convert miliseconds to hh:mm:ss form
{
    let hours=""+Math.floor(miliseconds/3600000);
    let minutes=""+Math.floor((miliseconds-hours*3600000)/60000);
    let seconds=""+Math.floor((miliseconds-hours*3600000-minutes*60000)/1000);

    if (seconds.length===1)
    {
        seconds="0"+seconds;//two digits for seconds
    }

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
}
function startTimer() //function for when the start timer button is clicked
{
    timerStart=!timerStart; //Change what the function does on the next click
    if (timerStart) {
        let timerRepeatId=setInterval(function(){
            time = time - 1000;
            document.getElementById("timeleft").innerHTML=hhmmss(time);
            document.getElementById("startButton").innerHTML="Stop timer"; //change the button
            if (!timerStart) //If we should stop the timer
            {
                document.getElementById("startButton").innerHTML="Start timer";
                clearInterval(timerRepeatId); //stop the interval
            }
        }, 1000); //every 1 second the timer value is reevaluated
    }
}