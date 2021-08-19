"use strict";
//let feel = prompt("Wie geht es Dir heute?");
//alert("Sie haben eingegeben...\n" + "\nVielen Dank");
	document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('p.a').addEventListener('click', handleClickA);
	document.querySelector('p.c').addEventListener('click', handleClickC);
	document.querySelector('p.p').addEventListener('click', handleClickP);
	if('document' in window) {
		console.log('doc');
	}
});

function handleClickA(ev) {
	//alert
	let answer = alert("Das ist eine Nachricht");
	console.log(answer);
}
function handleClickC(ev) {
	//confirm
	let answer = confirm("Bist Du sicher?");
	console.log(answer); //true false
}
function handleClickP(ev) {
	//prompt
	let answer = prompt("Das ist meine Frage", 'Falsche Antwort');
	console.log(answer);// answer null
}
//const pi = 3.1415926;
//const farbe = "Rot";
//alert('Meine Farbe: ' + farbe +"\n" + "4 mal Pi = " +(4*pi));

//Eingabe von Zahlen
//Eingabe
//let eingabe = prompt('Geben Sie die erste Zahl ein', "");
//let z1 = parseFloat(eingabe);
//let z2 = parseFloat(prompt("Geben Sie die zweite Zahl ein", ""));
//let z1 = parseInt(eingabe);
//let z2 = parseInt(prompt("Geben Sie die zweite Zahl ein", ""));

//Verarbeitung und Ausgabe
//let ergebnis = z1 + z2;
//alert(z1 + " + " + z2 + " = " + ergebnis);

//Eingabe von Namen
//Eingabe
//let eingabe = prompt("Geben Sie Ihren Vorname ein", "");
//let vorname = (eingabe);
//let nachname = (prompt("Geben Sie Ihren Nachhame ein", ""));

//Verarbeitung und Ausgabe
//alert("Sie haben " + vorname + " " + nachname + " eingegeben");
let antwort = confirm("Wollen Sie diese Aktion durchführen?");
if(antwort) {
	alert("Diese Aktion wird durchgeführt");
} else 
	alert("Diese Aktion wird nicht durchgeführt");
	