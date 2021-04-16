/*
Skapa ett program som låter användaren välja en form genom att skriva in circle/rectangle/triangle. 
Programmet ska baserat på användarens val be om input för att beräkna den valda formens area. 
När användaren fått svara med den data som behövs ska en uträkning på arean ska och programmet skriver ut resultatet 

Gör en flowchart och sedan skriva pseudokod innan ni börjar koda.
*/
var choice = prompt("Please choose form from circle/rectangle/triangle. Write it down here.");
switch (choice) {
    case "circle":
        var r = prompt("What\' the radius of the circle in cm?");
        alert("The area of the circle is " + r*r*3.14 + " cm2")
        break;
    case "rectangle":
        var w = prompt("What\' the width of the rectangle in cm?");
        var h = prompt("What\' the height of the rectangle in cm?");
        alert("The area of the circle is " + w*h + " cm2")
        break;
    case "triangle":
        var w = prompt("What\' the width of the triangle in cm?");
        var h = prompt("What\' the height of the triangle in cm?");
        alert("The area of the circle is " + w*h/2 + " cm2")
        break;

    default:
        alert("That\'s not a correct choice.")
        break;
}