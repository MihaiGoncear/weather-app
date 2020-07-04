import "../../styles/style.scss"
import { cities } from "../commonJS/cityKeys.js"
import { fetchWeatherApi } from "../apiJS/api.js"
import { getCityFromLocalStorage } from "../localStorageJS/localStorage.js"
import { setCityToLocalStorage } from "../localStorageJS/localStorage.js"
import { headTitle } from "../commonJS/navMenu.js"
import { mainTag } from "./createDivSection.js"
import { dateFormator } from "../commonJS/dateFormator.js"
import { createListDiv } from "../listPageJS/listDiv.js"

let currentDate = document.getElementById('date');
currentDate.innerText = dateFormator();

document.onload = createPage();

function createPage() {
    if(headTitle.dataset.name === 'home') {
        createDropdown();
        document.body.style.backgroundImage = "url(https://www.vhv.rs/file/max/26/266366_city-skyline-png.png)";
    } else if(headTitle.dataset.name === 'about'){
        document.body.style.backgroundImage = "url(https://thewallpaper.co//wp-content/uploads/2016/10preview/free-weather-background-hd-wallpapers-windows-apple-amazing-4k-samsung-wallpapers-free-download-1920x1080.jpg)";
        createListDiv();
    } else {
        return;
    }
}

const myStorage = getCityFromLocalStorage();

if(myStorage) {
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

function createDropdown() {
    let select = document.createElement('select');
    let target = document.querySelector('.locations');
    
    select.setAttribute('name', 'city');
    select.setAttribute('id', 'city');
    select.setAttribute('class', 'city-select')

    for(const city in cities) {
        let option = document.createElement('option');
        option.setAttribute('value', city);
        option.innerText = cities[city].name;
        option.setAttribute('id', cities[city].id);
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
    setCityToLocalStorage(cities[cityKey].name)
}


