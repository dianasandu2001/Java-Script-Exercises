'use strict';

let input = parseInt(prompt("Enter a number"));
list = []

while (input > 0 && !isNaN(input)) {
    list.push(input);
    input = parseInt(prompt("Enter a number"));
}

list.sort(function(a, b) {
    return b - a;
});

console.log(list);

