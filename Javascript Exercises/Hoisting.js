// A Variable Hoisted.
var name = "Bob";

(function() {
    // Will print undefined due to Hoisting.
    console.log(name);

    var name = "Knud";

    // Will print Knud.
    console.log(name + "\n");
})();

// A Function Hoisted.
isItHoistedPrint();

function isItHoistedPrint() {
    console.log("Yes, this is hoisted.");
}

// THIS in JavaScript.
//Example 1
function add(c, d) {
    return this.a + this.b + c + d;
}

var o = {a:1, b:3};

// The first parameter(o) is the object to use as "this"
// the remaining parameters are used as arguments.
console.log("\nTHIS Example 1:\n" + add.call(o, 5, 7));

//Example 2
var o = {f:function(){ return this.a + this.b; }};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log("\nTHIS Example 2:\n" + p.f());

//Example 3
function f() {
    return this.a;
}

var g = f.bind({a:"azerty"});
console.log("\n" + g());

var o = {a:37, f:f, g:g};
console.log(o.f(), o.g());

// Immediately Invoked Function Expressions
// Example 1
(function() {
    var name = "Knud";

    console.log("\nIIFE: " + name);
})();

// Example 2
var counter = (function() {
    var i = 0;

    return {
        get: function(){
            return i;
        },
        set: function(val){
            i = val;
        },
        increment: function() {
            return ++i;
        }
    };
})();

console.log("\nGet: " + counter.get());
counter.set(3);
console.log("Set then get: " + counter.get());
console.log("Increment: " + counter.increment());
console.log("Increment: " + counter.increment());

// Objects
var person = {name:"Alexander", age:21, hobby:"Programming", email:"cph-an130@cphbusiness.dk"}
console.log("\nInfo about: " + person.name);

for(var property in person) {
    console.log(person[property]);
}

person