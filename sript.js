// # JavaScript – Simple & Memorable Notes

// **Remember:** HTML = structure, CSS = style, JS = action

### 1.2 Role of JavaScript in Web Development

// * Handles **user actions** (click, type, submit)
// * Updates content without reloading
// * Connects frontend with backend

### 1.3 Setting Up the Environment

// * **Browser Console** → quick testing    ((right-click → Inspect → Console))
// * **Code Editors** → VS Code, Sublime    (console.log("JS is working");)

### 1.4 JavaScript Syntax and Structure

// * Case-sensitive
// * Statements end with `;`
// * Code runs top to bottom


## 2. Basics of JavaScript

// ### 2.1 Variables and Constants

// * Used to store data
// * `var` → old
// * `let` → changeable
// * `const` → fixed

// ### 2.2 Data Types

// * String → text
// * Number → numbers
// * Boolean → true/false
// * Undefined → no value assigned
// * Null → empty value
// * Object → collection of data

// ### 2.3 Operators

// * Arithmetic → `+ - * / %`
// * Assignment → `=`
// * Comparison → `== === > <`
// * Logical → `&& || !`

// ### 2.4 Conditional Statements

// * Used for **decision making**
// * `if`, `else if`, `else`, `switch`

// ### 2.5 Loops

// * Used to **repeat code**
// * `for`, `while`, `do-while`
// * `for...in` → objects
// * `for...of` → arrays

// ---

## 3. Functions in JavaScript

// ### 3.1 Defining and Calling Functions

// * Function = reusable block of code

// ### 3.2 Parameters and Return

// * Parameters → inputs
// * Return → output

// ### 3.3 Arrow Functions

// * Short syntax for functions

// ### 3.4 Callback Functions

// * Function passed as argument
// * Used in events & async code

// ### 3.5 IIFE

// * Function that runs immediately
// * Avoids global scope pollution


## 4. JavaScript Objects

// ### 4.1 Introduction to Objects
// * Store data in key : value pairs   (let student = {name:"Ram", age:20};)

// ### 4.2 Properties and Methods   (student.age;)
// * Property → value
// * Method → function inside object

// ### 4.3 Object Destructuring          (let {name, age} = student;)
// * Extract values easily from objects

// ### 4.4 Object-Oriented Programming  (class Car{constructor(name){this.name=name;}}

// #### 4.4.1 Classes and Constructors
// * Blueprint for creating objects

// #### 4.4.2 Prototypes and Inheritance  (class EV extends Car{})
// * Objects share properties
// * Child can access parent features

## 5. Arrays and Array Methods

// ### 5.1 Creating and Accessing Arrays  (let nums = [1,2,3];)
// * Used to store multiple values

// ### 5.2 Common Methods
// * `push` → add end
// * `pop` → remove end
// * `shift` → remove start
// * `unshift` → add start

// ### 5.3 Advanced Methods    (nums.map(n => n*2);)
// * `map` → transform
// * `filter` → select
// * `reduce` → calculate
// * `forEach` → loop

// ### 5.4 Multidimensional Arrays  (let matrix = [[1,2],[3,4]];)
// * Array inside another array


## 6. DOM Manipulation

// ### 6.1 What is the DOM?
// * JS representation of HTML

// ### 6.2 Selecting Elements   (document.getElementById("id");0r queryselector)
// * `getElementById`
// * `querySelector`

// ### 6.3 Changing Content and Styles   (element.innerText = "Hi";)
// * Change text, HTML, CSS using JS

// ### 6.4 Adding and Removing Elements   (()parent.appendChild(child);)
// * `appendChild`, `removeChild`

// ### 6.5 Event Handling                 (btn.addEventListener("click", fn);)
// * `addEventListener`
// * Inline events (not recommended)


## 7. JavaScript Events

// ### 7.1 Mouse Events
// * click, dblclick, mouseover

// ### 7.2 Keyboard Events
// * keydown, keyup

// ### 7.3 Form Events
// * submit, change, input

// ### 7.4 Event Bubbling and Capturing  (Event moves from Child → Parent → Body → Document ⬆️ Bottom to Top)//Event moves from Parent → Child⬇️ Top to Bottom
// * Event moves from child → parent
// To avoid writing many listeners   👉 The EVENT goes from child to parent (Not data, not value — only the event)

## 8. JavaScript Error Handling

// ### 8.1 Understanding Errors
// * Runtime mistakes in code

// ### 8.2 try, catch, finally     (try → code to test , catch → runs if error , finally → always runs)
// * Handle errors safely

// ### 8.3 Custom Errors
// * Create your own error messages


## 9. Advanced JavaScript Concepts

// ### 9.1 Closures and Scope            (Function remembers variables outside it.)
// * Inner function remembers outer data

// ### 9.2 Asynchronous JavaScript
// * Runs tasks without blocking

// #### Callbacks
// * Old async method

// #### Promises
// * Better async handling

// #### async / await
// * Clean and readable async code

// ### 9.3 ES6+ Features
// * Template literals → `${}`        (let name = "Ram";console.log(`Hello ${name}`);)
// * Destructuring                    (let user = {age:20};let {age} = user;)
// * Default parameters               (function greet(name="User"){ }) 
// * Spread & Rest operators


## 10. JavaScript APIs

// ### 10.1 Browser APIs
// * Features provided by browser

// ### 10.2 fetch API
// * Used to get data from server

// ### 10.3 Local & Session Storage
// * Store data in browser

// ### 10.4 Geolocation API
// * Get user location

// ### 10.5 JSON
// * Data format for APIs


## 11. Debugging and Best Practices

// ### 11.1 Debugging in Browser
// * Find and fix errors

// ### 11.2 console.log & Breakpoints
// * Check values step by step

// ### 11.3 Clean Code
// * Readable, reusable, modular

// ### 11.4 Avoid Common Mistakes
// * Avoid global variables

// ---

## 12. Frameworks and Libraries

// ### 12.1 What are They?
// * Pre-written JS code

// ### 12.2 jQuery
// * Simplifies JS (older)

// ### 12.3 Modern Frameworks
// * React, Angular, Vue


## 13. Project

// ### 13.1 Interactive Web Page
// * User can interact

// ### 13.2 Dynamic Content
// * Content changes using JS


// ### 13.3 Using APIs
// * Fetch real data

// ### 13.4 Events & DOM
// * Handle actions and update UI



// ## How to Remember Easily 🧠

// * Think **HTML (body)** → **CSS (dress)** → **JS (brain)**
// * Practice small examples daily
// * Revise with real-life actions (click, type, submit)

// ✔ Simple
// ✔ Exam Ready
// ✔ Interview Friendly
