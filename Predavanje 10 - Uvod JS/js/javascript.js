// Ovde pisemo nas javascript kod... 
/*
    Vise redni komentari
*/

var a
let b=2; //ECMA Script 6
const c=2;

b=3;

// c=3; i dalje ce biti 2 jer je konstanta i tada je definisana sa 2

// Tipovi Vrednosti

//  1 Numericki
//  2 Tekstualni
//  3 Logicki 
//  4 Simbolicki

// Nedefinisane vrednosti
// Nulte vrednosti

// Objekte


// 1 - Numericki tipovi vrednosti
/* Strogo tipizirani programski jezici */
Broj: Number = 10;

let broj = 10;

let negativanBroj = -10;


// Tekstualni tip

let string = 'Naziv'; // "" ILI '' mogu se koristiti oba tipa Navodnika

// Logicki tipovi 

true
false

let isCorrect = true;
let notCorrect = false;


// Nedefinisani tipovi

let promenljiva; // undefined
let promenjliva2 = undefined;

// NULL Tipivo

let nullVrednost = null;


/* Operacije sa brojevima */

// (deklaracija)  LET  (naziv promenljive) <naziv> (simbol dodele vrednosti) = (Vrednost koja se dodeljuje promenljivoj sa leve strane znaka jednakosti) <vrednost>

// let maksimalnaVrednost = 100;  // Njen tip je number
// console.log(maksimalnaVrednost, typeof maksimalnaVrednost);

// let ime = 'Hadzi';  // Njen tip je string
// console.log(ime, typeof ime)

// let merge = ime + maksimalnaVrednost; // Hadzi100

// console.log(merge);


// console.log( "OVO JE MAKSIMALNA VREDNOST " + maksimalnaVrednost);

// backticks
// console.log(`Ovo je string napisan unutar backtrick navodnika, maksimalna vrednost je ${maksimalnaVrednost} nastavak teksta`);

let ovoJeKonstanta = 3.14; // Number


// Logicki tipovi podataka 

/* 
*
* TRUE 
* FALSE
*
*/ 


let vrednost = 0; // 0 - False , 1- True 
let emptyString = ""; // False  (prazan String)
let nultaVrednost = null // False
let nedefinisanaVrednost = undefined; // False


let filledString = "0"; // TRUE (popunjen string)
let emptyObject = {}; // TRUE
let emptyArray= []; // TRUE   PRAZAN NIZ 


// Primer dodeljivanja vrednosti promenljivoj

let start = false;
start = 'Pocetak';
console.log(start, typeof start);


// Belezenje vrednosti u memoriji

let vrednost1 = 100;

// memory: vrednost1 : 100; Naziv promenljive pamtice vrednost 100 u memoriji 

let novaVrednost = vrednost1;

// memory: Nova vrednost ne ukazuje na broj 100 nego na promenljivu vrednost1 a zatim se trazi u memoriji koja je njena vrednost



// Deklaracija vise promenljivih u jednoj liniji

let p1, p2, p3; 
