const API_KEY = "871dd165ad1ac1c01812460c1ceced2d";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`

  fetch(url)
    .then(response => response.json())
    .then(data => { 
      const weather = document.querySelector('#weather span.weather-status');
      const city = document.querySelector('#weather span.city');
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      city.innerText = data.name;
    });
}

function onGeoError(){
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
