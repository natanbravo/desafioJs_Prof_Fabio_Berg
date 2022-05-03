//STRING MANIPULATION PART II

//Write a function that receives two parameters (fullname, flag);
//If "flag" it's equal to "firtsname", it must only return the "fullname" parameter's first name;
//If "flag" it's equal to "lastname", it must return the full text but not the "fullname" first word's parameter;
//If the "flag" parameter it's empty or even "fullname" had only one word, return only "fullname" content;

function myFunction(fullname, flag = "") {
  const nameParts = fullname.split(" ");
  if(flag.length == 0 || nameParts.length<=1){
      return fullname
  }
  if (flag === "firstName"){
      return nameParts[0];
  }
  return nameParts.slice(1).join(" ");
}

console.log(myFunction("Natan Oliveira Bravo", "firstName")); //Natan
console.log(myFunction("Natan Oliveira Bravo", "lastName")); //Oliveira Bravo
console.log(myFunction("Natan Oliveira Bravo")); //Natan Oliveira Bravo
console.log(myFunction("Natan", "lastName")); //Natan

console.log(myFunction("Elizangela Mendes Oliveira", "firstName")); //Elizangela
console.log(myFunction("Elizangela Mendes Oliveira", "lastName")); //Mendes Oliveira
console.log(myFunction("Elizangela Mendes Oliveira")); //Elizangela Mendes Oliveira
console.log(myFunction("Elizangela", "lastName")); //Elizangela
