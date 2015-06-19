function air() {
var air = new Date("September 7, 2013 08:00:00");
var now = new Date();
var timeDiff = air.getTime() - now.getTime();
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
document.getElementById("airdaysBox").innerHTML = days;
document.getElementById("airhoursBox").innerHTML = hours;
document.getElementById("airminsBox").innerHTML = minutes;
document.getElementById("airsecsBox").innerHTML = seconds;
var timer = setTimeout('air()',1000);
}