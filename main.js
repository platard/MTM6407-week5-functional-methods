// Functional Methods
// forEach()
// Array of strings
const words = ["apple", "banana", "orange", "kiwi", "grape"];
// Print the length of each string
// for (let i = 0; i < words.length; i++) {
//   const word = words[i];
//   console.log(`The length of "${word}" is ${word.length}`);
// }

// Print the length of each string using forEach() using an arrow functions
words.forEach(word => {console.log(`The length of "${word}" is ${word.length}`)})


// Maps()
// Array of temperatures in Celsius
const celsiusTemperatures = [20, 25, 30, 35, 40];

const fahrenheitTemperatures = celsiusTemperatures.map(celsius => (celsius * 9/5) + 32);
console.log(fahrenheitTemperatures);


// Filter()

// Array of products
const products = [
  { name: "T-shirt", price: 25 },
  { name: "Jeans", price: 80 },
  { name: "Sneakers", price: 60 },
  { name: "Hat", price: 15 },
  { name: "Backpack", price: 50 },
]

const affordableProducts = products.filter(product => product.price <= 50)
console.log(affordableProducts);


// Find()

// Array of names
const names = ["Alice", "Bob", "Charlie", "David", "Eva"];

const result = names.find(name => name.startsWith("b"))
console.log(result);


// Reduce()

// Array of cart items
const cart = [
  { item: "T-shirt", price: 25 },
  { item: "Jeans", price: 80 },
  { item: "Sneakers", price: 60 },
  { item: "Hat", price: 15 },
  { item: "Backpack", price: 50 },
];

const totalPrice = cart.reduce( (accumulator, currentItem) => accumulator + currentItem.price, 0)
console.log(totalPrice);






//Sort()
// Array of students
const students = [
  { firstName: 'Susie', lastName: 'Hansen', grade: 76 },
  { firstName: "Irma", lastName: "Norton", grade: 15 },
  { firstName: "Baker", lastName: "Browning", grade: 69 },
  { firstName: "Nolan", lastName: "Mclean", grade: 84 },
  { firstName: "Hester", lastName: "Frye", grade: 95 }
]

students.sort((a, b) => a.lastName > b.lastName ? 1 : a.lastName < b.lastName ? -1 : 0) 
console.log(students)