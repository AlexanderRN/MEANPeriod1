var fs = require('fs');
var path = require('path');
var file = process.argv[2];

fs.readdir(file, function (error, list) {
    if (error) {
        console.error(error);
    }
    else {
        list.forEach(function(parameters) {
            var entry = parameters;

            if (path.extname(entry) === "." + process.argv[3]) {
                console.log(entry);
            }
        });
    };
});
