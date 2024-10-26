const apiKey = "10464f05c814e782a78c6a94a55a8ce8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const iconUrl = "https://openweathermap.org/img/wn/"
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const cities = ['delhi', 'mumbai', 'chennai', 'bengaluru', 'kolkata', 'hyderabad'];

async function checkWeather(){
  var x = Date();
  document.querySelector(".update").innerHTML = "Last updated on: "+x;
  for(let i=0; i<6; i++){
    const response = await fetch(apiUrl + cities[i] + `&appid=${apiKey}`);
  
    if(response.status == 404){
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    }else{
      //variable data contains all weather information from apiUrl
      var data = await response.json(); //object that contains method for parsing values and convert values to JSON
  
      //queryselector returns first element within document that matches specified selector, if no matches are found null is returned
      //innerHTML = gets/sets HTML markup contained within the element
      //in this case it will search for the class city, select the h2 element and replace the city name
      document.querySelector("#"+cities[i]+"cond").innerHTML = data.weather[0].main;
      document.querySelector("#"+cities[i]+"humidity").innerHTML = "Humidity: "+data.main.humidity + "%";
      document.querySelector("#"+cities[i]+"wind").innerHTML = "Wind: "+data.wind.speed + "km/h";
      document.querySelector("#"+cities[i]+"temp").innerHTML = "Temp : "+data.main.temp + "°C";
      document.querySelector("#"+cities[i]+"tempmin").innerHTML = "Temp Min: "+data.main.temp_min + "°C";
      document.querySelector("#"+cities[i]+"tempmax").innerHTML = "Temp Max: "+data.main.temp_max + "°C";
      document.querySelector("#"+cities[i]+"feelslike").innerHTML = "Feels Like : "+data.main.feels_like + "°C";
      var weatherIcon = document.getElementById(cities[i]+"img");
      weatherIcon.src = iconUrl+data.weather[0].icon+"@2x.png";
      console.log(iconUrl+data.weather[0].icon+"@2x.png");
      
    }
  }
 
}

window.onload = checkWeather();