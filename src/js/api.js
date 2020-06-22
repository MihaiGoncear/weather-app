export function fetchWeatherApi(){
    fetch('api.openweathermap.org/data/2.5/weather?q=london&appid=b8b5407d289db4e2cbfa0f2bbc1a70ce')
        .then(response => response.json())
        .then(data => console.log(data))
}



