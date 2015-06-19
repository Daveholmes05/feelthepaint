function adventure(){
//Check if the user is ready to play!
confirm("Are you ready to carve some pumpkins?!");
var age = prompt("What's your age again?");

if (age < 18) {
	alert("You are very very young. Carve wisely.");
}

else {
	alert("You have achieved carving adulthood. Carve on!");
}

alert("Snow White and Batman were hanging out at the bus stop carving some legendary pumpkins, waiting to go to the knife store. There was a sale on and both needed some new blades. You've never really liked Batman. You walk up to him.");


alert("Batman glares at you.");


userAnswer = prompt("Are you feeling lucky, punk? Yes/No");

if (userAnswer.length > 2){
	alert("Batman hits you very hard. It's Batman and you're you! Of course Batman wins!");
} else {
	alert("You did not say yes to feeling lucky. Good choice! You are a winner in the game of not getting beaten up by Batman.");
}

if (userAnswer.length > 2){
    alert("You cry like a little girl. You kind of deserved it... You stood up to Batman, you fool. You run away and cut yourself."); return;
} else {
    alert("You sit down on the curb near the bus stop. Things get awkward. Batman just got up in your grill and you backed down like a French soldier.");
}

alert("The bus arrives. Batman and Snow White get in. You follow after them.");

stab = prompt("As you board the bus, you walk past Batman, who has already seated. Even though he is a world class detective and should know this, he is completely clueless to the fact that you have a bad ass gold plated dagger up your sleeve. You have your moment to strike. Do you stab him?");

if (stab.length > 2){
    alert("You attempt to stab.. Batman? Really? You idiot. He may not have noticed your dagger but noticed your sudden movement and blocks your attack. He then rams his palm into your face, accidentally shoving your nose into your brain. You are now dead. But he didn't mean to, so it's cool.");
    alert("Great job on getting killed by Batman, the guy who doesn't kill people. Maybe next time you won't screw around with a bad ass like that. gg.");
    
} else {
    alert("Solid choice, chief. I'm pretty sure that would have ended really badly for your health. You walk past Batman and take a seat all by your lonesome. You feel a sharp poke in your ass.");
    alert("Little did you know that a druggy left a dirty needle on the seat. It made its way between the back rest and the seat cushion. You were poked by a dirty needle and contracted the HIV, which eventually leads to AIDS.");
    alert("Because of this, no woman will ever love you. You die a slow, lonely death. Your body is eventually found on a train going around the city in circles.");
    alert("The end");
}


var feedback = prompt("What rating would you give my game in a range of 1-10?");
if (feedback > 8) {
	alert("This is just the beginning of my game empire. Stay tuned for more!");
} else {
	alert("I slaved away at this game and you gave me that score?! The nerve! Just you wait!");
}
}

