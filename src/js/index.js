import "../styles/style.scss"
import { cities } from "./cityKeys.js"
import { fetchWeatherApi } from "./api.js"

let currentDate = document.getElementById('date');
let myStorage = getCityFromLocalStorage();

    myStorage === null ? myStorage = [] : myStorage;

    function getCityFromLocalStorage() {
        return JSON.parse(localStorage.getItem('city'));
    };

    function setCityToLocalStorage(city) {
        localStorage.setItem('city', JSON.stringify(city))
    };

currentDate.innerText = new Date();

function createDropdown(city) {
    let select = document.createElement('select');
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

    select.addEventListener('change', changeBackground)
    
    
    target.append(select);
    
}

function changeBackground(event){
    let cityKey = event.target.value;
    let cityImage = cities[cityKey].url

    document.body.style.backgroundImage = `url(${cityImage})`

    myStorage.push({
        id: cities[cityKey].name,
        text: cities[cityKey].name,
    });
    setCityToLocalStorage(myStorage);
}

createDropdown()