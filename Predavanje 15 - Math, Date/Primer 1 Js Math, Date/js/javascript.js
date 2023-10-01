// Javascript Math , Date
// Primer 1

// Sort

let niz = [10, 1, 40, 32, 48, 50, 100];

console.log(niz);

niz.sort();

console.log(niz);

niz.sort(sortHelper);

function sortHelper(first, secound){
    console.log(first, secound);
    return first - secound;
}
console.log(niz);

// Sort Imena
console.clear();

let imena = ['Aleksandar', 'Mark', 'Kristina', 'Nikola', 'Nenad'];
console.log(imena);


imena.sort((first, secound) => {
    const prvoIme = first.toLocaleLowerCase().length;
    const drugoIme = secound.toLocaleLowerCase().length;

    if ( prvoIme < drugoIme ) {
        return -1;
    }

    if ( prvoIme > drugoIme){
        return 1;
    }
        console.log(prvoIme, drugoIme);
        return 0;
});

let vrednost = {
    name: 'A',
    value: 10
}

let object2 = [vrednost, 'drugi', 'treci'];

let object = [
    {name: 'A', value: 10 },
    {name: 'AAAA', value: 5 },
    {name: 'AAA', value: 6 },
    {name: 'AAA', value: 1 },
    {name: 'AAAAAA', value: 15 },
    {
        datum: function() {
            return '26/11/2020';
        }
    }
]
object.sort((a, b) => {
    const prvi = a.value;
    const drugi = b.value;

    if (prvi < drugi){
        return -1;
};
    
    if (prvi > drugi){
        return 1;
    }

    return 0;
});

console.log(object);

