const timeSeconds = document.getElementById('timer');

let timeCounter;

const timer = function() {
    if (timeSeconds.textContent > 0) {
        timeSeconds.textContent = timeSeconds.textContent - 1;
    } else {
        alert('Вы победили в конкурсе!')
        clearInterval(timeCounter);
    }
} 

timeCounter = setInterval(timer, 1000);
