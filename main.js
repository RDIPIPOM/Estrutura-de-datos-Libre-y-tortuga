import Hare from "./Hare.js";
import Turtle from "./Turtle.js";
import Race from "./Race.js";
import Dice from "./Dice.js";

document.querySelector('#btnStart').addEventListener('click', () => {
    //Create a race with 90 steps
    let race = new Race(90);
    race.dice = new Dice(100);
    //Create a hare
    let hare = new Hare();
    hare.name = "Liebre";
    //Create a turtle
    let turtle = new Turtle();
    turtle.name = "Tortuga";
    //Set players to the race
    let players = new Array();
    players.push(hare, turtle);
    race.players = players;
    //Start race!   
    race.start();
});

/*
La idea es recrear la carrera de la liebre y la tortuga.
Los competidores comienzan sobre una pista de 90 pasos, el avance en cada caso es así
Tortuga ->
paso rapido 50% +3pasos
resbalon 20% -6 pasos
paso lento 30% +1 paso

Liebre
domir 20% 0 avance
salto grande 20% +9 pasos
resbalon grande 10 -12 pasos
salto pequeño 35 % +1 paso
resbalon pequeño 15% -2 pasos

Considerar el uso de clases y herencia.

Se entrega antes de la segunda clase de esta misma semana.
*/