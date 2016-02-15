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
var myPerson = {name:"Alexander", age:21, hobby:"Programming", email:"cph-an130@cphbusiness.dk"}
console.log("\nInfo about: " + myPerson.name);

for(var property in myPerson) {
    console.log(property + ": " + myPerson[property]);
}

delete myPerson.email;

console.log("\nInfo about: " + myPerson.name + ", without email.");
for(var property in myPerson) {
    console.log(property + ": " + myPerson[property]);
}

console.log("\n" + "Hobby? " + myPerson.hasOwnProperty("hobby"));
console.log("\n" + "Email? " + myPerson.hasOwnProperty("email"));

function person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getPerson = function () {
        return firstName + " " + lastName + ", " + age;
    };
}

var testPerson = new person("Alexander", "Nielsen", 21);
console.log("\n" + testPerson.getPerson());

// Part 3 //

var personX = {firstName:"Bo", lastName:"Knudsen", age:21};

function listAllProperties(o) {
    var objectToInspect;
    var result = [];

    for (objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)){
        result = result.concat(Object.getOwnPropertyNames(objectToInspect));
    }

    return result;
}

console.log("\n" + listAllProperties(personX));
delete personX.age;
console.log("\n" + listAllProperties(personX));

// Reusable Modules with Closures.
var makeCounter = function () {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function() {changeBy(1);},
        decrement: function() {changeBy(-1);},
        value: function() {return privateCounter;},
    }
};

var counter1 = makeCounter();
console.log("\n" + counter1.value());
counter1.increment();
counter1.increment();
console.log(counter1.value());

var makePerson = function(fname, lname, personAge){
    var firstName = fname;
    var lastName = lname;
    var age = personAge;
    function changeFName(fname){
        firstName = fname;
    }
    function changeLName(lname){
        lastName = lname;
    }
    function changeAge(newAge){
        age = newAge;
    }
    function getPerson() {
        return firstName + " " + lastName + ", " + age;
    }
    return {
        changeFirstName: function(newName) {changeFName(newName)},
        changeLastName: function(newLastName) {changeLName(newLastName)},
        changeAge: function(newAge) {changeAge(newAge)},
        getInfo: function() { return getPerson();}

    }
};

var person1 = makePerson("Alex", "Nielsen", 21);
console.log(person1.getInfo());
person1.changeFirstName("Bo");
person1.changeLastName("Bullersen");
person1.changeAge(26);
console.log(person1.getInfo());

console.log();