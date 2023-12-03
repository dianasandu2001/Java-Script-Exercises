let inputs = [];

while (true) {
    let input = parseInt(prompt('Enter a number. Enter previously entered number to exit.'));
    if (inputs.includes(input)) {
        alert('Number is already been given.');
        break;
    } else if (isNaN(input)){
        continue;
    } else {
        inputs.push(input);
    }
}

inputs.sort(function(a, b) {
    return b - a;
});
inputs.reverse();

console.log(inputs)

