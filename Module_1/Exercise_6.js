'use strict';

const answer = confirm('Should I calculate the square root?')
if(answer===true) {
    let num = parseInt(prompt("Give a number: "))
    const root = Math.sqrt(num)
    document.querySelector('#root').innerHTML = 'The square root of ' + num + ' is a ' + root;
}
else {
    document.querySelector('#root').innerHTML = 'The square root is not calculated.';
}