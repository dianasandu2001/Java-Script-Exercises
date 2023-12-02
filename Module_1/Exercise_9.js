'use strict';


function isPrime(number) {
    if (number === 1) {
      return true;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }


let userInput = parseInt(prompt("Enter an integer:"));

if (isPrime(userInput)) {
    document.body.innerHTML = `<p>${userInput} is a prime number.</p>`;
} else {
    document.body.innerHTML = `<p>${userInput} is not a prime number.</p>`;
}