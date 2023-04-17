function showTemperature(response) {
  console.log(response.data);
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let temperatureElement = document.querySelector("#temperature");
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = temperatureElement.innerHTML = Math.round(
    response.data.main.temp
  );
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
}
let apiKey = "3977acef4ffb0b3913a7e4cdd138f804";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showTemperature);
