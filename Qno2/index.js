// Create a Map to store contact information (name, age, email, location1 and implement a function to retrieve
//     contact details by name.
const contacts = new Map();
contacts.set('Alice', { age: 25, email: 'alice@example.com', location: 'New York' });
contacts.set('Bob', { age: 30, email: 'bob@example.com', location: 'Los Angeles' });
contacts.set('Charlie', { age: 28, email: 'charlie@example.com', location: 'Chicago' });

function getContactDetails(name) {
    if (contacts.has(name)) {
        return contacts.get(name);
    } else {
        return `Contact with name ${name} not found.`;
    }
}

console.log(getContactDetails('Alice'));
console.log(getContactDetails('David'));
