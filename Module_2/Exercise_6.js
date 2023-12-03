'use strict';

function dice_roll () {
    return Math.floor(Math.random() * 6) + 1;
}
let dice = 1
while (dice < 6) {
    dice = dice_roll()
    document.getElementById("dice").innerHTML += `<ul>${dice}</ul>`;
}