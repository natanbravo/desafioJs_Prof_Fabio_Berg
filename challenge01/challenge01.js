
//Escreva uma função que recebe dois valores (a,b) como parâmetros;
//Essa função deve retornar "true" se os dois valores forem iguais e do mesmo tipo;
//Caso contrário, "false";





function myFunction(a, b){
    return a === b;
}

console.log(myFunction(12 , 11)); //false
console.log(myFunction(12 , 12)); //true
console.log(myFunction(12 , '12')); //false
console.log(myFunction('12' , '12')); //true
console.log(myFunction('12' , '11')); //false



