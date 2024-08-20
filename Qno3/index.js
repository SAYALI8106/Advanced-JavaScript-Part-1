// You are given an array of numbers named myArray. Create a function that takes any number of arguments
// and adds them to the existing array. Use the spread and rest operator.

let myArray = [1, 2, 3];

function addToArray(...newElements) {
   
    myArray = [...myArray, ...newElements];
}


addToArray(4, 5, 6);
console.log(myArray);

addToArray(7, 8);
console.log(myArray); 