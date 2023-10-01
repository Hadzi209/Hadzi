// FUNKCIJE

function nazicFunkcije(parametriFunkcija, n){
    // telo funkcije
    // naredbe...
}



// Funkcija sa povratnom vrednosu
function nazivFn(){
    // naredba
    // naredba
    return 'test';
    // naredba
}

nazivFn();
    // nastavak



// PRIMER 1:

// deklaracija /  Inicijalizacija
function zbir(a, b){
    let zbir = a + b;
    console.log(zbir);
}

// deklaracija /  Inicijalizacija
function zbirReturn(a, b){
    let zbir = a + b;
    
    return zbir;
}

// poziv funkcije
zbir(10, 5);

let rezultat = 5 * zbirReturn(10, 5);

console.log(`5 * ${zbirReturn(10, 5)} = ${rezultat}`);


// PRIMER 2:
/**
 * Imformacije:
 * Ime i prezime: Andrija Hadzi-Mladzic,
 * Broj bodova: 100,
 * Datum polaganja: 10/10/2020,
 * Registarski broj: 136489448946879546
 */

console.clear();
let informacije = ['Andrija', 'Hadzi-Mladzic', 100, '10/10/2020', 136489448946879546]
let priprema = {
    imePrezime: '',
    brojBodova: null,
    datumPolaganja: '',
    regBroj: null,
};

const poruka = document.getElementById('poruka');

function parse(){
    // Priprema podatke za prikaz
    // Ime i prezime
    priprema.imePrezime = `${informacije[0]} ${informacije[1]}`;
    // broj bodova
    priprema.brojBodova = informacije[2];
    // datumPolaganja
    priprema.datumPolaganja = informacije[3];
    // regBroj 
    priprema.regBroj = informacije[4];

    poruka.innerText = 'podaci su pripremljeni!';
}

function print() {
    // stampa podatke na HTML stranici
    const imePrezime = document.getElementById('ime_prezime');
    const brBodova = document.getElementById('br_bodova');
    const datumPolaganja = document.getElementById('datum');
    const regBroj = document.getElementById('reg_broj');

    imePrezime.innerText = priprema.imePrezime;
    brBodova.innerText = priprema.brojBodova;
    datumPolaganja.innerText = priprema.datumPolaganja;
    regBroj.innerText = priprema.regBroj;

    poruka.innerText = 'Podaci su prikazani!';


}
// parse();
// print();
console.log(priprema);