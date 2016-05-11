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

## *This* in JavaScript and how it differs from what we know in Java/.NET:
The *This* keyword, works different in JS than Java/.NET. 

When a function is run it gets the *This* variable from the value of the object that invokes the function.


There are two Syntaxes of this. For example: 
###### Global Context
In the global context *This* refers to the global object with or without strict mode.
``` 
console.log(this.document === document); // true

// In web browsers, the window object is also the global object:
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37
```

###### Function Context
If used inside a function, the value of *This* is depending on how the function is called.
Simple call:
```
function f1(){
  return this;
}

f1() === window; // global object
```
Where the code is not in strict mode This is set to the default global object, as it is not pointed towards a local object.

```
function f2(){
  "use strict"; // see strict mode
  return this;
}

f2() === undefined;
```
Here *This* is set to whatever it is pointed towards at the start of the execution. If not set it will be undefined. 

For more information about *This* in JS look [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this).
