import "../styles/style.scss"
import { cities } from "./cityKeys.js"
import { fetchWeatherApi } from "./api.js"
import { getCityFromLocalStorage } from "./localStorage.js"
import { setCityToLocalStorage } from "./localStorage.js"
import { buttonChange } from "./navMenu.js"

fetchWeatherApi()

let myStorage = getCityFromLocalStorage();

let currentDate = document.getElementById('date');
currentDate.innerText = new Date();



function createPage() {
    createDropdown();
    // createInfoDiv();
    buttonChange;
};

// function createInfoDiv() {
//     console.log("test")
// }

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

    let cityKey = event.target.value;
    let cityImage = cities[cityKey].url    
    document.body.style.backgroundImage = `url(${cityImage})`;
    
    // if(myStorage){
    //     document.body.style.backgroundImage = `url(${myStorage.url})`;
    // } 
    myStorage.push({
        url: cities[cityKey].url,
        text: cities[cityKey].name,
    });
    setCityToLocalStorage(myStorage);
}

createPage();