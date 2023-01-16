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
    document.getElementById("startButton").disabled=true;//Stop the button from being clicked so this method won't run mulitple times at once
    timerStart = !timerStart;

    if(!timerStart){
        document.getElementById("startButton").innerHTML = "Start timer";
    }
    else{
        document.getElementById("startButton").innerHTML = "Stop timer"; //change the button
    }

    if (timerStart) {

        if (workTime&&timerRunning){
            time = 5000; //default time of 30:00
            document.getElementById("timeleft").innerHTML = hhmmss(time); //Set the timer to display 30:00 not 1800000
            document.getElementById("timerHeader").innerHTML="Time to work!";
        }

        else if (!workTime&&timerRunning){
            time = 300000; //default time of 30:00
            document.getElementById("timeleft").innerHTML = hhmmss(time); //Set the timer to display 5:00 not 300000
            document.getElementById("timerHeader").innerHTML="Take a break!";
        }

        setTimeout(function(){
            let timerRepeatId = setInterval(function () {
                document.getElementById("startButton").disabled=false; //Allow for a new press
                //startButtonDOM.className+=" active";

                timerRunning=false;
                document.getElementById("startButton").innerHTML = "Stop timer"; //change the button
                time = time - 100;
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
                    document.getElementById("startButton").innerHTML = "End Timer";
                    document.getElementById("timerHeader").innerHTML="Time's up!";
                }
            }, 100); //every 1 milisecond the timer value is reevaluated
        },1000);
        document.getElementById("startButton").disabled=false;//If the timer wasn't in running, it will be allowed for a new press

    }

}
