//BATTLEFIELD UTAH COUNTDOWN
function battlefield() {
var sg = new Date("April 20, 2013 08:00:00");
var now = new Date();
var timeDiff = sg.getTime() - now.getTime();
if (timeDiff <= 0) {
        clearTimeout(timer);
//document.write("event is here!");
// Run any code needed for countdown completion here
    }
var seconds = Math.floor(timeDiff / 1000);
var minutes = Math.floor(seconds / 60);
var hours = Math.floor(minutes / 60);
var days = Math.floor(hours / 24);
hours %= 24;
    minutes %= 60;
    seconds %= 60;
document.getElementById("bfdaysBox").innerHTML = days;
document.getElementById("bfhoursBox").innerHTML = hours;
document.getElementById("bfminsBox").innerHTML = minutes;
document.getElementById("bfsecsBox").innerHTML = seconds;
var timer = setTimeout('battlefield()',1000);
}
//END BATTLEFIELD UTAH