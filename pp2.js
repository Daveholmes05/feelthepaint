function pp2() {
var pp2 = new Date("July 27, 2013 08:00:00");
var now = new Date();
var timeDiff = pp2.getTime() - now.getTime();
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
document.getElementById("pp2daysBox").innerHTML = days;
document.getElementById("pp2hoursBox").innerHTML = hours;
document.getElementById("pp2minsBox").innerHTML = minutes;
document.getElementById("pp2secsBox").innerHTML = seconds;
var timer = setTimeout('pp2()',1000);
}