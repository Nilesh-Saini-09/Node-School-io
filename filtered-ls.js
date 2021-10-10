// using the file system module 
const fs = require('fs');

// using path module to extract the file extension
const path = require('path');

// we use the callback function to catch err or data
fs.readdir(process.argv[2], function(err, files) {
    if(err) return;

    // map through the files and extract their extension using the path module -- .extname()
    // check if it's same as the extension given
    // log those files
    files.map(file => {
        const ext = path.extname(file);
        ext === ('.' + process.argv[3]) && console.log(file)
    })
})