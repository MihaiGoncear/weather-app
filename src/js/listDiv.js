import { cities } from "./cityKeys.js";

export function createListDiv(info) {
    let mainTag = document.getElementById('list-main');
    
    let mainDiv = document.createElement('div');
    mainDiv.setAttribute('id','list__div');
    mainDiv.classList.add('list__div');

    let weatherListCityName = document.createElement('ul');
    weatherListCityName.classList.add('city-list');

    // let weatherTableDataSecond = document.createElement('td')
 
    for(const city in cities) {

        let weatherListitem = document.createElement('li');
        let cityName = cities[city].name;

        if(cityName === '--select--') {
            continue
        } else {
            weatherListitem.innerText = `${cityName}:`

            weatherListCityName.append(weatherListitem)
            console.log(cityName)
        }
    }
    mainDiv.append(weatherListCityName);
    mainTag.append(mainDiv);
}