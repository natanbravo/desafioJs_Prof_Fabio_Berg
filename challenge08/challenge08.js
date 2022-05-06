//Write s function that receives an array as a parameter;
//And removes the first 3 array elements;
//If an array have less than 3 elements, return an empty array;

function  myFunction(a){
    if (a.length <= 3){
        return a = [];
    }
    else if(a.length>=3){
        return a.slice(3);
    }

}

console.log(myFunction([1,2,3,4,5])); //[4,5]
console.log(myFunction([5,4,3,2,1,0])); //[2,1,0]
console.log(myFunction([10,20,30])); //[]
console.log(myFunction([99,100])); //[]

//=======================//=======================//=======================//=======================//=======================






//The second way to solve this problem in a simplified way;

function myFunctionTwo(a){
    return a.length > 3 ? a.slice(3) : [];
}


console.log(myFunctionTwo([1,2,3,4,5])); //[4,5]
console.log(myFunctionTwo([5,4,3,2,1,0])); //[2,1,0]
console.log(myFunctionTwo([10,20,30])); //[]
console.log(myFunctionTwo([99,100])); //[]