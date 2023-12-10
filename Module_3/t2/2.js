'use strict';

const target = document.getElementById('target');


const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
li1.innerText = 'First Item'
li2.innerText = 'Second Item'
li3.innerText = 'Second Item'

target.appendChild(li1);
target.appendChild(li2);
target.appendChild(li3);

li2.className = "my-item"