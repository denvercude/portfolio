const text = "denver-portfolio"
const speed = 100;
let index = 0;

function type() {
    if (index < text.length) {
        document.getElementById("typed-text").textContent += text.charAt(index);
        index++;
        setTimeout(type, speed);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 1000);
});