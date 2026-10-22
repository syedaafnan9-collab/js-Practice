// var is a function scoped variable, which means it is accessible within the function it 
// is defined in. However, if it is defined outside of any function, it becomes a global
// variable.
// var age = 98;
// var age = 99;
// console.log(age);

// var x = 10;
// var x = 20;
// console.log(x);

// if (true) {
//   let age = 21;
// }
// console.log(age);

// function greet () {
//     return 100;
// }
// console.log(greet());
// let is a blocked scope variable, which means it is only accessible within the block 
// it is defined in.
// let num = 10;
// num = 20;
// console.log(num);


// function greet () {
//     let num = 30;
//     return num;
// }
// console.log(greet());

// const is a blocked scope variable, which means it is only accessible within the block
// it is defined in. However, it cannot be reassigned a new value.
// const num = 10;
// num = 20; // This will throw an error
// const num = 30;
// console.log(num);

// const user = { name: 'Afnan' };
// user.name = 'Sara';
// console.log(user.name);

// function test() {
//   var a = 1;
//   let b = 2;
//   const c = 3;
// }
// test();
// console.log(a, b, c);

// let a = null;
// let b;
// let c = [1, 2, 3];
// let d = function () {};

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);

// console.log("5" + 2);
// console.log("5" - 2);
// console.log(true + 1);
// console.log("10" + 5 + 2);
// console.log(10 + 5 + "2");
// console.log("10" * "2");

// function multiple (a, b) {
//     return a * b;
// }
// console.log(multiple(4, 5));

// function greetuser (name) {
//     return `hello ${name}`;
// }
// console.log(greetuser("Afnan"));

// function square (num) {
//     return num * num;
// }
// console.log(square(5));

// const  multiple = (a, b) => {
//     return a * b;
// }
// console.log(multiple(7,3));

// function test() { 
//     console.log('Hi'); 

// }
//  console.log(test());

//  function add(a, b) {
//   console.log(a + b);
// }

// let result = add(3, 4);
// console.log("Result:", result);

// closure is a function that has access to its own scope, the outer function's scope,
//  and the global scope. It allows a function to remember and access variables from its
//  outer scope even after the outer function has finished executing.
// function greet () {
//     let name = "afnan";

//     return function () {
//         console.log(`hii ${name}`);
//     }
//     name = "sara";
//     console.log(`hii ${name}`);
// }

// console.log(greet()());
// function outer() {
//   let count = 5;

//   return function () {
//     count += 2;
//     console.log(count);
//   };
// }

// const fn = outer();

// fn();
// fn();
// fn();
// fn();
// function add(a, b) {
//   return a + b;
// }

// console.log(add);
// console.log(add(2, 3));
// this keyword refers to the object that is executing the current function.
//  In a regular function, this refers to the object that called the function. 
// In an arrow function, this refers to the surrounding lexical context, 
// which is usually the global object or undefined in strict mode.
// const user = {
//   name: "Afnan",
//   regular: function () {
//     console.log(this.name);
//   },
//   arrow: () => {
//     console.log(this.name);
//   }
// };

// user.regular();
// user.arrow();

// const user = {
//   name: "Afnan",

//   greet() {
//     console.log(this.name);
//   }
// };

// const fn = user.greet;
// fn();
// fn.call(user);
// fn.apply(user);
// fn.bind(user);

// const user = {
//   name: "Afnan"
// };

// const student = Object.create(user);
// student.name = "Sara";

// console.log(student.name);
// console.log(user.name);

// Arrays and array methods are used to store multiple values in a single variable.
//  They provide various methods to manipulate and access the elements within them.
// const numbers = [2, 5, 8, 11, 14];

// const result = numbers.filter(num => num > 8);

// console.log(result);

// const numbers = [2, 5, 8, 11, 14];

// const result = numbers.find(num => num > 8);

// console.log(result);

// const numbers = [2, 4, 6];

// const result = numbers.reduce((total, num) => total + num, 0);

// console.log(result);
// const numbers = [1, 2, 3, 4, 5, 6];

// const result = numbers
//   .filter(num => num % 2 === 0)
//   .map(num => num * 2)
//   .find(num => num > 5);

// console.log(result);

///object destructuring is a feature in JavaScript that allows you to extract values from
//  objects and assign them to variables in a more concise way. It provides a convenient
//  syntax for accessing and working with object properties.
// const user = {
//   name: "Afnan",
//   age: 25,
//   city: "New York"
// };
// const {name , city} = user;

// console.log(name);
// console.log(city);

//rest operator is a feature in JavaScript that allows you to collect multiple values into
//  a single variable. It is denoted by three dots (...) followed by the variable name. 
// The rest operator can be used in function parameters or in array destructuring to gather
// Spread (...) expands elements out of an array or iterable.
// Rest (...) collects multiple values into an array or gathers remaining properties.



// function add(...numbers) {
//   console.log(numbers);
// }

// add(10, 20, 30, 40);

//callbacks are functions that are passed as arguments to other functions and are executed 
// at a later time.
// They allow for asynchronous programming and enable handling of events or operations that
//  may take time to complete.
// function fetchData(callback) {   

// function greet(name) {
//   console.log("Hello " + name);
// }

// function processUser(callback) {
//   const name = "Afnan";
//   callback(name);
// }

// processUser(greet);

//promises are a way to handle asynchronous operations in JavaScript. They represent a value
//  that may not be available yet but will be resolved in the future. Promises have three states:
//  pending, fulfilled, and rejected. They allow you to write cleaner and more manageable code
// for handling asynchronous tasks, such as API requests or file operations.
 
// const promise = new Promise((resolve, reject) => {
//     reject("rejected"); 
//     // resolve("success");
// });

// promise.then(result => {
//     console.log(result);
// })

// promise.then(result => {
//     console.log(result);
// }).catch(error => {
//     console.error(error);
// })

//async/await is a syntax in JavaScript that allows you to write asynchronous code in a more
// synchronous manner. It is built on top of promises and provides a cleaner and more readable
// way to handle asynchronous operations. The async keyword is used to define a function as
// asynchronous, and the await keyword is used to pause the execution of the function until
//  a promise is resolved or rejected.
// function getData() {
//   return new Promise(resolve => {
//     resolve("Data received");
//   });
// }

// async function showData() {
//   const result = await getData();
//   console.log(result);
// }

// showData();

//try catch is a mechanism in JavaScript that allows you to handle errors and exceptions 
// that may occur during the execution of code. It consists of a try block, where you write
//  the code that may throw an error, and a catch block, where you handle the error if it 
// occurs. The catch block allows you to gracefully handle errors and prevent your program 
// from crashing.

// async function getData() {
//   try {
//     const result = await Promise.reject("Something went wrong");
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getData();

// function fetchData () {
//     const promise = new Promise((resolve, reject) => {
//         console.log("fetching data...");
//     })
//     try {
//         promise.then (result => {
//             console.log(result);
//         })
//     }
//     catch (error) {
//         console.error(error);
//     }
// }
// fetchData();
// async function getdata () {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const data = await response.json();
//         console.log(data);
//     }
//     catch (error) {
//         console.log("Error:", error);
//     }
// }
// getdata();

// document.getElementById("parent").addEventListener("click", () => {
//   console.log("Parent");
  
// });

// document.getElementById("child").addEventListener("click", () => {
//   console.log("Child");
//   console.log("hii");
// });

// document.getElementById("child2").addEventListener("click", () => {
//   console.log("Child 2");
//   console.log("hii");
// });

// fetch api is a modern way to make HTTP requests in JavaScript. It provides a simple and
//  flexible interface for fetching resources from a server. The fetch API returns a promise
//  that resolves to the response of the request, allowing you to handle the response data
//  asynchronously. It supports various HTTP methods, headers, and request options, making
//  it a powerful tool for interacting with APIs and retrieving data from remote servers.

// async function getUsers() {
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/users"
//   );

//   const data = await response.json();

//   console.log(data[0].name);
// }

// getUsers();


async function getUsers() {
  try {
    const response = await fetch(
      "https://example.com/users"
    );

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

getUsers();