let num1 = (Math.floor(Math.random() * 1000));
console.log(num1);
let num2 = (Math.floor(Math.random() * 1000));
console.log(num2);
let num3 = (Math.floor(Math.random() * 1000));
console.log(num3);

let max, min;
max = min = num1;

if (num2 > max) {
    max = num2;
} else if (num2 < min){
    min = num2;
}

if (num3 > max) {
    max = num3
} else if(num3 < min){
    min = num3;
}

console.log("minimum = ",min);
console.log("maximum = ",max);
