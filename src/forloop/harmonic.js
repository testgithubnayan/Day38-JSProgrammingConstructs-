const prompt = require("prompt-sync")();
var number = prompt("Enter the limit: ");
var sum = 0;
for( var i = 1; i <= number; i++){
    sum += 1/i;
}
console.log(sum);
