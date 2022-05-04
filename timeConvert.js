function timeConversion(s) {
    let meridian = s.includes('PM');
    let time = s.split(':')
    let hour = parseInt(time[0]);
    let minute = time[1];
    let second = time[2].slice(0, -2);

    if (meridian == true) {
        if (hour != 12) {
            hour = hour + 12;
        }
    } else if (meridian == false) {
        if (hour == 12) {
            hour = '00';
        }
    }

    if (hour < 10 && hour != '00') {
        hour = '0' + hour;
    }

    return (`${hour}:${minute}:${second}`);
}

let hora = "12:40:22AM";

console.log(timeConversion(hora));