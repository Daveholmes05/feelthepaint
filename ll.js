function ll() {
var ll = new Date("May 17, 2013 08:00:00");
var now = new Date();
var timeDiff = ll.getTime() - now.getTime();
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
document.getElementById("lldaysBox").innerHTML = days;
document.getElementById("llhoursBox").innerHTML = hours;
document.getElementById("llminsBox").innerHTML = minutes;
document.getElementById("llsecsBox").innerHTML = seconds;
var timer = setTimeout('ll()',1000);
}