import { fetchWeatherApi } from '../apiJS/apiForecast.js'
import { getCityFromLocalStorage } from "../localStorageJS/localStorage.js"
import { cities } from "../commonJS/cityKeys.js"

let myStorage = getCityFromLocalStorage()

if(myStorage) {
    fetchWeatherApi(cities[myStorage].name)
} else {
    let h = document.createElement('h1')
    h.innerText = 'Choose city from home Page'

    document.body.append(h)
}

