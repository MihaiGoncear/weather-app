import { cities } from "../commonJS/cityKeys.js"
import { fetchWeatherApi } from "../apiJS/api.js"
import { getCityFromLocalStorage } from "../localStorageJS/localStorage.js"
import { setCityToLocalStorage } from "../localStorageJS/localStorage.js"

let mainTag = document.getElementById('locations');

document.onload = createDropdown();

const myStorage = getCityFromLocalStorage();

function createDropdown() {
    let select = document.createElement('select');
    let target = document.querySelector('.locations');
    document.body.style.backgroundImage = "url(https://www.vhv.rs/file/max/26/266366_city-skyline-png.png)"
    if(!target) return

    select.setAttribute('name', 'city');
    select.setAttribute('id', 'city');
    select.setAttribute('class', 'city-select')

    for(const city in cities) {
        let option = document.createElement('option');
        option.setAttribute('value', city);
        option.innerText = cities[city].name;
        option.setAttribute('id', city);
        option.setAttribute('class', 'test');
        select.append(option);
    }

    select.addEventListener('change', renderHomeTempContent)
    
    target.append(select);    
}

function renderHomeTempContent(event){
    let cityKey = event.target.value;
    addHomePageContent(cityKey)
    currentDate.innerText = dateFormator();
    setCityToLocalStorage(cityKey)
}

if(myStorage) {
    document.getElementById(myStorage) ? document.getElementById(myStorage).selected = true : null;
    
    addHomePageContent(myStorage)
} 

function addHomePageContent(cityKey) {
    let cityImage = cities[cityKey].url   

    document.body.style.backgroundImage = `url(${cityImage})`;
    let mainDiv = document.getElementById('main__div');

    if(mainDiv){
        mainTag.removeChild(mainDiv)
    }
    fetchWeatherApi(cities[cityKey].name)
   
}
