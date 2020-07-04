import { fetchWeatherApi } from '../apiJS/apiForecast.js'
import { getCityFromLocalStorage } from "../localStorageJS/localStorage.js"
import { cities } from "../commonJS/cityKeys.js"

let myStorage = getCityFromLocalStorage()

if(myStorage) {
    fetchWeatherApi(cities[myStorage].name)
    document.body.style.backgroundImage = `url('${cities[myStorage].url}')`
} else {
    let h = document.createElement('h1')
    h.innerText = 'Choose city from home Page'
    document.body.style.backgroundImage = "url(./images/home-bg.png)"

    document.body.append(h)
}

