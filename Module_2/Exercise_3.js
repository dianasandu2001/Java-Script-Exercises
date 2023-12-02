'use strict';

let party = [];

alert("Name 6 dogs!")

for (let i = 1; i <= 6; i++) {
    let name = prompt("Name participant number " + i);
    party.push(name);
}

party.sort();
party.reverse();

for (let i of party) {
    document.getElementById("names").innerHTML += `<ul>${i}</ul>`;
}