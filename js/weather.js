const API_KEY = "78e583cf4415f3e5b4a52b1f20ecc7e8"

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url).then(response => response.json()).then(data => {
    const city = document.querySelector("#weather span:first-child");
    const temp = document.querySelector("#weather span:last-child");
    city.innerText = `${data.name} / `;
    temp.innerText = `${data.main.temp}°`
  })
}
function onGeoError() {
  alert("Can't find you. No weather for you!");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);