//  Primer Metode za rad sa stringovima

let string = "Please locate where 'locate' occurs!";


// Duzina strina broji i SPACE (Razmak) Karaktere
document.write('duzina stringa je:', string.length);

document.write(' <br> index za datu rec ("locate") u recenici je: ', string.indexOf('locate', 15), ' i duzine je: ', 'locate'.length);


// Sa Negativnom vrednoscu za fromIndex

document.write('<br>', 'index za neg. vrednost: ', string.indexOf('locate', -30));


// Slice (start, end)

let pocetnaPoz = string.indexOf('locate');
let krajnjaPoz = string.indexOf('locate') + 'locate'.length;
document.write('<br>', string.slice(pocetnaPoz, krajnjaPoz));

document.write('<br>',string.slice(pocetnaPoz));

// Replace sa reqExp  --- Postoji reqExp sajt za vezbanje

let regexp = /locate/gi;
let noviStrSaRegExp = string.replace(regexp, 'find');
document.write('<br>', 'zamena stringa "locate" koriscenjem RegExp izraza: ', noviStrSaRegExp);

// Konvertovanje Stringa u Niz

let niz = string.split('e');

console.log(niz);