// Dodavanje nasumicnog elementa u niz

// let niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; // 11

// document.querySelector('p').innerText = niz.join(' , ');

// let nasumicniBroj = Math.floor(Math.random() * niz.length);

// document.querySelector('span').innerText = nasumicniBroj;
// document.querySelector('strong').innerText = niz[nasumicniBroj];


let niz = [15, 98, 9, 55, 82, 2, 27, 97, 23, 75,
           5, 46, 28, 35, 18, 34, 97, 89, 18, 20,
           19, 12, 10, 78, 84]

    function nasumicno(){
        let index = Math.floor(Math.random() * niz.length);
        document.querySelector('p').innerText = `Nasumicni element pod indelsom: ${index} vrednost je: ${niz[index]}`;
        console.log(index, "Vrednost je: ", niz[index]);
    }

    
