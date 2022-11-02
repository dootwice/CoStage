
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "e8e272caba2107a80cf7251994d4b37d";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;

      const images = ["Clear.jpg", "Cloud.jpg", "Rain.jpg", "Snow.jpg"];
      const bgImage = document.createElement("img");
      let weatherIcon = "";

      if (data.weather[0].main == "Clear") {
        bgImage.src = "Clear.jpg";
        weatherIcon = "☀️";
      } else if (data.weather[0].main == "Cloud") {
        bgImage.src = "Cloud.jpg";
        weatherIcon = "☁️";
      } else if (data.weather[0].main == "Snow") {
        bgImage.src = "Snow.jpg";
        weatherIcon = "☃️";
      } else if (data.weather[0].main == "Rain") {
        bgImage.src = "Rain.jpg";
        weatherIcon = "☔";
      } else {
        bgImage.src = "Default.jpg";
      }

      document.body.appendChild(bgImage);
      weather.innerText = `${data.weather[0].main}${weatherIcon} ${Math.round(data.main.temp)}°C`;
    });
}
function onGeoError() {
  alert("날씨를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);