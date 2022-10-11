function checkPrime(number){
    if(number == 1 || number == 0){
        return false;
    }
    for (var i=2;i<number;i++){
        if(number%i == 0){
            return false;
        }
    }
    return true;
}

function checkPalindrome(number){
    var rev = 0;
    var rem =0;
    while(number!=0){
        rem = number%10;
        rev = rev*10 +rem;
        number = parseInt(number/10);
    }
    return rev;
}

const prompt = require("prompt-sync")();
var number = prompt("Enter the Number: ");


var number1 = checkPalindrome(number);
if(number1 == number ){
    var isPrime = checkPrime(number);
    if(isPrime){
        console.log("Number is palindrome and prime")
    }
    else{
        console.log("Number is palindrome but not prime")
    }
}
else{
    console.log("Not palindrome")
}
