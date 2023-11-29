'use strict';

let num1 = prompt("Enter the 1st number: ");
let num2 = prompt("Enter the 2nd number: ");
let num3 = prompt("Enter the 3rd number: ");

num1 = parseInt(num1)
num2 = parseInt(num2)
num3 = parseInt(num3)

const sum = num1 + num2 + num3
const product = num1 * num2 * num3
const average = (num1 + num2 + num3)/3

document.querySelector('#sum').innerHTML = 'The sum of your numbers is: ' + sum;
document.querySelector('#product').innerHTML = 'The product of your numbers is: ' + product;
document.querySelector('#average').innerHTML = 'The average of your numbers is: ' + average.toFixed(3);

