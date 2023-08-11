API_KEY = "6b58356e646ded6e5df1e64998025a03";
CITY = "mumbai";
API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

// fetching json data
async function checkWeather() {
  const response = await fetch(API_URL);
  var data = await response.json();
  console.log(data);
}

checkWeather();
