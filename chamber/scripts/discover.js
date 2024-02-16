const visitsText = document.querySelector('#visit-tracker');
var dateVisited = getDate() || 0;

if (!dateVisited) {
    visitsText.textContent = "Welcome! Let us know if you have any questions"
} else if (Math.abs(Date.now() - dateVisited) / 36e5 < 24) {
    visitsText.textContent = "Welcome back, we are glad to see you again so soon!"
} else {
    visitsText.textContent = `You last visited ${Math.floor((Math.abs(Date.now() - dateVisited) / 36e5) / 24)} days ago.`
}

setDate(Date.now())

function getDate() {
    return JSON.parse(localStorage.getItem('date'));
}

function setDate(date) {
    localStorage.setItem('date', JSON.stringify(date))
}

