const runTimer = function(){
    timerID = setInterval
    const time = (new Date()).toLocaleTimeString();
    console.log("aktualny czas: ", time);

}

setInterval(runTimer, 5000);