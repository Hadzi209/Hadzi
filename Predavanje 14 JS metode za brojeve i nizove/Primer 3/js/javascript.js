//  Sort and Reverse methods




// Sort()  -  Sortiranje elemenata unutar niza
let niz = [1, 10, 2, 4, 5];

let sortiran = niz.sort((a,b) => {
    return a - b;
}) 

let meseci = ['Mart', 'Feb', 'Novembar'];

let sortiraniMeseci = meseci.sort();

// Reverse ()
console.log(niz);

let rotiranNiz = niz.reverse();