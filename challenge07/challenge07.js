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


//=====================//=====================//=====================//=====================//=====================


//SECOND WAY TO SOLVE THIS CHALLENGE (USING REGEX);   

function myFunctionTwo(a, b){
    return b.match(new RegExp (a, "gi")).length;
}

console.log(myFunctionTwo("va", "How many times the value of 'a' repeats here ? " )); //1
console.log(myFunctionTwo("he", "How many times the value of 'a' repeats here ? " )); //2
console.log(myFunctionTwo("a", "How many times the value of 'a' repeats here ? " )); //4
console.log(myFunctionTwo("How", "How many times the value of 'a' repeats here ? " )); //1

//=====================//=====================//=====================//=====================//=====================


//THIRD WAY TO SOLVE THIS PROBLEM;

function myFunctionThree(a,b){
    return b.toLowerCase().split(a.toLowerCase()).length;
    
}

console.log(myFunctionThree("h", "How many times the value of 'a' repeats here ? " )); //4
console.log(myFunctionThree("a", "How many times the value of 'a' repeats here ? " )); //5
console.log(myFunctionThree("he", "How many times the value of 'a' repeats here ? " )); //3
console.log(myFunctionThree("how", "How many times the value of 'a' repeats here ? " )); //2
console.log(myFunctionThree("How", "How many times the value of 'a' repeats here ? " )); //2

//Here, as you can see, "toLowerCase" solves the problem when finding the number of times the string repeats inside the other;
//This time you don't need to worry about lower or upper cases, it only searchs for the character no matter it's type;

