// Primer 2 Javascript kod
/**
 * Nasumicna boja
 */
let nasumicnaBoja;
const box = document.getElementById('box');
const spanRandomColor = document.getElementById('randomColor');

function randomColor () {
    const nasumicniBroj = Math.random(); // 0 - 1 vraca br od 0 do 1  npr 0.1214  0.254   0.369
    const hexBroj = Math.floor(nasumicniBroj * 16777215);
    nasumicnaBoja = hexBroj.toString(16);
    spanRandomColor.innerText = `#${nasumicnaBoja}`;
}

function setRandomColor() {
    box.style.backgroundColor = '#' + nasumicnaBoja;
}

// randomColor();