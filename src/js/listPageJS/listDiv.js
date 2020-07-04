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
    document.body.style.backgroundImage = "url(./images/list-bg.jpg)";
}


