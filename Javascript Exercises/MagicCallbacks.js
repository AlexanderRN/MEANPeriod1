// Exercise 1 FILTER
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

function namesOfLength(value) {
    return value.length <= 3;
}

var filtered = names.filter(namesOfLength);
console.log("\n Exercise 1 FILTERED");
console.log(filtered);

// Exercise 1 MAP

function upperCase(value) {
    return value.toUpperCase();
}

var upperCased = names.map(upperCase);
console.log("\n Exercise 1 MAP");
console.log(upperCased);

// Exercise 2

function myFilter(array, callback) {
    for(var i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

newNames = [];
myFilter(names, function(name) {
    if(name.length <= 3)
    newNames.push(name);
});

console.log("\n Exercise 2 PART 1");
console.log(newNames);

// Exercise 2 part 2

newUpperCaseList = [];

myFilter(names, function(name) {
    var upperName = name.toUpperCase();
    newUpperCaseList.push(upperName);
});

console.log("\n Exercise 2 PART 2");
console.log(newUpperCaseList);

// Exercise 3
Array.prototype.myUpperCase = function(callback) {
    var newArray = [];
    for(var i = 0; i < this.length; i++) {
        newArray.push(this[i].toUpperCase());
    }
    return newArray;
};

var upperCased = names.myUpperCase();
console.log("\nPrototype UCase: " + upperCased);


Array.prototype.sortArrayLength = function(callback) {
    var newArray = [];
    for(var i = 0; i < this.length; i++) {
        if(callback(this[i]))
        newArray.push(this[i]);
    }
    return newArray;
};

var sortedArray = names.sortArrayLength(function(name){
    return name.length <= 3;
});

console.log("Sorted Prototype: " + sortedArray);

// Exercise 4

var a = [1,2,3];
var b = [1,2,3];

function handleNumArrays(a,b,callback) {
    for(var i = 0; i < a.length; i++) {
        callback(a[i], b[i]);
    }
};

var newArray = [];
handleNumArrays(a,b, function(a,b) {
    newArray.push(a+b);
});
console.log("\n Results: " + newArray + "\n");

