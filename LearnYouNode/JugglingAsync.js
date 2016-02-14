var http = require('http');
var bl = require('bl');

var results = [];
var count = 0;

function printResults () {
    for (var i = 0; i < 3; i++)
        console.log(results[i])
}

function getData(index) {
    http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (error, data) {
            if (error) {
                return console.error(error);
            } else {

                results[index] = data.toString();
                count++;

                if (count == 3)
                    printResults()
            }
        }));
    });
}

for (var i = 0; i < 3; i++) {
    getData(i)
}