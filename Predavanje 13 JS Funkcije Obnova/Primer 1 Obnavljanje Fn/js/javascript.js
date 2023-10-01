// Primer za funkciju

/**
 *  Funkcija
 */


function suma() {
    console.log('Funkcija je pozvana')
}

function sumaBrojeva() {
    return 2 + 2;
}

// let, var, const 
let vrednostSuma = sumaBrojeva();

console.log(vrednostSuma);

// sa parametrima

function razlika(a, b) {
    return a - b;
}

function racunanjePrvogBroja(){
    /// Naredbe
    return 8;
}

let prviBroj = 5;
let drugiBroj = 2;

console.log('prvi poziv:', razlika(10, 2));

console.log('drugi poziv:', razlika(prviBroj, drugiBroj));

console.log('treci poziv:', razlika(racunanjePrvogBroja(), drugiBroj));

let funkcija1 = (param1, param2) => {
    console.log('Poziv anonimne funkcije');
}

funkcija1();


/***
 *  Callback funkcija
 */

console.clear();
/**
 * Racunanje srednje vrednosti za 3 uneta broja
 */

const inputPrveVrednosti = document.getElementById('prva_vrednost');
const inputDrugeVrednosti = document.getElementById('druga_vrednost');
const inputTreceVrednosti = document.getElementById('treca_vrednost');
const spanRezultat = document.getElementById('rezultat');

function racSrednjeVrednosti(a, b, c, callback){
  

    let srednjaVrednost = (a + b + c) / 3;
    callback(srednjaVrednost);
}
    
function odstampajPodatke(rezultat){
    spanRezultat.innerText = rezultat;
}

// parseInt(sting_broj) - SLUZI ZA PRETVARANJE STRINGA U BROJ

function prikazVrednosti() {
        const a = parseInt(inputPrveVrednosti.value);
        const b = parseInt(inputDrugeVrednosti.value);
        const c = parseInt(inputTreceVrednosti.value);

        racSrednjeVrednosti(a, b, c, odstampajPodatke);
}
