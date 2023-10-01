// Math, Else, IF Javascript

// Math metode

// 1 - Math round
Math.round(4.6); // zaokruzuje broj zaokruzice na broj 5
Math.round(3.1); // zaokruzuje broj zaokruzice na broj 3

// 2 - random
Math.random(); // 0-1, Broj izmedju 0 i 1 (Nikada nece biti 0 ili 1) uvek neki br izmedju  0.125215882

// 3 - pow
/**
 * x - baza
 * y - eksponent
 *  Math.pow(x, y)
 */
Math.pow(10, 2); // Prva vrednost predstavlja broj (10) a druga vrednost (2) predstavlja eksponent odnosno 10 na 10-ti stepen

// 4 - sqrt
Math.sqrt(64);  // SQRT PREDSTAVLJA KOREN NEKOG BROJA

// Math PI  -   Vraca vrednost PI 
Math.PI;

// 5 - ceil
//Uvek zaokruzuje na veci broj npr (4.1) zaokruzice na 5
Math.ceil(4.1); // - 5

// 6 - floor
// Floor je kontra od ceil zaokruzuje na prvi manji br npr (3.9) zaokruzi na 3
Math.floor(3.9); // - 3

// 7 - min
let niz = [1,2,3,4,5,6,7.8,9,10,11,12,13,14,15,16,17,18,19,20];
console.log(Math.min(...niz));
Math.min(0, 1, 2, 3, 4, 10); // 0

// 8 - max
Math.max(...niz); //20
console.log(Math.max(...niz));