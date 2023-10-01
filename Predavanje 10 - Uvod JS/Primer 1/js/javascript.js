// Javascript kod Primer 1

// selekcija elementa na osnovu ID

let h2 = document.getElementById('title');
h2.style.color = 'red';

console.log(h2);

// Objekti

// key : value

let osobaA = {
    ime: 'Andrija',
    prezime: 'Hadzi-Mladzic',
    visina: 186,
    tezina: 86,
    ocene: {
        predmet1: 10,
        predmet2: 5,
        predmet3: 8,
    }
};

// PRISTUPANJE VREDNOSTIMA OBJEKTA

console.log(osobaA.ime);
console.log(osobaA.prezime);

console.log(osobaA.ocene.predmet2);

let automobil = {
    godinaProizvodnje: 2018,
    model: '',
    proizvodjac: '',
    boja: '',
};

automobil.model = 'E46';
automobil.proizvodjac = 'BMW';
automobil.boja = 'crvena';

// selekcija elemenata
// proizvodjac

let spanProizvodjac = document.getElementById('proizvodjac');
spanProizvodjac.innerText = automobil.proizvodjac;

// Model
let spanModel = document.getElementById('Model');
spanModel.innerText = automobil.model;

//Godina
let spanGodina = document.getElementById('Godina');
spanGodina.innerText = automobil.godinaProizvodnje;

//Boja
let spanBoja = document.getElementById('Boja');
spanBoja.innerText = automobil.boja


console.log(`Model automobila je: ${automobil.model}`);
console.log(`Proizvodjac automobila je: ${automobil.proizvodjac}`);


/** NIZOVI */

let niz = []; // prazan niz

// 0, 1, 2, 3.. .. n-1
niz = [1,2,3,4,5,6,7,8,9,10];

// Svaki niz poseduje index za svaki element

niz[9] = 'Poslednji broj u nizu';

console.log(niz[9]);