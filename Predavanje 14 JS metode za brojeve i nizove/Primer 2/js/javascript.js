// Array Methods - Javascript

let niz = []; // Array
niz = [1, 2, 3, 4, 10];

// Index niza
// 0... duzina niza - 1
// lenght vraca duzinu

let duzinaNiza = niz.length;

let poslednjiElement = niz[duzinaNiza - 1];
let prviElement = niz[0];

niz[duzinaNiza - 1] = `na poziciji [0] je broj: ${prviElement}`;


let fruits = ["Banana", "Orange", "Apple", "Mango"];

// Stampanje u html-u
document.write('Fruits: ', fruits);

// "Banana, Orange, Apple, Mango"

let fruitsString = fruits.toString();

document.write('<br>Fruits (toString): ', fruitsString);

// Join metoda -  Spajanje elemenata niza sa proizvoljnim karakterima
let fruitsJoin = fruits.join('  ');

document.write('<br> Join metoda :', fruitsJoin);


// Push - Ubacivanje novog elementa u niz (Ubacuje element na kraju niza)

fruits.push('Sljiva');

// Pop - Izbacuje element sa kraja naseg niza

fruits.pop();

// Shift metoda - uklanja prvi element i pomera ostale elemente za po jedno mesto u levo
// izbacili smo bananu iz Niza
fruits.shift();

// Unshift - ubacuje novi element na pocetku niza

fruits.unshift("Banana");
console.clear();

// sPLICE - METODA ZA DODAVANJE/BRISANJE elementa u nizu
// prva "Nula" je pozicija

fruits.splice(2, 2, "Lemon", "Kivi");

// Contact spajanje nizova

let niz1 = [1, 2, 3];
let niz2 = ['a', 'b' ,'c'];

let spojeniNizovi = niz2.concat(niz1);

// Slice - Izvlacenje elementa iz niza i kreiranje novog niza

console.log(fruits);
let isecakFruits = fruits.slice(3);

// od 2 do 4 pozicije
let isecak2Fruits = fruits.slice(2, 4);