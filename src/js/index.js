import "../styles/style.scss"
import { cities } from "./cityKeys.js"
import { fetchWeatherApi } from "./api.js"
import { getCityFromLocalStorage } from "./localStorage.js"
import { setCityToLocalStorage } from "./localStorage.js"

let myStorage = getCityFromLocalStorage();

let currentDate = document.getElementById('date');
currentDate.innerText = new Date();

function createDropdown() {
    let select = document.createElement('select');
    select.addEventListener('change', changeBackground)

    let target = document.querySelector('.locations');

    select.setAttribute('name', 'city');
    select.setAttribute('id', 'city');
    select.setAttribute('class', 'city-select')

    for(const city in cities) {
        let option = document.createElement('option');
        option.setAttribute('value', city)
        option.innerText = cities[city].name;
        option.setAttribute('id', cities[city].name)
        select.append(option);
    }

    target.append(select);    
}

function changeBackground(event){
    myStorage = [];
    let cityKey = event.target.value;
    let cityImage = cities[cityKey].url

    //if(myStorage === []){
        document.body.style.backgroundImage = `url(${cityImage})`;
    //} else {
    //     myStorage = getCityFromLocalStorage()
    //     document.body.style.backgroundImage = `url(${myStorage.url})`;
    // }
    

    myStorage.push({
        url: cities[cityKey].url,
        text: cities[cityKey].name,
    });
    setCityToLocalStorage(myStorage);
}

createDropdown()
