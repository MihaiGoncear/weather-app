import "../styles/style.scss"
import { cities } from "./cityKeys.js"
import { fetchWeatherApi } from "./api.js"
// import { getCityFromLocalStorage } from "./localStorage.js"
// import { setCityToLocalStorage } from "./localStorage.js"
import { headTitle } from "./navMenu.js"
import { mainTag } from "./createDivSection.js"
import { dateFormator } from "./dateFormator.js"

let currentDate = document.getElementById('date');
currentDate.innerText = dateFormator();

document.onload = createPage();

function createPage() {
    if(headTitle.dataset.name === 'home') {
        createDropdown()
        document.body.style.backgroundImage = "url(https://www.vhv.rs/file/max/26/266366_city-skyline-png.png)";
    }else{
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
        option.setAttribute('value', city)
        option.innerText = cities[city].name;
        option.setAttribute('id', cities[city].id)
        select.append(option);
    }

    select.addEventListener('change', addTempContent)
    
    target.append(select);    
}

function addTempContent(event){
    let cityKey = event.target.value;
    let cityImage = cities[cityKey].url   
    let cityId = cities[cityKey].id

    let removeOption = document.getElementById(cityId)

    if(removeOption){
        removeOption.style.display = 'none'
    }
    

    document.body.style.backgroundImage = `url(${cityImage})`;
        
    let mainDiv = document.getElementById('main__div');

    if(mainDiv){
        mainTag.removeChild(mainDiv)
    }
    currentDate.innerText = dateFormator();
    fetchWeatherApi(cities[cityKey].name);
}


