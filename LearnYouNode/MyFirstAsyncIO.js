var fs = require('fs');

fs.readFile(process.argv[2], function (error, fileContents){
    if (error) {
        console.error(error)
    } else {
        var result = fileContents.toString().split('\n').length - 1;
        console.log(result);
    }
});

