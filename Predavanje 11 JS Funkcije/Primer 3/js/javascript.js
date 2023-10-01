// Primer 3
/**
 * Parametri funkcija
 * Callback funkcije
 * Anonimne funkcije
 */

/**
 * Parametri FUNKCIJE
 */


function fn1(param, param2) {
    console.log(`parametar 1: ${param}`);
    console.log(`parametar 2: ${param2}`);
}

fn1(1, { name: 'Aleksandar' });

//Funkcija sa default vrednost
function fn2(a, b = 10) {
    console.log(a + b);
}


fn2(2);

fn2(2, 20);

// NEISPRAVNO
function osoba(ime, prezime = 'peric', brojLK, visina = '190', tezina){
}
osoba('Pera, 18913513, 90');


// ISPRAVNO
function osoba(ime, brojLK, tezina, visina = '190', prezime = 'peric'){

}
osoba('Pera, 18913513, 90');


/** Callback Funkcije*/
// timeout ms
// handler fn()

function test(){
        console.log('setTimeout je pozvana');
}

setTimeout(test, 1000);

// custom callback
function racunanje(callback) {
    // obrada
    // naredba
    let zbir = 10 + 2;
    callback(zbir);
}
function prikaz(rezultat) {
    document.write('Funkcija je zavrsena! rezultat je:' + rezultat);
}

/***   PORUKA  ----  PROMPT ------ */

// let godine = prompt('Koliko imate godina');
// if(godine != null){
//     console.log(godine);20
// }

racunanje(prikaz);

// Anonimne funkcije

let funkcija = function() {
    console.log('testiranje anonimne funkcije');
}


/** 
 *   Samopozivajuce funkcije
 */
(function(a) {

    // Naredbe
    console.log('samopozivajuca funkcija');

})


/**
 *  Arrow function
 */

// Stari nacin

function imeFunkcije(parametar1, parametar2) {
    // naredbe
}

// Novi nacin ES6 -> arrow function

(parametar1, parametar2) => {
        // Naredbe
}

setTimeout(function(){
        // Naredbe
}, 1000);


setTimeout(() => {
     // Naredba
}, 1000
);

let anonimnaFunkcija = () => {
     // Naredbe
}







