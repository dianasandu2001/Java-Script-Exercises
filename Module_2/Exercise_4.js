let input = parseInt(prompt("Enter a number"));
list = []

while (input > 0 && !isNaN(input)) {
    list.push(input);
    input = parseInt(prompt("Enter a number"));
}

list.sort();
list.reverse();

/*
// Compare numbers instead of strings
list.sort(function(a, b) {
    return b - a;
});
*/

console.log(list);

