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
    timeStyle: 'short',
    timeZone: 'America/Los_Angeles'
});

// weather

const url = "https://api.openweathermap.org/data/2.5/weather?lat=47.979&lon=-122.2021&units=imperial&appid=82a53a9d42aa3d9488f15b1656f25a8f"

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDesc = document.querySelector('#weather-desc');

async function getWeather() {
    try {
        const response = await fetch(url);
        if(response.ok) {
            const data = response.json();
            displayWeather(await data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error)
    }
}

function displayWeather(data) {
    const temp = data.main.temp;
    const desc = data.weather[0].description;
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

    currentTemp.innerHTML = `${temp}&deg;F`;
    weatherIcon.setAttribute('src', icon);
    weatherIcon.setAttribute('alt', desc);
    weatherDesc.textContent = desc;
}

getWeather();