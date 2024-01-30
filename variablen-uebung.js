// Variable von Typ "number" anlegen und gleich den Wert 0 zuweisen
var zahl1 = 2; // var => Globale variable, die veränderbar nach Initialisierung ist 
let zahl2 = 1; // let => Local variable, die veränderbar nach Initialisierung ist 

// Summe der 2 Variablen in einer 3.Variable speichern
// const => Local variable, die UNveränderbar nach Initialisierung ist
const summe = zahl1 + zahl2;

// Zahlen, Text, ... auf Console ausgeb

// Variable von Typ "string" (Text) anlegen mit Initialem Wert
const text = 'Hallo';

// Inhalt von Variablen ausgeben (auf der Console)
console.log(text + ' , das Ergebnis ist: ' +  summe);

/* Hallo , das Ergebnis ist: 3 */