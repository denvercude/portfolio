const cube = `
        + -------------------- +
       /-                     /-
      / -                    / -
     + -------------------- +  -
     -  -                   -  -
     -  -                   -  -
     -  + -------------------- +
     - /                    - /
     -/                     -/
     + -------------------- +
`;


const shadedCube = `
        + -=====+++*####%%@@@@@@
       /-::====+++***###%%@@@@/@
      /.-.::====+++***###%%@@/@@
     + ---:::=========**####+%%%
     -..---:::::::::::::::++-###
     -...---::::::::::::::::-***
     -...---::::::::::::::::-**+
     -./.---::::::::::::::::-*/
     -/....---::::::::::::::-/
     + -------::::::::::::::+
`;

const darkCube = `
        + -------------------- +
       /----------------------/-
      / ---------------------/.-
     +,,,,,,,,,,,,,,,,,,,,,,+..-
     -,,,,,,,,,,,,,,,,,,,,,,-..-
     -,,,,,,,,,,,,,,,,,,,,,,-..-
     -,,,,,,,,,,,,,,,,,,,,,,-..+
     -,,,,,,,,,,,,,,,,,,,,,,-./
     -,,,,,,,,,,,,,,,,,,,,,,-/
     + -------------------- +
`;

function displayCube() {
    document.getElementById("ascii-cube").textContent = cube;
    document.getElementById("shaded-ascii-cube").textContent = shadedCube;
}

let visible = true;

function blinkCube() {
    const cubeEl = document.getElementById("blink-cube");
    cubeEl.textContent = visible ? cube : "";
    visible = !visible;
}

window.addEventListener("DOMContentLoaded", () => {
    displayCube();
    blinkCube();
    setInterval(blinkCube, 250);
});