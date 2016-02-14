var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8');
    response.pipe(bl(function(error, data) {
        if (error) {
            console.error(error)
        } else {
            console.log(data.length)
            console.log(data.toString());
        }
    }));
});