import { cities } from "./cityKeys.js";
import { fetchWeatherApiForCityList } from "./apiForCityList.js"

export function createListDiv() {
    
    for(const city in cities) {

        let cityName = cities[city].name;
        
        if(cityName === '--select--') {
            continue
        } else {
            fetchWeatherApiForCityList(cityName)
        }
    }    
}
