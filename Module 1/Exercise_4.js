'use strict';

function select_house (num) {
        return Math.floor(Math.random() * num)
    }
    const name = prompt("What is your name?")
    let assinged = select_house(4)

    switch (assinged) {
        case 0:
            document.querySelector('#sort').innerHTML = name + ' you are Gryffindor';
            break;
        case 1:
            document.querySelector('#sort').innerHTML = name + ' you are Slytherin';
            break;
        case 2:
            document.querySelector('#sort').innerHTML = name + ' you are Hufflepuff';
            break;
        case 3:
            document.querySelector('#sort').innerHTML = name + ' you are Ravenclaw';
            break;
        default:
            break;
    }