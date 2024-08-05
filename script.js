window.onload = function(){

    const temperature = document.getElementById("temperature");
    
    const inputBox = document.getElementById("input");
    
    const searchBtn = document.getElementById("searchBtn");
    
    const icons = document.getElementById("weather_icon");
    
    const humidity = document.getElementById("humidity");
    
    const wind_speed = document.getElementById("wind_speed");
    
    const desp = document.getElementById("desp");
    
    
    async function checkWeather(city){
        
      const api_key = "a5018b80d3af9d00974af8a45ec8242b";
        
      const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
      
      const weather_data = await fetch(`${url}`).then(response => response.json());
      
      temperature.innerHTML = Math.round(weather_data.main.temp - 273.15) + "°C";
      
      desp.innerHTML = weather_data.weather[0].description;
      
      humidity.innerHTML = weather_data.main.humidity + "%";
      
      wind_speed.innerHTML = weather_data.wind.speed + "Km/H";
      
      switch(weather_data.weather[0].description){
          case "clear sky" :
          icons.src = "https://www.dropbox.com/scl/fi/a347znfkxwx325hbaqyc3/7865926.png?rlkey=sebsgd8kiqo2nbfyassaeusrt&dl=1"
          break;
          
          //types of snow
          
          case "snow" :
          icons.src = "https://www.dropbox.com/scl/fi/986jkhnf9sf8awnxqhr3g/414866.png?rlkey=h7orpd4c00wi2ia2jbt5bu61i&dl=1";
          break;
          
          case "sleet" :
          icons.src = "https://www.dropbox.com/scl/fi/986jkhnf9sf8awnxqhr3g/414866.png?rlkey=h7orpd4c00wi2ia2jbt5bu61i&dl=1";
          break;
          
          case "light snow" :
          icons.src = "https://www.dropbox.com/scl/fi/986jkhnf9sf8awnxqhr3g/414866.png?rlkey=h7orpd4c00wi2ia2jbt5bu61i&dl=1";
          break;
          
          case "heavy snow" :
          icons.src = "https://www.dropbox.com/scl/fi/986jkhnf9sf8awnxqhr3g/414866.png?rlkey=h7orpd4c00wi2ia2jbt5bu61i&dl=1";
          break;
          
          case "light shower sleet" :
          icons.src = "https://www.dropbox.com/scl/fi/986jkhnf9sf8awnxqhr3g/414866.png?rlkey=h7orpd4c00wi2ia2jbt5bu61i&dl=1";
          break;
          
          case "shower sleet" :
          icons.src = "https://www.dropbox.com/scl/fi/986jkhnf9sf8awnxqhr3g/414866.png?rlkey=h7orpd4c00wi2ia2jbt5bu61i&dl=1";
          break;
          
          case "light rain and snow" :
          icons.src = "https://www.dropbox.com/scl/fi/986jkhnf9sf8awnxqhr3g/414866.png?rlkey=h7orpd4c00wi2ia2jbt5bu61i&dl=1";
          break;
          
          case "rain and snow" :
          icons.src = "https://www.dropbox.com/scl/fi/986jkhnf9sf8awnxqhr3g/414866.png?rlkey=h7orpd4c00wi2ia2jbt5bu61i&dl=1";
          break;
          
          case "light shower snow" :
          icons.src = "https://www.dropbox.com/scl/fi/986jkhnf9sf8awnxqhr3g/414866.png?rlkey=h7orpd4c00wi2ia2jbt5bu61i&dl=1";
          break;
          
          case "shower snow" :
          icons.src = "https://www.dropbox.com/scl/fi/986jkhnf9sf8awnxqhr3g/414866.png?rlkey=h7orpd4c00wi2ia2jbt5bu61i&dl=1";
          break;
          
          case "heavy shower snow" :
          icons.src = "https://www.dropbox.com/scl/fi/986jkhnf9sf8awnxqhr3g/414866.png?rlkey=h7orpd4c00wi2ia2jbt5bu61i&dl=1";
          break;
          
          //types of rain
          
          case "rain" :
          icons.src = "https://www.dropbox.com/scl/fi/9ut599ggk8m7dpm4u116l/4150904.png?rlkey=hx0mhv1rjlpmeddgwvusr3sus&dl=1";
          break;
          
         case "light rain" :
          icons.src = "https://www.dropbox.com/scl/fi/9ut599ggk8m7dpm4u116l/4150904.png?rlkey=hx0mhv1rjlpmeddgwvusr3sus&dl=1";
          break; 
          
          case "moderate rain" :
          icons.src = "https://www.dropbox.com/scl/fi/9ut599ggk8m7dpm4u116l/4150904.png?rlkey=hx0mhv1rjlpmeddgwvusr3sus&dl=1";
          break;
          
          case "heavy intensity rain" :
          icons.src = "https://www.dropbox.com/scl/fi/9ut599ggk8m7dpm4u116l/4150904.png?rlkey=hx0mhv1rjlpmeddgwvusr3sus&dl=1";
          break;
          
          case "very heavy rain" :
          icons.src = "https://www.dropbox.com/scl/fi/9ut599ggk8m7dpm4u116l/4150904.png?rlkey=hx0mhv1rjlpmeddgwvusr3sus&dl=1";
          break;
          
          case "extreme rain" :
          icons.src = "https://www.dropbox.com/scl/fi/9ut599ggk8m7dpm4u116l/4150904.png?rlkey=hx0mhv1rjlpmeddgwvusr3sus&dl=1";
          break;
          
          case "freezing rain" :
          icons.src = "https://www.dropbox.com/scl/fi/9ut599ggk8m7dpm4u116l/4150904.png?rlkey=hx0mhv1rjlpmeddgwvusr3sus&dl=1";
          break;
          
          case "light intensity shower rain" :
          icons.src = "https://www.dropbox.com/scl/fi/9ut599ggk8m7dpm4u116l/4150904.png?rlkey=hx0mhv1rjlpmeddgwvusr3sus&dl=1";
          break;
          
          case "shower rain" :
          icons.src = "https://www.dropbox.com/scl/fi/9ut599ggk8m7dpm4u116l/4150904.png?rlkey=hx0mhv1rjlpmeddgwvusr3sus&dl=1";
          break;
          
          case "heavy intensity shower rain" :
          icons.src = "https://www.dropbox.com/scl/fi/9ut599ggk8m7dpm4u116l/4150904.png?rlkey=hx0mhv1rjlpmeddgwvusr3sus&dl=1";
          break;
          
          case "ragged shower rain" :
          icons.src = "https://www.dropbox.com/scl/fi/9ut599ggk8m7dpm4u116l/4150904.png?rlkey=hx0mhv1rjlpmeddgwvusr3sus&dl=1";
          break;
          
          //types of cloud
          
          case "scattered clouds" :
          icons.src = "https://www.dropbox.com/scl/fi/bftfgh0sfb7o4wqycxqf3/4834559.png?rlkey=3kiyv8ye6q9z4xu05vnudxken&dl=1";
          break;
          
          case "few clouds" :
          icons.src = "https://www.dropbox.com/scl/fi/bftfgh0sfb7o4wqycxqf3/4834559.png?rlkey=3kiyv8ye6q9z4xu05vnudxken&dl=1";
          break;
          
          case "broken clouds" :
          icons.src = "https://www.dropbox.com/scl/fi/bftfgh0sfb7o4wqycxqf3/4834559.png?rlkey=3kiyv8ye6q9z4xu05vnudxken&dl=1";
          break;
          
          case "overcast clouds" :
          icons.src = "https://www.dropbox.com/scl/fi/bftfgh0sfb7o4wqycxqf3/4834559.png?rlkey=3kiyv8ye6q9z4xu05vnudxken&dl=1";
          break;
          
          // types of atmosphere
          
          case "haze" :
          icons.src = "https://www.dropbox.com/scl/fi/nqsv21aumq8dp54u350g7/4151022.png?rlkey=f1ku2fpun2hu3imhbaptc8oxi&dl=1"
          break;
          
          case "smoke" :
          icons.src = "https://www.dropbox.com/scl/fi/nqsv21aumq8dp54u350g7/4151022.png?rlkey=f1ku2fpun2hu3imhbaptc8oxi&dl=1"
          break;
          
          case "volcanic ash" :
          icons.src = "https://www.dropbox.com/scl/fi/nqsv21aumq8dp54u350g7/4151022.png?rlkey=f1ku2fpun2hu3imhbaptc8oxi&dl=1"
          break;
          
          case "mist" :
          icons.src = "https://www.dropbox.com/scl/fi/nqsv21aumq8dp54u350g7/4151022.png?rlkey=f1ku2fpun2hu3imhbaptc8oxi&dl=1"
          break;
          
          case "tornado" :
          icons.src = "https://www.dropbox.com/scl/fi/nqsv21aumq8dp54u350g7/4151022.png?rlkey=f1ku2fpun2hu3imhbaptc8oxi&dl=1"
          break;
          
          case "squalls" :
          icons.src = "https://www.dropbox.com/scl/fi/nqsv21aumq8dp54u350g7/4151022.png?rlkey=f1ku2fpun2hu3imhbaptc8oxi&dl=1"
          break;
          
          case "dust" :
          icons.src = "https://www.dropbox.com/scl/fi/nqsv21aumq8dp54u350g7/4151022.png?rlkey=f1ku2fpun2hu3imhbaptc8oxi&dl=1"
          break;
          
          case "sand" :
          icons.src = "https://www.dropbox.com/scl/fi/nqsv21aumq8dp54u350g7/4151022.png?rlkey=f1ku2fpun2hu3imhbaptc8oxi&dl=1"
          break;
          
          case "fog" :
          icons.src = "https://www.dropbox.com/scl/fi/nqsv21aumq8dp54u350g7/4151022.png?rlkey=f1ku2fpun2hu3imhbaptc8oxi&dl=1"
          break;
          
          case "sand/dust whirls" :
          icons.src = "https://www.dropbox.com/scl/fi/nqsv21aumq8dp54u350g7/4151022.png?rlkey=f1ku2fpun2hu3imhbaptc8oxi&dl=1"
          break;
          
          //types of drizzle
          
          case "drizzle" : 
          icons.src = "https://www.dropbox.com/scl/fi/1h6zevneu0aapot4tj9l1/106044.png?rlkey=94adfsynletn529fxsxleeets&dl=1"
          break;
          
          case "light intensity drizzle" : 
          icons.src = "https://www.dropbox.com/scl/fi/1h6zevneu0aapot4tj9l1/106044.png?rlkey=94adfsynletn529fxsxleeets&dl=1"
          break;
          
          case "heavy intensity drizzle" : 
          icons.src = "https://www.dropbox.com/scl/fi/1h6zevneu0aapot4tj9l1/106044.png?rlkey=94adfsynletn529fxsxleeets&dl=1"
          break;
          
          case "light intensity drizzle rain" : 
          icons.src = "https://www.dropbox.com/scl/fi/1h6zevneu0aapot4tj9l1/106044.png?rlkey=94adfsynletn529fxsxleeets&dl=1"
          break;
          
          case "drizzle rain" : 
          icons.src = "https://www.dropbox.com/scl/fi/1h6zevneu0aapot4tj9l1/106044.png?rlkey=94adfsynletn529fxsxleeets&dl=1"
          break;
          
          case "heavy intensity drizzle rain" : 
          icons.src = "https://www.dropbox.com/scl/fi/1h6zevneu0aapot4tj9l1/106044.png?rlkey=94adfsynletn529fxsxleeets&dl=1"
          break;
          
          case "shower rain and drizzle" : 
          icons.src = "https://www.dropbox.com/scl/fi/1h6zevneu0aapot4tj9l1/106044.png?rlkey=94adfsynletn529fxsxleeets&dl=1"
          break;
          
          case "heavy shower rain and drizzle" : 
          icons.src = "https://www.dropbox.com/scl/fi/1h6zevneu0aapot4tj9l1/106044.png?rlkey=94adfsynletn529fxsxleeets&dl=1"
          break;
          
          case "shower drizzle" : 
          icons.src = "https://www.dropbox.com/scl/fi/1h6zevneu0aapot4tj9l1/106044.png?rlkey=94adfsynletn529fxsxleeets&dl=1"
          break;
          
          //types of thunderstorm
          
          case "thunderstorm" :
          icons.src = "https://www.dropbox.com/scl/fi/ov7jmo8uib2bf24jmggs6/3104612.png?rlkey=ebeobw63dtnckxy015fpls8yb&dl=1"
          break;
          
          case "thunderstorm with light rain" :
          icons.src = "https://www.dropbox.com/scl/fi/ov7jmo8uib2bf24jmggs6/3104612.png?rlkey=ebeobw63dtnckxy015fpls8yb&dl=1"
          break;
          
          case "thunderstorm with rain" :
          icons.src = "https://www.dropbox.com/scl/fi/ov7jmo8uib2bf24jmggs6/3104612.png?rlkey=ebeobw63dtnckxy015fpls8yb&dl=1"
          break;
          
          case "thunderstorm with heavy rain" :
          icons.src = "https://www.dropbox.com/scl/fi/ov7jmo8uib2bf24jmggs6/3104612.png?rlkey=ebeobw63dtnckxy015fpls8yb&dl=1"
          break;
          
          case "light thunderstorm" :
          icons.src = "https://www.dropbox.com/scl/fi/ov7jmo8uib2bf24jmggs6/3104612.png?rlkey=ebeobw63dtnckxy015fpls8yb&dl=1"
          break;
          
          case "heavy thunderstorm" :
          icons.src = "https://www.dropbox.com/scl/fi/ov7jmo8uib2bf24jmggs6/3104612.png?rlkey=ebeobw63dtnckxy015fpls8yb&dl=1"
          break;
          
          case "ragged thunderstorm" :
          icons.src = "https://www.dropbox.com/scl/fi/ov7jmo8uib2bf24jmggs6/3104612.png?rlkey=ebeobw63dtnckxy015fpls8yb&dl=1"
          break;
          
          case "thunderstorm with light drizzle" :
          icons.src = "https://www.dropbox.com/scl/fi/ov7jmo8uib2bf24jmggs6/3104612.png?rlkey=ebeobw63dtnckxy015fpls8yb&dl=1"
          break;
          
          case "thunderstorm with heavy drizzle" :
          icons.src = "https://www.dropbox.com/scl/fi/ov7jmo8uib2bf24jmggs6/3104612.png?rlkey=ebeobw63dtnckxy015fpls8yb&dl=1"
          break;
          
          case "thunderstorm with drizzle" :
          icons.src = "https://www.dropbox.com/scl/fi/ov7jmo8uib2bf24jmggs6/3104612.png?rlkey=ebeobw63dtnckxy015fpls8yb&dl=1"
          break;
      }
      
      
    }
    
    searchBtn.addEventListener('click', ()=>{
          
          checkWeather(inputBox.value);
      });
    }