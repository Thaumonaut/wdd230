const forecastURL =
  "https://api.openweathermap.org/data/2.5/forecast?lat=47.979&lon=-122.2021&units=imperial&appid=82a53a9d42aa3d9488f15b1656f25a8f";
const weatherURL =
  "https://api.openweathermap.org/data/2.5/weather?lat=47.979&lon=-122.2021&units=imperial&appid=82a53a9d42aa3d9488f15b1656f25a8f";

const weatherData = {};

async function apiFetch(url, storeName) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = response.json();
      weatherData[storeName] = await data;
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
}

const weatherSection = document.querySelector(".weather");

const displayForecast = (data) => {
  let today = new Date();

  let forecast = data.list.filter((item) => {
    let date = new Date(item.dt_txt);
    if (today.getDate() != date.getDate() && date.getHours() == 12) {
      return item;
    }
  });

  const sectionTitle = document.createElement('h4');
  sectionTitle.textContent = "3-Day Forecast";
  weatherSection.append(sectionTitle);

  const forecastList = document.createElement("ul");
  forecastList.classList.add('forecast-list');

  forecast.forEach((day, index) => {
    if (index < 3) {
      const tempurature = day.main.temp;
      const condition = day.weather[0].description;
      const iconURL = `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`;

      let container = document.createElement("li");
      container = CreateLayout(container, tempurature, condition, iconURL);
      container.classList.add("sub-weather");

      forecastList.append(container);
    }
  });

  weatherSection.append(forecastList);
};

function CreateLayout(parent, tempurature, condition, iconURL) {
  let icon = document.createElement("img");
  icon.setAttribute("src", iconURL);
  icon.setAttribute("alt", `${condition} icon`);
  icon.classList.add("icon");
  parent.append(icon);

  let tempuratureText = document.createElement("p");
  tempuratureText.innerHTML = `${Math.round(tempurature)}&deg;F`;
  tempuratureText.classList.add("tempurature");
  parent.append(tempuratureText);

  let conditionText = document.createElement("p");
  conditionText.textContent = condition;
  conditionText.classList.add("condition");
  parent.append(conditionText);

  return parent;
}

function displayWeather(data) {
  const tempurature = data.main.temp;
  const condition = data.weather[0].description;
  const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  let container = document.createElement("div");
  container = CreateLayout(container, tempurature, condition, iconURL);
  container.classList.add("current-weather");

  weatherSection.append(container);
}

Promise.all([
  apiFetch(forecastURL, "forecast"),
  apiFetch(weatherURL, "weather"),
]).then(() => {
  displayWeather(weatherData["weather"]);
  displayForecast(weatherData["forecast"]);
});
