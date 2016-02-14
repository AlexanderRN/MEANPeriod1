var mymodule = require('./Modular1.js');

var dir = process.argv[2];
var filterStr = process.argv[3];

mymodule(dir, filterStr, function(error, list) {
    if(error) {
        console.error(error);
    } else {
        list.forEach(function (parameters) {
            var entry = parameters;
            console.log(entry);
        });
    }
});