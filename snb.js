function snb() {
var snb = new Date("June 8, 2013 08:00:00");
var now = new Date();
var timeDiff = snb.getTime() - now.getTime();
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
document.getElementById("snbdaysBox").innerHTML = days;
document.getElementById("snbhoursBox").innerHTML = hours;
document.getElementById("snbminsBox").innerHTML = minutes;
document.getElementById("snbsecsBox").innerHTML = seconds;
var timer = setTimeout('snb()',1000);
}