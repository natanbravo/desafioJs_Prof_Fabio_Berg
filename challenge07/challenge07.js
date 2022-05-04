//Write a function that receives two strings (a,b) as a parameter,
//and returns the number of times the string "a" is used inside "b";

function myFunction (a, b){
    return b.split(a).length -1;
    
}
console.log(myFunction("H", "How many times the value of 'a' repeats here ? " )); //1
console.log(myFunction("h", "How many times the value of 'a' repeats here ? " )); //2
console.log(myFunction("a", "How many times the value of 'a' repeats here ? " )); //4
console.log(myFunction("a", "How many times the value of 'a' repeats here ? " )); //4
console.log(myFunction("How", "How many times the value of 'a' repeats here ? " )); //1
console.log(myFunction("Surf", "How many times the value of 'a' repeats here ? " )); //0