import { cities } from "../commonJS/cityKeys.js"
import { fetchWeatherApiForCityList } from "../apiJS/apiForCityList.js"

document.onload = createListDiv();

function createListDiv() {
    
    for(const city in cities) {

        let cityName = cities[city].name;
        
        if(cityName === '--select--') {
            continue
        } else {
            fetchWeatherApiForCityList(cityName)
        }
    }    
    document.body.style.backgroundImage = "url(https://thewallpaper.co//wp-content/uploads/2016/10preview/free-weather-background-hd-wallpapers-windows-apple-amazing-4k-samsung-wallpapers-free-download-1920x1080.jpg)";
}


