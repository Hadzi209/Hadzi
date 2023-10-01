//Java script Number Methods
let broj = 10; // Number 

// Pretvaranje broja u string
let brojKaoString = broj.toString();

document.write(`Broj ${broj} je pretvoren u string: `, brojKaoString);
console.log(broj, brojKaoString);

// Zaokruzivanje broja

let decimalniBroj = 1.83747439;

let zaokruzeniBroj = decimalniBroj.toFixed(2);

document.write(` Zaokruzeni Broj ${decimalniBroj}, je zaokruzen na 2 decimale: `, zaokruzeniBroj);

//  Povecanje preciznosti decimalnog broja na odredjenu vrednost

let broj2 = 2.345;

let preciznijiBroj = broj2.toPrecision(5);
document.write(`<br> Preciznost za broj ${broj2}, gde smo postavili preciznost na vrednost 5 je:`, preciznijiBroj);

// Kreiranje broj 

let noviBroj = Number("10");

document.write(`<br>Pretvoren string u 10 u broj: `, noviBroj);
console.log("novi broj: ", noviBroj, isNaN(noviBroj));

// ParseInt pretvaranje stringa u broj (vraca celobrojnu vrednost tj Integer)
let random = Math.random() * 10;
let nasumicniDecimalniBroj = parseInt(random, 10);

let binarniBroj = parseInt('10001', 2);

document.write(`<br><br>`);
document.write(`ParseInt za broj ${random} u decimalni je: `, nasumicniDecimalniBroj);
document.write(`<br> ParseInt za broj '10001' u binarnoj notaciji je: `, binarniBroj);

// parseFloat

let broj3 = '14.2232131';

let float = parseFloat(broj3);

document.write(`<br> parseFloat za broj ${broj3} je: `, float);


/**
 *   Zadatak 1 
 *   
 *     Generisati 3 nasumicna broja od 0 - 255, i od generisanih brojeva potrebno je napraviti
 *     heksadecimalni broj. I odstampati na html stranici.
 * 
 *     #112231
 *     *element.style.background = '#112231';
 */
getRandomColor();

function getRandomColor() {
let prvaBoja = parseInt(Math.random() * 256);
let drugaBoja = parseInt(Math.random() * 256);
let trecaBoja = parseInt(Math.random() * 256);

// Generisanje hexBoje

let hexBoja = `#${prvaBoja.toString(16)}${drugaBoja.toString(16)}${trecaBoja.toString(16)}`;

// SELEKTOVANJE ELEMENTA  document.querySelector('body').style.

document.querySelector('body').style.backgroundColor = hexBoja;
}
