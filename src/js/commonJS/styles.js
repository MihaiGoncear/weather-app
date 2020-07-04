import "../../styles/style.scss"
import { dateFormator } from "../commonJS/dateFormator.js"

let currentDate = document.getElementById('date');
currentDate.innerText = dateFormator();

let homeBtn = document.getElementById('home');
let listBtn = document.getElementById('list');
let contactBtn = document.getElementById('contact');
let forecastBtn = document.getElementById('forecast');
export let headTitle = document.getElementById('title');

homeBtn.onclick = buttonChange(homeBtn);
listBtn.onclick = buttonChange(listBtn);
contactBtn.onclick = buttonChange(contactBtn);
forecastBtn.onclick = buttonChange(forecastBtn);

function buttonChange(mainButton){

    if(headTitle.dataset.name === mainButton.id){
        mainButton.style.color = 'rgba(0, 0, 255, 0.548)';
        mainButton.style.backgroundColor = 'rgba(153, 155, 255, 0.418)';
        mainButton.style.fontWeight = 'bold';
    }
}