var fs = require('fs');
var path = require('path');

module.exports = function (dir, filterStr, callback) {

    fs.readdir(dir, function (error, list) {
        if (error) {
            return callback(error);
        }
        else {
            var newList = [];
            list.forEach(function (parameters) {
                var entry = parameters;

                if (path.extname(entry) === "." + filterStr) {
                    newList.push(entry);
                }

            });
            return callback(null, newList);
        };
    });
};
