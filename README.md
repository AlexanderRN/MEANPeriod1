# MEANPeriod1
## Explain the use of ”use strict”:

This defines that the JS code should be executed in strict mode. 
Strict mode is a JavaScript 1.85 (ECMAScript V5) directive.
What strict mode does is it excludes undeclared variables. What this means is that you are unable to use undeclared variables.

For example: 

//====== Code Start======//
```
”use strict”;
x = 21;
// This will cause an error due to X not being defined.
```
//====== Code End ======//


You can also decide only to ”use strict” inside a function as goes:
//====== Code Start======//
```
x = 18; // This will not cause an error.
myFunction();

function myFunction() {
”use strict”
                y = 3.14; // this will cause an error.
} 
```
//====== Code End ======//


## Variable/Function Hoisting:
In JavaScript there is hoisting. What this means is that ALL variables is found at the start of interpretation and is ”hoisted” in the beginning of the script/function.

For example: 
//====== Code Start======//
```
console.log(fdev); // prints undefined

var fdev = "Hej";
```
//====== Code End======//

This will mean that fdev is declared, but it is undefined. The variable declaration is ”hoisted” in the beginning but the initialization is later in the program.

The same goes for functions. The interpreter will allow the function to be called before it is “declared” because of hoisting.

//====== Code Start======//
```
isItHoistedPrint();

function isItHoistedPrint() {
    console.log("Yes, this is hoisted."); // will print this
}
```
//====== Code End======//



