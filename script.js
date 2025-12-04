
//INTRO FOR JAVASCRIPT AND PURPOSE OF USE

// 1. form validation
// 2.annimaTIONS
// 3.POPUPS
// 4.API request
// 5.CHANGINGING CONTENT DYNAMICALLY
// 6.bukding full application(React,angular,vue)


//-----------------------------------------------------------------------------------------------------------------------------------------


// VARIABLE DECLARATION IN JAVASCRIPT
// let  ---- ITS BLOCK SCOPED    -----------USE WHEN VALUE WANT TO CHANGE(REASSIGN(UPDATE)/CANT BE REDECLARE)
// const-----ITS BLOCK SCOPED  -----------USE FOR FIXED VALUE (NOT REASSIGN/CANT BE REDECLARE)
// var -------ITS FUNCTION /GLOBAL SCOPED  -----------NOT PREFERRED VAR BUT IT ACCECPT ALL THE THINGS(CAN BE REASSIGN/ CAN BE REDECLARE)

// VARIABLE STORE INFORMATION TO USE LATER
// VARIABLE NAME RULES
// 1. CAN CONTAIN LETTERS,NUMBERS,UNDERSCORE(_),DOLLAR SIGN($)
// 2. MUST BEGIN WITH A LETTER,UNDERSCORE(_),DOLLAR SIGN($)
// 3. CASE SENSITIVE
// 4. CANNOT BE A RESERVED KEYWORD (LIKE LET,VAR,CONST,IF,FOR,WHILE,FUNCTION,RETURN ETC)
                  
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
