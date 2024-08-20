// Create a Map in JavaScript and perform the follo9ing operations8
//  Add key-value pairs to the Map0
//  Check if a specific key exists0
//  Retrieve the value associated with a given key
//  Iterate through all key-value pairs.


const myMap = new Map();

myMap.set('name', 'Alice');
myMap.set('age', 30);
myMap.set('city', 'New York');
myMap.set('occupation', 'Engineer');


console.log(myMap.has('name'));  
console.log(myMap.has('country')); 


console.log(myMap.get('name'));  
console.log(myMap.get('age'));   


myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
