'use strict';

let startYear = parseInt(prompt('Enter a starting year.'))
const endYear = parseInt(prompt('Enter an ending year.'))
let leapYear = "<ol>"

while (startYear <= endYear) {
    if (startYear % 100 === 0) {
        if (startYear % 4 === 0 && startYear % 400 === 0) {
            document.getElementById("leap_list").innerHTML += `<li>${startYear}</li>`;
            startYear++
        }
    }

    else if (startYear % 4 === 0) {
        document.getElementById("leap_list").innerHTML += `<li>${startYear}</li>`;
        startYear++
    }
    else {
        startYear++
    }
}

document.getElementById("leap_list").innerHTML += '</ol>';