export let mainTag = document.getElementById('locations');

export function createDivSection(info) {
    let mainDiv = document.createElement('div');
    mainDiv.setAttribute('id','main__div');
    mainDiv.classList.add('main__div');

    let weatherImgDiv = document.createElement('div');
    weatherImgDiv.classList.add('weather__img-div');

    let weatherImg = document.createElement('img');
    weatherImg.setAttribute('src', `http://openweathermap.org/img/w/${info.weather[0].icon}.png`);
    weatherImg.classList.add('weather__img');

    let weatherTableDiv = document.createElement('div');
    weatherTableDiv.classList.add('weather__table-div');

    let weatherTable = document.createElement('table');
    weatherTable.classList.add('weather__table');

    for(const item in info.main){
        let weatherTableRow = document.createElement('tr')
        let weatherTableDataFirst = document.createElement('td')
        let weatherTableDataSecond = document.createElement('td')

        if(item === 'feels_like'){
            weatherTableDataFirst.innerText = 'Feels like:';
            weatherTableDataSecond.innerHTML = `${Math.floor(info.main.feels_like)}<sup>°C</sup>`;
        } else if(item === 'humidity') {
            weatherTableDataFirst.innerText = 'Humidity:';
            weatherTableDataSecond.innerText = `${info.main.humidity}%`;
        } else if (item === 'pressure') {
            weatherTableDataFirst.innerText = 'Pressure:';
            weatherTableDataSecond.innerText = `${info.main.pressure} P`;
        } else if (item === 'temp') {
            weatherTableDataFirst.innerText = 'Temperature:';
            weatherTableDataSecond.innerHTML = `${Math.floor(info.main.temp)}<sup>°C</sup>`;
        } else if (item === 'temp_max') {
            weatherTableDataFirst.innerText = 'Max.temperature:';
            weatherTableDataSecond.innerHTML = `${Math.floor(info.main.temp_max)}<sup>°C</sup>`;
        } else if (item === 'temp_min') {
            weatherTableDataFirst.innerText = 'Min. temperature:';
            weatherTableDataSecond.innerHTML = `${Math.floor(info.main.temp_min)}<sup>°C</sup>`;
        }

        weatherTableRow.append(weatherTableDataFirst);
        weatherTableRow.append(weatherTableDataSecond);

        weatherTable.append(weatherTableRow);
    }



    weatherImgDiv.append(weatherImg);
    weatherTableDiv.append(weatherTable);

    mainDiv.append(weatherImgDiv);
    mainDiv.append(weatherTableDiv);

    mainTag.append(mainDiv);
    


    console.log(info)
}