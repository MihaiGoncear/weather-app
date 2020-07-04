import { forecastRenderPage } from '../forecastJS/forecastPageRender.js'

export  function fetchWeatherApi(cityName){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=london&appid=b8b5407d289db4e2cbfa0f2bbc1a70ce&units=metric`)
    .then(response => response.json())
    .then(data => { 
        return data.list.filter((item, index) => {
            if(index === 0) return item;
            if((index + 3) % 8 === 0) return item;
        })
     })
     .then(result => result.map(item => forecastRenderPage(item)))
};