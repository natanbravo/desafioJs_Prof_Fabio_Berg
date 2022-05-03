//NUMERIC OPERATIONS;

//Write a function that receives a number as a parameter;
//If the number it's odd return "true" and if it's even, return "false";

function myFunction(number){
    if(number % 2 == 0){
        return true
    }else return false
}

console.log(myFunction(1));//False
console.log(myFunction(-2));//True
console.log(myFunction(231));//False
console.log(myFunction(1234));//True