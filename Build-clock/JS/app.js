setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
    const currentData = new Date();
    const secondRatio = currentData.getSeconds() / 60;
    const minuteRatio = (secondRatio + currentData.getMinutes()) / 60;
    const hourRatio = (minuteRatio + currentData.getHours()) / 12

    setRotation(secondHand, secondRatio);
    setRotation(minuteHand, minuteRatio);
    setRotation(hourHand, hourRatio);
}

function setRotation(element, rotataionRatio) {
    element.style.setProperty('--rotation', rotataionRatio * 360);
}

setClock()
console.log('hell')