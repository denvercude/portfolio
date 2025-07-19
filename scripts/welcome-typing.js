const portfolioText = ">denver-portfolio";
const loadingText = ">loading"
const dots = "..."
let index = 0;

function type() {
    if (index < portfolioText.length) {
        document.getElementById("type-text").textContent += portfolioText.charAt(index);
        index++;
        setTimeout(type, 100);
    } else {
        setTimeout(() => {
            document.querySelector(".cursor").remove();

            const newLine = document.createElement("div");

            const prompt = document.createElement("span");
            prompt.className = "prompt";
            prompt.textContent = ">";

            const textSpan = document.createElement("span");
            textSpan.className = "loading-text";
            textSpan.textContent = "loading";

            const dotsSpan = document.createElement("span");
            dotsSpan.className = "loading-dots";

            const cursor = document.createElement("span");
            cursor.className = "cursor";
            cursor.textContent = "█";

            
            newLine.appendChild(textSpan);
            newLine.appendChild(dotsSpan);

            document.getElementById("type-text").appendChild(document.createElement("br"));
            document.getElementById("type-text").appendChild(newLine);

            let loadIndex = 0;
            const maxCycles = 1;
            const dotInterval = setInterval(() => {
                dotsSpan.textContent = dots.substring(0, (loadIndex % 4));
                loadIndex++;
                if (loadIndex / 4 >= maxCycles) {
                    clearInterval(dotInterval);
                    dotsSpan.textContent = "...";
                    window.location.href = 'pages/home.html';
                }
            }, 500);
        }, 1000);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 2000);
});