const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b234b9935dmshc1b0d24960e11cap10365ajsn119637f129e9",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

function msToTime(duration) {
  var date = new Date(duration * 1000);

  var hours = date.getHours();

  var minutes = "0" + date.getMinutes();

  var seconds = "0" + date.getSeconds();

  var formattedTime =
    hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  return formattedTime;
}

async function fetchWeather(city) {
  try {
    const url =
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;
    cityName.innerHTML = city;

    const response = await fetch(url, options);
    const result = await response.json();
    //console.log(result);
    //cloud_pct.innerHTML = result.cloud_pct
    temp.innerHTML = result.temp;
    temp2.innerHTML = result.temp;
    feels_like.innerHTML = result.feels_like;
    humidity.innerHTML = result.humidity;
    humidity2.innerHTML = result.humidity;
    min_temp.innerHTML = result.min_temp;
    max_temp.innerHTML = result.max_temp;
    wind_speed.innerHTML = result.wind_speed;
    wind_speed2.innerHTML = result.wind_speed;
    wind_degrees.innerHTML = result.wind_degrees;
    sunrise.innerHTML = msToTime(result.sunrise);
    sunset.innerHTML = msToTime(result.sunset);
  } catch (error) {
    console.error(error);
  }
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  fetchWeather(city.value);
});

fetchWeather("Delhi");

async function fetchWeather2(city) {
  try {
    const url =
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;

    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

let elements = document.querySelectorAll("th.text-start");

elements.forEach(async (element) => {
  const city = element.textContent;
  console.log(city);

  const result = await fetchWeather2(city);
  //const result2 = await fetchWeather2("Mumbai");

  //console.log(result2);
  console.log(result);
  if (city == "Mumbai") {
    other_temp1.innerHTML = result.temp;

    other_feels_like1.innerHTML = result.feels_like;
    other_humidity1.innerHTML = result.humidity;

    other_min_temp1.innerHTML = result.min_temp;
    other_max_temp1.innerHTML = result.max_temp;
    other_wind_speed1.innerHTML = result.wind_speed;

    other_wind_degrees1.innerHTML = result.wind_degrees;
    other_sunrise1.innerHTML = msToTime(result.sunrise);
    other_sunset1.innerHTML = msToTime(result.sunset);
  } else if (city == "Bangalore") {
    other_temp2.innerHTML = result.temp;

    other_feels_like2.innerHTML = result.feels_like;
    other_humidity2.innerHTML = result.humidity;

    other_min_temp2.innerHTML = result.min_temp;
    other_max_temp2.innerHTML = result.max_temp;
    other_wind_speed2.innerHTML = result.wind_speed;

    other_wind_degrees2.innerHTML = result.wind_degrees;
    other_sunrise2.innerHTML = msToTime(result.sunrise);
    other_sunset2.innerHTML = msToTime(result.sunset);
  } else if (city == "Guwahati") {
    other_temp3.innerHTML = result.temp;

    other_feels_like3.innerHTML = result.feels_like;
    other_humidity3.innerHTML = result.humidity;

    other_min_temp3.innerHTML = result.min_temp;
    other_max_temp3.innerHTML = result.max_temp;
    other_wind_speed3.innerHTML = result.wind_speed;

    other_wind_degrees3.innerHTML = result.wind_degrees;
    other_sunrise3.innerHTML = msToTime(result.sunrise);
    other_sunset3.innerHTML = msToTime(result.sunset);
  } else if (city == "Kolkata") {
    other_temp4.innerHTML = result.temp;

    other_feels_like4.innerHTML = result.feels_like;
    other_humidity4.innerHTML = result.humidity;

    other_min_temp4.innerHTML = result.min_temp;
    other_max_temp4.innerHTML = result.max_temp;
    other_wind_speed4.innerHTML = result.wind_speed;

    other_wind_degrees4.innerHTML = result.wind_degrees;
    other_sunrise4.innerHTML = msToTime(result.sunrise);
    other_sunset4.innerHTML = msToTime(result.sunset);
  }
});
