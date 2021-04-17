/*
Med den kunskap ni fått från föregående 9 uppgifter, skapa spelet sten/sax/påse som kan spelas mot datorn. 
Spela det verkliga spelet med en vän för att se hur processen går till. 
Översätt sedan detta till pseudokod eller en flowchart innan ni börjar programmera. 
Kom ihåg att bryta ner problemet i flera moduler och få dessa att funka separat.

Parprogrammering uppmuntras. Använd er av tekniker från tidigare uppgifter för att lösa denna uppgift.
*/
var move = ["rock", "scissors", "papper"];

var random = Math.floor(Math.random() * move.length);
console.log(random, move[random]);

var yourMove = prompt("[0]Rock [1]Scissors  [2]Papper (Type a number from 0 1 2)");
if (yourMove == random) {
    yourMove = alert("Tie. Your opponent had " + move[random] + " too.");
    
}else if (yourMove - random == -1 || yourMove - random == 2) {
    alert("You win! Your opponent had " + move[random] + ".");
    
} else {
    alert("You lose! Your opponent had " + move[random] + ".");  
}
