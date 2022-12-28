timerStart=false; //To check if the timer should be running
workTime=true;//show work timer not break timer
timerRunning=true;






let time;
let startButtonDOM=document.getElementById("startButton");

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

function startButtonClick() {
    timerStart = !timerStart;
    if (timerStart) {

        if (workTime&&timerRunning){
            time = 1800000; //default time of 30:00
            document.getElementById("timeleft").innerHTML = hhmmss(time); //Set the timer to display 30:00 not 1800000
            document.getElementById("timerHeader").innerHTML="Time to work!";
        }

        else if (!workTime&&timerRunning){
            time = 300000; //default time of 30:00
            document.getElementById("timeleft").innerHTML = hhmmss(time); //Set the timer to display 5:00 not 300000
            document.getElementById("timerHeader").innerHTML="Take a break!";
        }

        let timerRepeatId = setInterval(function () {

            //startButtonDOM.className+=" active";

            timerRunning=false;
            document.getElementById("startButton").innerHTML = "Stop timer"; //change the button
            time = time - 1000;
            document.getElementById("timeleft").innerHTML = hhmmss(time);

            if (!timerStart) //If we should stop the timer
            {
                document.getElementById("startButton").innerHTML = "Start timer";
                //startButtonDOM.className.replace(" active", "");
                clearInterval(timerRepeatId); //stop the interval
            }

            if (time<1000){
                workTime=!workTime;
                timerStart=false;
                timerRunning=true;
                clearInterval(timerRepeatId);
            }
        }, 1000); //every 1 second the timer value is reevaluated
    }
}