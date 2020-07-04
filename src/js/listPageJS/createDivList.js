import { getCityFromLocalStorage } from "../localStorageJS/localStorage.js"
import { cities } from "../commonJS/cityKeys.js"


export function listDivViaApi(info) {
    
    let mainTag = document.getElementById('list__main');
    mainTag.classList.add('list__main')
    
    let mainDiv = document.getElementById('list__div')

    let weatherTable = document.getElementById('city__table')

    let weatherTableRow = document.createElement('tr');
    weatherTableRow.classList.add('city__table-row')

    let weatherTableDataFirst = document.createElement('td');
    let weatherTableDataSecond = document.createElement('td');
    let weatherTableDataThird = document.createElement('td');
    
    // let myStorage = getCityFromLocalStorage();
    // let storageCity = cities[myStorage].name

    let weatherTableDataThirdImg = document.createElement('img');
    weatherTableDataThirdImg.setAttribute('src', `http://openweathermap.org/img/w/${info.weather[0].icon}.png`)
    weatherTableDataThirdImg.setAttribute('alt', info.weather[0].description)

    // let myStorage = getCityFromLocalStorage();
    // let storageCity = cities[myStorage].name

    // if(myStorage){
    //     if(info.name === storageCity){
    //         weatherTableRow.style.display = 'none'
    //         console.log(storageCity)
    //         console.log(info.name)
    //     } else{
    //         weatherTableDataFirst.innerText = info.name;
    //     }
    // }
     
    weatherTableDataFirst.innerText = info.name;
    weatherTableDataSecond.innerHTML = `${Math.floor(info.main.temp)}<sup>°C</sup>`;
    weatherTableDataThird.append(weatherTableDataThirdImg);

    weatherTableRow.append(weatherTableDataFirst);
    weatherTableRow.append(weatherTableDataSecond);
    weatherTableRow.append(weatherTableDataThird)

    weatherTable.append(weatherTableRow);

    mainDiv.append(weatherTable);

    mainTag.append(mainDiv);
}