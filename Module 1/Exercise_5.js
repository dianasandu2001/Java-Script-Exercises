'use strict';

const input = prompt("Enter a year : ")
let year = parseInt(input)

if (year % 4 === 0) {
    document.querySelector('#result').innerHTML = 'The year ' + year + ' is a leap year.';
} else if (year % 4 === 0 && year % 400 === 0) {
    document.querySelector('#result').innerHTML = 'The year ' + year + ' is a leap year.';
} else {
    document.querySelector('#result').innerHTML = 'The year ' + year + ' is not a leap year.';
}