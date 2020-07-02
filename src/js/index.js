import "../styles/style.scss"
import { cities } from "./cityKeys.js"
import { fetchWeatherApi } from "./api.js"
// import { getCityFromLocalStorage } from "./localStorage.js"
// import { setCityToLocalStorage } from "./localStorage.js"
import { headTitle } from "./navMenu.js"
import { mainTag } from "./createDivSection.js"
import { dateFormator } from "./dateFormator.js"
import { createListDiv } from "./listDiv.js"

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

    select.addEventListener('change', addTempContent)
    
    target.append(select);    
}

function addTempContent(event){
    let cityKey = event.target.value;
    let cityImage = cities[cityKey].url   

    document.body.style.backgroundImage = `url(${cityImage})`;
        
    let mainDiv = document.getElementById('main__div');

    if(mainDiv){
        mainTag.removeChild(mainDiv)
    }
    
    currentDate.innerText = dateFormator();
    fetchWeatherApi(cities[cityKey].name);
}


