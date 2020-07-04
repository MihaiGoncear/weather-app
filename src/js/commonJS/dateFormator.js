export function dateFormator(){
    let fullDate = new Date;

    let weekDay = fullDate.getDay();
    switch (weekDay) {
        case (1):
            weekDay = 'Monday';
            break;
        case (2):
            weekDay = 'Tuesday';
            break;
        case (3):
            weekDay = 'Wednesday';
            break;
        case (4):
            weekDay = 'Thursday';
            break;
        case (5):
            weekDay = 'Friday';
            break;
        case (6):
            weekDay = 'Saturday';
            break;
        case (7):
            weekDay = 'Sunday';
            break; 
    }
    
    let monthDay = fullDate.getDate();
    let month = fullDate.getMonth() + 1;
    switch (month) {
        case (1):
            month = 'Jan';
            break;
        case (2):
            month = 'Feb';
            break;
        case (3):
            month = 'Mar';
            break;
        case (4):
            month = 'Apr';
            break;
        case (5):
            month = 'May';
            break;
        case (6):
            month = 'Jun';
            break;
        case (7):
            month = 'Jul';
            break; 
        case (8):
            month = 'Aug';
            break; 
        case (9):
            month = 'Sep';
            break; 
        case (10):
            month = 'Oct';
            break; 
        case (11):
            month = 'Nov';
            break; 
        case (12):
            month = 'Dec';
            break; 
    }

    let year = fullDate.getFullYear();

    let hour = fullDate.getHours()
    let minutes = fullDate.getMinutes()

    if(hour < 1 || minutes < 1) {
        hour = `0${hour}`;
        minutes = `0${minutes}`;
    }

    let fullYear = `${weekDay}, ${monthDay} ${month} ${year}, ${hour}:${minutes}`

    return fullYear;
}