//HELLS ASSAULT COUNTDOWN
function hell() {
var ha = new Date("August 3, 2013 08:00:00");
var now = new Date();
var timeDiff = ha.getTime() - now.getTime();
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
document.getElementById("hadaysBox").innerHTML = days;
document.getElementById("hahoursBox").innerHTML = hours;
document.getElementById("haminsBox").innerHTML = minutes;
document.getElementById("hasecsBox").innerHTML = seconds;
var timer = setTimeout('hell()',1000);
}
//END HA COUNTDOWN