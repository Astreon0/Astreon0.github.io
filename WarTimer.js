let secondeTotal = 1809;

let secondesTimerTab = [9, 
    20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, //14 = 280 sec
    28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,         //12 = 336 sec
    36, 36, 36, 36, 36, 36, 36, 36, 36,                     // 9 = 324 sec
    44, 44, 44, 44, 44, 44, 44,                             // 7 = 308 sec
    52, 52, 52, 52, 52,                                     // 5 = 260 sec
    60, 60, 60, 60, 60];                                    // 5 = 300 sec

let index = 0;

function startTimer() {
    const preTimerElement = document.getElementById("preTimer");
    const timerElement = document.getElementById("timer");
    const timerTotalElement = document.getElementById("timerTotal");

    preTimerElement.style.display = "none";
    timerElement.style.display = "block";

    setInterval(() => {
        diminuerSeconde();
    }, 1000);
}

function diminuerSeconde() {
    const timerElement = document.getElementById("timer");
    const timerTotalElement = document.getElementById("timerTotal");

    if (secondeTotal == 1800) {
        document.getElementById("timerTotal").style.display = "block";
    }

    let minutes = parseInt(secondesTimerTab[index] / 60, 10);
    let secondes = parseInt(secondesTimerTab[index] % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    secondes = secondes < 10 ? "0" + secondes : secondes;

    let minutesTotal = parseInt(secondeTotal / 60, 10);
    let secondesTotal = parseInt(secondeTotal % 60, 10);
    minutesTotal = minutesTotal < 10 ? "0" + minutesTotal : minutesTotal;
    secondesTotal = secondesTotal < 10 ? "0" + secondesTotal : secondesTotal;

    timerElement.innerText = `${minutes}:${secondes}`;
    timerTotalElement.innerText = `${minutesTotal}:${secondesTotal}`;

    secondeTotal = secondeTotal <= 0 ? 0 : secondeTotal - 1;
    secondesTimerTab[index] = secondesTimerTab[index] <= 0 ? 0 : secondesTimerTab[index] - 1;

    if(secondesTimerTab[index] == 0) {
        index++;
    }
}