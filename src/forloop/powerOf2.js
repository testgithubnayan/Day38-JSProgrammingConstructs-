const prompt = require("prompt-sync")();
let number = prompt("enter value for n ");

let i = 1;
while (i <= number) {
    let powerOfTwo = Math.pow(2, i);
    if (powerOfTwo <= 256) {
        console.log(powerOfTwo);
        i++;
    }
    else {
        break;
    }
}
