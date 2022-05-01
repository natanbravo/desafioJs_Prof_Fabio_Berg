// STRING MANIPULATION

//Write a function that receives two parameters (text, flag);
//If  "flag" it's  equal to "start", it must return the first 3 characters of "text" parameter;
//If "flag" it's equal to "end", it must return the last 3 "text" parameters;
//If "text" parameter have less than 3 characters, return only "text";

function myFunction(text, flag = "start") {
  if(text.length<=3){
      return text;
  }
  if(flag === "start"){
      return text.slice(0, 3)
  }
  return text.slice(-3)
}

console.log(myFunction("abcdfg", "start")); //abc
console.log(myFunction("abcdfg", "end")); //dfg
console.log(myFunction("ab", "start")); //ab
console.log(myFunction("abcdfg")); //abc

console.log(myFunction("Natan", "start")); //Nat
console.log(myFunction("Elizangela", "start")); //Eli
console.log(myFunction("Natan", "end")); //Nat
console.log(myFunction("Elizangela", "end")); //Eli

