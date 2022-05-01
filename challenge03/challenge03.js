//write a function that receives 6 parameters (a,b,c,d,e,f);
//Than sum "a + b";
//After that use the previews amount and subtract "c";
//The subtraction of "c" divides and multiplies by "d" and "e" ;
//To finish it, get the previews result and raise to the power of 2 > " **f ";


function myFunction(a, b, c, d, e, f) {
  const soma = a + b;
  const subtração = soma - c;
  const multiplicaçãoDivisão = (subtração * d) / e;
  const resultado = multiplicaçãoDivisão ** f;
  return resultado;
}

console.log(myFunction(6, 5, 4, 3, 2, 1)); //10.5
console.log(myFunction(7, 2, 3, 4, 5, 1)); //4.8
console.log(myFunction(4, 7, 5, 2, 3, 2)); //16

//In this case i had to use a "const" inside of a function to pass each parameter;
//Each "const" gets the top description values;
//Every new "const" value requirement gets used inside of the next "const" in order to get de correct calculation;
//At the end we return the "const" "RESULTADO",

// ======================================================================================================================================================================================================

function myFunctionTwo(a, b, c, d, e, f) {
  return (((a + b - c) * d) / e) ** f;
}

console.log(myFunctionTwo(6, 5, 4, 3, 2, 1)); //10.5
console.log(myFunctionTwo(7, 2, 3, 4, 5, 1)); //4.8
console.log(myFunctionTwo(4, 7, 5, 2, 3, 2)); //16

//Despite in this case we made "myFunctionTwo" resumed inside of parentheses;
//Doing like this we may shorten our operation to get a bit of more pratical code;
//Negative points : this way to generating results affects directly in scalability of a real project for exemple;
//By the way it's important to know about both methods and when to use each;

