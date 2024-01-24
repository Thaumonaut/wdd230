const visitText = document.querySelector('#visits');
let numberOfVisits = Number(getVisits()) || 0;

if (numberOfVisits !== 0) {
    visitText.textContent = numberOfVisits;
} else {
    visitText.textContent = "Welcome first timer!"
}

numberOfVisits++;

setVisits();

function getVisits() {
    return JSON.parse(localStorage.getItem('visits'))
}

function setVisits() {
    localStorage.setItem('visits', JSON.stringify(numberOfVisits))
}

// current time

const timeText = document.querySelector("#time");
timeText.textContent = new Date().toLocaleTimeString('en-US', {
    timeStyle: 'short'
});