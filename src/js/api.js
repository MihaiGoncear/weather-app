import { createDivSection } from "./createDivSection.js"

export  function fetchWeatherApi(cityName){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b8b5407d289db4e2cbfa0f2bbc1a70ce&units=metric`)
    .then(response => response.json())
    .then(data => createDivSection(data))
};