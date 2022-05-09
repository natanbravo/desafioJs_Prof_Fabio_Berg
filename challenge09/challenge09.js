function myFunction(a, b) {
  return a.filter((item) => item !== b);
}
console.log(myFunction([1, 2, 3, 4], 4)); //[1,2,3]
console.log(myFunction([1, 2, 8, 4, 8], 8)); //[1,2,4]
console.log(myFunction([5, 2, 3, 4, 5], 5)); //[2,3,4]
console.log(myFunction(["3", 1, "3", 2], "3")); //[1,2]
console.log(myFunction(["1", 1, false, 2, 3], false)); //[ '1', 1, 2, 3 ]
console.log(myFunction(["1", 1, true, 2, 3], true)); //[ '1', 1, 2, 3 ]

//==================//==================//==================//==================//==================//==================

function myFunctionTwo(a, b) {
  const filtered = [];
  for (const item of a) {
    if (item !== b) {
      filtered.push(item);
    }
  }
  return filtered;
}

console.log(myFunctionTwo([1, 2, 3, 4], 4)); //[1,2,3]
console.log(myFunctionTwo([1, 2, 8, 4, 8], 8)); //[1,2,4]
console.log(myFunctionTwo([5, 2, 3, 4, 5], 5)); //[2,3,4]
console.log(myFunctionTwo(["3", 1, "3", 2], "3")); //[1,2]
console.log(myFunctionTwo(["1", 1, false, 2, 3], false)); //[ '1', 1, 2, 3 ]
console.log(myFunctionTwo(["1", 1, true, 2, 3], true)); //[ '1', 1, 2, 3 ]
