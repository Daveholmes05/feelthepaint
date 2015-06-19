//Active Tab
function setActive()
{
  aObj = document.getElementById('nav').getElementsByTagName('a');
  for(i=0;i<aObj.length;i++) {
    if(document.location.href.indexOf(aObj[i].href)>=0) {
      aObj[i].className='active';
    }
  }
}

window.onload = setActive;
//End Active Tab



//SUPERGAME COUNTDOWN
function supergame() {
var sg = new Date("May 3, 2013 10:00:00");
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
document.getElementById("daysBox").innerHTML = days;
document.getElementById("hoursBox").innerHTML = hours;
document.getElementById("minsBox").innerHTML = minutes;
document.getElementById("secsBox").innerHTML = seconds;
var timer = setTimeout('supergame()',1000);
}
//END SUPERGAME*/















/* JS BELOW IS TEST STUFF */


function displayDate()
{
document.getElementById("demo").innerHTML=Date();
}

var ham = 23;

var tuna = 26.111;


function funky()
{
    alert("I am a banana");
    
}

function meatball(z)
{
    alert("I love " + z);
}

function apples(one, two)
{
    document.write(one + " is better than" + two + "<br />");
    
}

function addNumbers(a,b)
{
    var c = a+b;
    return c;
}


function first()
{
    document.write("I am first");
}

function second()
{
    document.write(" 2222222!!!!");
}

function start()
{
    first();
    second();
    
    
}
function gear(){
    

var gear = "Planet Eclipse";

switch (gear){
    case "Planet Eclipse":
        alert("Planet Eclipse sponsors us with guns and gearbags!");
        break;
    case "Valken":
        alert("Valken sponsors our paint!");
        break;
    case "Tippmann":
        alert("Tippmann sponsors guns to us as well!");
        break;
}
}

//object / constructor
function person(name, age){
    this.name = name;
    this.age = age;
    
    
}
//variables for the constructor
var dave = new person("Dave Holmes", 26);
var taylor = new person("Taylor Swift", 20);