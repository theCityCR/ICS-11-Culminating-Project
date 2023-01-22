let timerStart=false; //To check if the timer should be running
let workTime=true;//show work timer not break timer
let timerRunning=true; // If the timer is running

let alarm = new Audio("Alarm.mp3"); // Alarm sound

let time; // Time

/**
 * Converts the time in milliseconds to a
 * readable time format
 * @param milliseconds - Number of milliseconds
 * @returns {string} Time in hh:mm:ss format
 */
function hhmmss(milliseconds) //Function to convert milliseconds to hh:mm:ss form
{
    let hours=""+Math.floor(milliseconds/3600000); // Hours
    let minutes=""+Math.floor((milliseconds-hours*3600000)/60000); // Minutes
    let seconds=""+Math.floor((milliseconds-hours*3600000-minutes*60000)/1000); // Seconds

    if (seconds.length===1)
    {
        seconds="0"+seconds;//two digits for seconds
    }

    if (hours==="0")
    {
        return (""+minutes+":"+seconds); // No hours
    }
    else if (hours.length===1)
    {
        return (""+hours+":"+minutes+":"+seconds); // Single digit hours
    }
    else
    {
        return (""+hours+":"+minutes+":"+seconds); // Default
    }
}

/**
 * Starts the timer when the start button has clicked
 */
function startButtonClick() {
    document.getElementById("startButton").disabled=true;//Stop the button from being clicked so this method won't run mulitple times at once
    timerStart = !timerStart;

    if(!timerStart){
        document.getElementById("startButton").innerHTML = "Start"; // change the button
    }
    else{
        document.getElementById("startButton").innerHTML = "Stop"; //change the button
    }

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

        setTimeout(function(){
            let timerRepeatId = setInterval(function () {
                document.getElementById("startButton").disabled=false; //Allow for a new press
                //startButtonDOM.className+=" active";

                timerRunning=false;
                document.getElementById("startButton").innerHTML = "Stop"; //change the button
                time = time - 100; // Reduce time
                document.getElementById("timeleft").innerHTML = hhmmss(time); // Set time

                if (!timerStart) //If we should stop the timer
                {
                    document.getElementById("startButton").innerHTML = "Start";
                    //startButtonDOM.className.replace(" active", "");
                    clearInterval(timerRepeatId); //stop the interval

                }

                if (time<1000){
                    workTime=!workTime; // Change state
                    timerStart=false; // Timer stopped
                    timerRunning=true; // Timer not running
                    clearInterval(timerRepeatId); // Stop changes
                    document.getElementById("startButton").innerHTML = "End"; // Display message
                    document.getElementById("timerHeader").innerHTML="Time's up!"; // Display message
					alarm.play(); // Play alarm
                }
            }, 100); //every 1 milisecond the timer value is reevaluated
        },1000);
        document.getElementById("startButton").disabled=false;//If the timer wasn't in running, it will be allowed for a new press

    }

}
