
//INTRO FOR JAVASCRIPT AND PURPOSE OF USE

// 1. form validation
// 2.annimaTIONS
// 3.POPUPS
// 4.API request
// 5.CHANGINGING CONTENT DYNAMICALLY
// 6.bukding full application(React,angular,vue)

//-----------------------------------------------------------------------------------------------------------------------------------------

// VARIABLE DECLARATION IN JAVASCRIPT
// let  ---- ITS BLOCK SCOPED    -----------USE WHEN VALUE WANT TO CHANGE     (REASSIGN(UPDATE)/CANT BE REDECLARE)
// const-----ITS BLOCK SCOPED  -----------USE FOR FIXED VALUE                 (NOT REASSIGN/CANT BE REDECLARE)
// var -------ITS FUNCTION /GLOBAL SCOPED  -----------NOT PREFERRED VAR BUT IT ACCECPT ALL THE THINGS          (CAN BE REASSIGN/ REDECLARE)

// VARIABLE STORE INFORMATION TO USE LATER
// VARIABLE NAME RULES
// 1. CAN CONTAIN LETTERS,NUMBERS,UNDERSCORE(_),DOLLAR SIGN($)
// 2. MUST BEGIN WITH A LETTER,UNDERSCORE(_),DOLLAR SIGN($)
// 3. CASE SENSITIVE
// 4. CANNOT BE A RESERVED KEYWORD (LIKE: LET,VAR,CONST,IF,FOR,WHILE,FUNCTION,RETURN ETC)
                  
                    // EXAMPLE OF VARIABLE DECLARATION
                       let firstName = "John"; // string value
                       const pi = 3.14; // number value
                       var isAvailable = true; // boolean value


// variable and Constant 
// var=name the referrence that point to  values stored in memory 
// js variable stored  not the value themselves
// primitive value like string number boolean null undefined begind store the actuall value
// non premitive object ,array function stored the reference to the location in memory where the value is stored
//  var can be redeclared is allowed and reassign var will ignore the block scope
// let can be reassigned but not redeclared
// const cannot be redeclared or reassigned
// let is propersties morden varoiable declaration let is an block scoped can be reassignbut not declared in same scope recommented most variables
// global scope=not inside the block 
//  local scope ={}inside the block 
//  cont constant varable it is block scoped cant be reassiend must be initialized when declared good for  value never change 
//  collection of information is called data 2 type primitive  and non primitive
//  seven primitive -7 non primitive=1

//-----------------------------------------------------------------------------------------------------------------------------------------

//OPERATORS IN JAVASCRIPT
// 1.ARITHMETIC OPERATORS (+,-,*,/,%,**)
// 2.ASSIGNMENT OPERATORS(=,+=,-=,*=,/=,%=)
// 3.COMPARISON OPERATORS(==,===,!=,!==,>,<,>=,<=)
// 4.LOGICAL OPERATORS(&&,||,!)
// 5.UNARY OPERATORS(typeof,++,--)
// 6.TERNARY OPERATOR(condition ? value1 : value2)
//-------------------------------//PURPOSE OF OPERATORS  (TO CALCULATE,COMPARE,MAKE DECISION)
//EXAMPLE OF OPERATORS
let sum = a + b; // arithmetic operator
let isEqual = (a == b); // comparison operator
let isAdult = (age >= 18) ? true : false; // ternary operator
let isValid = (isAdult && hasID); // logical operator
let typeOfAge = typeof age; // unary operator
a += 5; // assignment operator


//-----------------------------------------------------------------------------------------------------------------------------------------

//CONDITIONAL STATEMENTS IN JAVASCRIPT
// 1.IF STATEMENT
// 2.ELSE IF STATEMENT
// 3.ELSE STATEMENT
// 4.SWITCH STATEMENT
//-------------------------------//PURPOSE OF CONDITIONAL STATEMENTS (TO MAKE DECISIONS BASED ON CERTAIN CONDITIONS)    

//EXAMPLE OF CONDITIONAL STATEMENTS
// let age = 20;
// if (age < 18) {---------------------------------1
//     console.log("Minor");

// } else if (age >= 18 && age < 65) {----------------------------2
//     console.log("Adult");

// } else {--------------------------------------------3
//     console.log("Senior");
// }

// switch (day) {---------------------------------4
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     default:
//         console.log("Other day");
// }

//-----------------------------------------------------------------------------------------------------------------------------------------

//LOOPS IN JAVASCRIPT
// 1.FOR LOOP
// 2.WHILE LOOP
// 3.DO-WHILE LOOP
//-------------------------------//PURPOSE OF LOOPS (TO REPEAT A BLOCK OF CODE MULTIPLE TIMES)

//EXAMPLE OF LOOPS
// for (let i = 0; i < 5; i++) {--------------------------1 USE WHEN YOU KNOW HOW MANY TIME TO REPEAT
//     console.log(i);
// }

// let j = 0;------------------------------------------2 USE WHEN YOU DONT KNOW HOW MANY TIME TO REPEAT (DEPENDS ON CONDITION)
// while (j < 5) {
//     console.log(j);
//     j++;
// } 

// let k = 0;------------------------------------------3 USE WHEN YOU WANT TO EXECUTE AT LEAST ONCE
// do {
//     console.log(k);
//     k++;
// } while (k < 5);


//-----------------------------------------------------------------------------------------------------------------------------------------

//FUNCTIONS IN JAVASCRIPT  ((RESUABLE BLOCK OF CODE)U WRITE THEM ONCE AND USE THEM MANY TIMES)

// 1.FUNCTION DECLARATION------------STARTS WITH    (FUNCTION NAME(){})HOISTING ALLOWED (LIKE USE BEFORE DECLARATION)

// 2.FUNCTION EXPRESSION------------STARTS WITH CONST/LET/VAR [VARIABLE NAME=FUNCTION]= (CONST X=FUNCTION(){}) HOISTING NOT ALLOWED (LIKE USE AFTER DECLARATION)

// 3.ARROW FUNCTION
//-------------------------------//PURPOSE OF FUNCTIONS ((TO ORGANIZE CODE INTO REUSABLE BLOCKS)AND TO AVOID REPETITION)

//EXAMPLE OF FUNCTIONS
// // Function Declaration
// function greet(name) {--------------------------1
//     return "Hello, " + name;
// }    
// console.log(greet("Alice"));

// // Function Expression   
// const add = function(a, b) {--------------------------2
//     return a + b;
// };
// console.log(add(5, 3));
// // Arrow Function
// const multiply = (a, b) => {--------------------------3
//     return a * b;
// };
// console.log(multiply(4, 2));

//-----------------------------------------------------------------------------------------------------------------------------------------

//HOISTING IN JAVASCRIPT
// JS MOVES VARIABLES AND FUNCTIONS DECLARATIONS TO THE TOP OF THEIR SCOPE BEFORE CODE EXECUTION
// 1.VARIABLE HOISTING
//    -VAR VARIABLES ARE HOISTED AND INITIALIZED WITH (UNDEFINED)
//    -LET AND CONST VARIABLES ARE HOISTED BUT NOT INITIALIZED (CASES TEMPORAL DEAD ZONE ERROR IF ACCESSED BEFORE DECLARATION)
// 2.FUNCTION HOISTING
//    -FUNCTION DECLARATIONS ARE HOISTED WITH THEIR DEFINITION (CAN BE CALLED BEFORE DECLARATION)
//    -FUNCTION EXPRESSIONS AND ARROW FUNCTIONS ARE NOT HOISTED (CANNOT BE CALLED BEFORE DECLARATION)

//SCOPE
//AREA WHERE A VARIABLE IS ACCESSIBLE
//GLOBAL SCOPE --------ACCESSIBLE EVERYWHERE IN THE CODE (LIKE LOG IS THE CONTENT) IN 
//LOCAL SCOPE---------ONLY INSIDE THE [FUNCTION {VAR,LET,CONST}](LOG WORK INSIDE THE BRASES)
//BLOCK SCOPE --------WORKS ONLY FOR [LET ,CONST] INSIDE THE {} (LOG WORK OUTSIDE THE BRASES)

//LET---WE CAN USE GLOBAL,FUNCTION,BLOCK
//CONST---WE CAN USE GLOBAL,FUNCTION,BLOCK
//VAR---WE CAN USE GLOBAL, FUNCTION, NOT IN BLOCK SCOPE 

//-------------------------------------------------------------------------------------------------------------------------------------------

//DOM  Manipulation
//DOM is document object model represents the web page as a tree structure where each element become a node
//"The Document Object Model (DOM) is a platform and language-neutral interface that allows programs and
//  scripts to dynamically access and update the content, structure, and style of a document

//--------------------------------------------------------------------------------------------------------------------------------------------

//js methods (string,array,objects,math,number,date,function,json,browser/dom,console,important global,mordern js(react-ready))

// 🔥 MOST IMPORTANT (must know)
// String → trim, split, includes
// Array → map, filter, reduce, forEach
// Object → keys, values, entries
// Math → random, floor
// JSON → stringify, parse

//-----------STRING------------
// Method	         What it does
// length	   --    Length of string
// toUpperCase()     Capital letters
// toLowerCase()--   Small letters
// trim()            Remove spaces
// includes() --     Check text
// slice()	         Cut string
// replace()	--    Replace text
// split()	         Convert to array

//-----------ARRAY----------------
// loop/process array                         |    🔹 Modify arrays
// Method      	Use                         |        // Method	     Use
//                                            |
// forEach()	   Loop                        |       // push()	    Add end
// map()	         Change each item            |      // pop()	       Remove end
// filter()	      Remove items                |      // shift()	    Remove start
// reduce()	      Total / sum                 |       // unshift()	 Add start
// find()	      Find one item               |        //  splice()	 Add/remove anywhere
// includes()	   Exists or no                |        // slice()	    Copy part

//-----------OBJECT-----------------
// Method	         Use
// Object.keys()	   All keys
// Object.values()	All values
// Object.entries()	Key + value
// hasOwnProperty()	Check property

// ---------MATH METHOD-------------
// Method	          Use
// Math.random()	Random number
// Math.floor()	Round down
// Math.ceil()    Round up
// Math.round()	Normal round
// Math.max()	   Biggest
// Math.min()	   Smallest

//----------NUMBER-----------------
// Method	     Use
// Number()	      Convert to number
// parseInt()	   Integer
// parseFloat()	Decimal
// toFixed()	   Decimal points

//-----------DATE-----------------
// Method	       Use
// new Date()	    Current date
// getFullYear()	 Year
// getMonth()	    Month
// getDate()	    Day
// getTime()	   Timestamp

// ---------FUNCTION-------------
// Method	Use
// call()	Call with context
// apply()	Call with array
// bind()	Fix this

//---------JSON (java script object notation)--------
// Method	           Use                  its an text format used to store and send dataworks with API server-browser(frontend & backend)
// JSON.stringify()	  Object → JSON
// JSON.parse()	     JSON → Object

//--------browser/Dom------------
// Method	               Use
// getElementById()	    Select element
// querySelector()	     CSS select
// addEventListener()	  Events
// innerHTML	           Change content
// value	Input            value

//---------console------------
// Method	        Use
// console.log()	   Print
// console.error()	Error
// console.warn()	   Warning
// console.table()	Table

//--------Important global------
// Method	         Use
// setTimeout()	   Delay
// setInterval()  	Repeat
// clearInterval()	Stop
// isNaN()	         Not number

//-------MODERN JS----------
// Feature	         Example
// Arrow functions	() => {}
// Destructuring  	{name} = props
// Spread	         {...obj}
// Rest	            (...args)









































