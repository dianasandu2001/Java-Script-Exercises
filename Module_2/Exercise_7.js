'use strict';

function dice_roll (side) {
    return Math.floor(Math.random() * side) + 1;
}

const side_num = parseInt(prompt("Enter the number of sides of the die"));

let dice = 1
while (dice < side_num) {
    dice = dice_roll(side_num)
    document.getElementById("dice").innerHTML += `<ul>${dice}</ul>`;
}