'use strict';

const numRolls = parseInt(prompt('Enter a number of dice to roll.'))
let i = 1
let sum = 0

while (i <= numRolls) {
    let num = Math.floor(Math.random()*5)
    console.log(num)
    sum += num + 1
    i++
}

document.querySelector('#sum').innerHTML = 'The sum of the dice rolled are: ' + sum;