// require the file-system module from core node
const fs = require('fs');

// for sync ops on file use readFileSync 
// it will return an object and to turn the object 
// in a string we use toString method.
let buf = fs.readFileSync(process.argv[2]);

// to count new lines we use the split method with
// '\n' and find the length of the array returned 
// we subtract 1 from the length because -- 

// Note that the test
//  file does not have a newline character ('\n') at the end of the last line,
//  so using this method you'll end up with an array that has one more element
//  than the number of newlines.

let result = buf.toString().split('\n').length - 1;

console.log(result);
