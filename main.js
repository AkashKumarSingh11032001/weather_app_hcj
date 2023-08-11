const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

searchBtn.addEventListener("click", () => {
  CITY = searchBox.value;
  checkWeather(CITY);
});

// fetching json data
async function checkWeather(CITY) {
  API_KEY = "6b58356e646ded6e5df1e64998025a03";
  API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

  const response = await fetch(API_URL);
  var data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "assests/images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "assests/images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "assests/images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "assests/images/drizzle.png";
  } else if (data.weather[0].main == "mist") {
    weatherIcon.src = "assests/images/mist.png";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "assests/images/snow.png";
  }
  document.querySelector(".weather").style.display = "block";
  //   console.log(data);
}
