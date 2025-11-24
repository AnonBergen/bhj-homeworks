const timerElement = document.getElementById("timer");

let timeLeft = Number(timerElement.textContent);


const interval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
        clearInterval(interval);
        alert("Вы победили в конкурсе!");
    }
}, 1000);
