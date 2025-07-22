arr = [123, 'hello', true, null, [1, 2, 3]]
console.log(arr);

console.log(arr[3]);

console.log(arr.length);

const movies = ['Sitare Zamane Par', 'Final Destination', 'Superman', 'Metro Inn Dino', 'Salaar']

// Accessing elements in the array
console.log(movies[20]); // Returns undefined if index is out of bounds
console.log(movies.indexOf('Salar')); // Returns -1 if element not found
console.log(movies.at(-3));

// Replace an element in the array

console.log(movies);
movies[2] = 'Batman';
console.log(movies);

// Add an element
// Adds to the end of the array
console.log(movies.length);

console.log(movies.push('Avengers'))

movies.unshift('Inception'); // Adds to the beginning of the array
console.log(movies);

let popped = movies.pop(); // Removes the last element and returns it
console.log(popped);
console.log(movies);
// movies.shift(); // Removes the first element and returns it
console.log(movies.shift()); // Removes the first element and returns it


// let array3 = [1, 2, 3, 4, 5];

// Slicing
console.log(movies);

console.log(movies.slice(1, 2)); // Returns a new array with elements from index 1 to 2 (exclusive)

console.log(movies.slice(2, 200)); // Returns a new array with elements from index 1 to the end

console.log(movies.slice(-5, -2)); // Returns a new array with the last two elements

// Splicing

console.log(movies);
// movies.splice(2, 2); // Removes 2 elements starting from index 2
// console.log(movies);

// movies.splice(2, 2, 'Superman', 'Supergirl')
// console.log(movies);

movies.splice(2, 0, 'Superman', 'Supergirl')
console.log(movies);