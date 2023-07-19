const cityTemp = document.querySelector('#city-temperature');
const currentTemp = document.querySelector('#current-temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=-9.37&lon=-75.03&units=imperial&appid=390c7e0fc300a323e003ec765f111f38";

async function apiFetch(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  cityTemp.innerHTML = `${data.name}, ${data.sys.country}`;
  currentTemp.innerHTML = `${data.main.temp}&deg;F `;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = ` - ${desc}`;
}
apiFetch(url);
