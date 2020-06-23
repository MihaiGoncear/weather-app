import "../styles/style.scss"
import { cities } from "./cityKeys.js"
import { fetchWeatherApi } from "./api.js"
import { getCityFromLocalStorage } from "./localStorage.js"
import { setCityToLocalStorage } from "./localStorage.js"
import { buttonChange } from "./navMenu.js"

let myStorage = getCityFromLocalStorage();
let mainTag = document.getElementById('locations')

let currentDate = document.getElementById('date');
currentDate.innerText = new Date();

function createPage() {
    createDropdown();
    // createInfoDiv();
    buttonChange;
};

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
        option.setAttribute('id', cities[city].name)
        select.append(option);

        // if(myStorage.text){
        //     document.body.style.backgroundImage = `url(${myStorage.url})`;
        // }

    }

    select.addEventListener('change', changeBackground)
    target.append(select);    
    
}

function changeBackground(event){
    myStorage = [];
    let mainDiv = document.getElementById('main__div');

    let cityKey = event.target.value;
    let cityImage = cities[cityKey].url    
    document.body.style.backgroundImage = `url(${cityImage})`;

    if(mainDiv){
        mainTag.removeChild(mainDiv)
    }

    fetchWeatherApi(cities[cityKey].name);

    // if(myStorage){
    //     document.body.style.backgroundImage = `url(${myStorage.url})`;
    // } 
    myStorage.push({
        url: cities[cityKey].url,
        text: cities[cityKey].name,
        id: cities[cityKey].id,
    });
    setCityToLocalStorage(myStorage);
    
}

createPage();


