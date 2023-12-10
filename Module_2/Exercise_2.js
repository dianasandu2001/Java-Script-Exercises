'use strict';

const num_party = parseInt(prompt("Enter the number of participants: "));
let party = [];

for (let i = 1; i <= num_party; i++) {
    let name = prompt("Name participant number " + i);
    party.push(name);
}

party.sort();

for (let i of party) {
    document.getElementById("names").innerHTML += `<li>${i}</li>`;
}
