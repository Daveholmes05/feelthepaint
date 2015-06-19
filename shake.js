function shake() {
var shake = new Date("June 8, 2013 08:00:00");
var now = new Date();
var timeDiff = shake.getTime() - now.getTime();
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
document.getElementById("shakedaysBox").innerHTML = days;
document.getElementById("shakehoursBox").innerHTML = hours;
document.getElementById("shakeminsBox").innerHTML = minutes;
document.getElementById("shakesecsBox").innerHTML = seconds;
var timer = setTimeout('shake()',1000);
}