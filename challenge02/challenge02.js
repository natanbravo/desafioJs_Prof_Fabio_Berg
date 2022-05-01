//Escreva uma função que recebe um parâmetro e retorna o tipo do valor recebido nesse parãmetro;


function myFunction(a) {
  return typeof a;
}

console.log(myFunction("Hello")); //string
console.log(myFunction(123)); //number
console.log(myFunction({})); //object
console.log(myFunction(false)); //boolean
