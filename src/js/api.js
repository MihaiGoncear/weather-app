export function fetchWeatherApi(){
    fetch('http://api.openweathermap.org/data/2.5/group?id=6618607,618426,524901,7535661,5039192&units=metric&appid=b8b5407d289db4e2cbfa0f2bbc1a70ce')
        .then(response => response.json())
        .then(data => console.log(data))
}



