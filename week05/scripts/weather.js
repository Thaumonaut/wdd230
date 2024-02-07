const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.7557&lon=6.6394&units=imperial&appid=82a53a9d42aa3d9488f15b1656f25a8f';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = response.json();
            // console.log(await data);
            displayResults(await data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

const displayResults = (data) => {
    const tempurature = data.main.temp;
    const description = data.weather[0].description;
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

    currentTemp.innerHTML = `${tempurature}&deg;F`;
    weatherIcon.setAttribute('src', icon);
    weatherIcon.setAttribute('alt', description);
    captionDesc.textContent = description;
}

apiFetch();