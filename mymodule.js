const fs = require('fs');
const path = require('path');

module.exports = function(directory, ext, callback) {
    fs.readdir(directory, function(err, files) {
        if(err){
            callback(err);
            return;
        }

        let res = files.filter(file => path.extname(file) === '.' + ext);

        callback(null, res);
    })
}