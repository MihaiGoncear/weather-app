export function fetchWeatherApi(){
    fetch('http://api.openweathermap.org/data/2.5/group?id=6618607,618426,524901,7535661,5039192&units=metric&appid=b8b5407d289db4e2cbfa0f2bbc1a70ce')
        .then(response => response.json())
        .then(data => {
            for(const item in data){
               console.log(data[item])
            }
        })
}

// function createContent(info){
//     // let mainTempDiv = document.createElement('div');
//     // mainTempDiv.classList.add('mainTempDiv');
//     for(i = 0; i < info.length; i++){
//         console.log(info[i].id)
//     }
// }


