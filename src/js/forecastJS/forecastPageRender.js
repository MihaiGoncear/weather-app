export function forecastRenderPage(info) {
    console.log(info)

    let mainDiv = document.getElementById('forecast__main')
    mainDiv.setAttribute('class', 'forecast__main')

    let forecastDiv = document.getElementById('forecast__main-div');
    forecastDiv.setAttribute('class', 'forecast__main-div')

    let forecastList = document.createElement('ul');
    forecastList.setAttribute('class', 'forecast__main-list')

    let firstListItem = document.createElement('li');
    let secondListItem = document.createElement('li');
    let thirdListItem = document.createElement('li');

    let weatherTableDataThirdImg = document.createElement('img');
    weatherTableDataThirdImg.setAttribute('src', `http://openweathermap.org/img/w/${info.weather[0].icon}.png`)
    weatherTableDataThirdImg.setAttribute('alt', info.weather[0].description)
    
    let dateString = info.dt_txt

    firstListItem.innerText = dateString.substr(8, 2);
    secondListItem.append(weatherTableDataThirdImg) 
    thirdListItem.innerHTML = `${Math.floor(info.main.temp)}<sup>°C</sup>`;

    forecastList.append(firstListItem)
    forecastList.append(secondListItem)
    forecastList.append(thirdListItem)

    forecastDiv.append(forecastList)

    mainDiv.append(forecastDiv)
}