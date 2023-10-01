// Primer 2 Datum

let object = {
    name: 'aca',
    datum: function () {
        return 'danasnji dan';
    }
}

let datum2 = object;

datum2.datum();

let datum = new Date();
datum.setMinutes(0);
let formatiranDatum = datum.toLocaleDateString();

document.getElementById('datum').innerText = formatiranDatum;

console.log(datum.getTime() / 1000);
console.log(datum.toLocaleDateString());


// Moment JS

console.log(moment().format('D/M/YYYY/ HH:mm'));