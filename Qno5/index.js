// Create t9o objects person1 and person2 9ith properties name and age. Create a function “introduce” that
// prints "Hello, I'm [name5, and I'm [age5 years old." Use the call method to make person2 introduce itself
// using the introduce function.

const person1 = {
    name: 'Alice',
    age: 30
};

const person2 = {
    name: 'Bob',
    age: 25
};

function introduce() {
    console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);
}

introduce.call(person2);

