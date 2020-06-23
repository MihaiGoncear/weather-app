let homeBtn = document.getElementById('home');
let aboutBtn = document.getElementById('about');
let contactBtn = document.getElementById('contact');
let headTitle = document.getElementById('title');

homeBtn.onclick = buttonChange(homeBtn);
aboutBtn.onclick = buttonChange(aboutBtn);
contactBtn.onclick = buttonChange(contactBtn);

function buttonChange(mainButton){

    if(headTitle.innerText === mainButton.id){
        mainButton.style.color = 'rgba(0, 0, 255, 0.548)';
        mainButton.style.backgroundColor = 'rgba(153, 155, 255, 0.418)';
        mainButton.style.fontWeight = 'bold';
    }
}