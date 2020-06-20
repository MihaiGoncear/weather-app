export function fetchWeatherApi(){
    fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=b8b5407d289db4e2cbfa0f2bbc1a70ce')
        .then(response => response.json())
        .then(data => console.log(data))
}



