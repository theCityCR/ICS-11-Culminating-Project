timerStart=false; //To check if the timer should be running
workTime=true;//show work timer not break timer
timerRunning=false;






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

        if (workTime){
            time = 1800000; //default time of 30:00
            document.getElementById("timeleft").innerHTML = hhmmss(time); //Set the timer to display 30:00 not 1800000
            let timerRepeatId = setInterval(function () {

                //startButtonDOM.className+=" active";
                time = time - 1000;
                document.getElementById("timeleft").innerHTML = hhmmss(time);
                document.getElementById("startButton").innerHTML = "Stop timer"; //change the button

                if (!timerStart) //If we should stop the timer
                {
                    document.getElementById("startButton").innerHTML = "Start timer";
                    //startButtonDOM.className.replace(" active", "");
                    clearInterval(timerRepeatId); //stop the interval
                }
            }, 1000); //every 1 second the timer value is reevaluated
        }

        else {
            time = 300000; //default time of 30:00
            document.getElementById("timeleft").innerHTML = hhmmss(time); //Set the timer to display 30:00 not 1800000
            let timerRepeatId = setInterval(function () {
                //startButtonDOM.className+=" active";
                time = time - 1000;
                document.getElementById("timeleft").innerHTML = hhmmss(time);
                document.getElementById("startButton").innerHTML = "Stop timer"; //change the button

                if (!timerStart) //If we should stop the timer
                {
                    document.getElementById("startButton").innerHTML = "Start timer";
                    //startButtonDOM.className.replace(" active", "");
                    clearInterval(timerRepeatId); //stop the interval
                }
            }, 1000); //every 1 second the timer value is reevaluated
        }
    }
}/*
function startTimer() //function for when the start timer button is clicked
{
    if (!timerRunning) {
        console.log("hi");
        timerRunning=true;
        console.log(timerRunning);
        if (workTime) {
            time = 1800000; //default time of 30:00
            document.getElementById("timeleft").innerHTML = hhmmss(time); //Set the timer to display 30:00 not 1800000
            timerStart = false;
            console.log(timerRunning);
            timerStart=!timerStart; //Change what the function does on the next click
            console.log(timerRunning);
            if (timerStart) {
                console.log(timerRunning);
                let timerRepeatId=setInterval(function(){

                    console.log(timerRunning);
                    //startButtonDOM.className+=" active";
                    time = time - 1000;
                    document.getElementById("timeleft").innerHTML=hhmmss(time);
                    document.getElementById("startButton").innerHTML="Stop timer"; //change the button

                    if (!timerStart) //If we should stop the timer
                    {
                        document.getElementById("startButton").innerHTML="Start timer";
                        //startButtonDOM.className.replace(" active", "");
                        clearInterval(timerRepeatId); //stop the interval
                    }

                    if (time<=0) {
                        workTime = !workTime;
                        //startButtonDOM.className.replace(" active", "");
                        clearInterval(timerRepeatId);
                    }
                }, 1000); //every 1 second the timer value is reevaluated
            }
            timerRunning=false;
        } else {
            time = 300000 //default time of 5:00
            document.getElementById("timeleft").innerHTML = hhmmss(time); //Set the timer to display 30:00 not 1800000
            timerStart = false;
            //breakTimer();
        }
    }


}*/
function test(timerRunning) {
    console.log(timerRunning);
    //startButtonDOM.className+=" active";
    time = time - 1000;
    document.getElementById("timeleft").innerHTML=hhmmss(time);
    document.getElementById("startButton").innerHTML="Stop timer"; //change the button


}
function workTimer(){
    timerStart=!timerStart; //Change what the function does on the next click
    console.log(timerRunning);
    if (timerStart) {
        console.log(timerRunning);
        let timerRepeatId=setInterval(function(){

            test(timerRunning);

            if (!timerStart) //If we should stop the timer
            {
                document.getElementById("startButton").innerHTML="Start timer";
                //startButtonDOM.className.replace(" active", "");
                clearInterval(timerRepeatId); //stop the interval
            }

            if (time<=0) {
                workTime = !workTime;
                //startButtonDOM.className.replace(" active", "");
                clearInterval(timerRepeatId);
            }
        }, 1000,timerRunning); //every 1 second the timer value is reevaluated
    }
    timerRunning=false;
}
/*
function breakTimer() {
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

            if (time<=0){
                workTime=!workTime;
                clearInterval(timerRepeatId);
            }
        }, 1000); //every 1 second the timer value is reevaluated
    }
}*/