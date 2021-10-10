//console.log(process.argv);
let sum = process.argv.slice(2).filter(item => !isNaN(item));

let result  = sum.reduce((a,b) => Number(a)+Number(b), 0);

console.log(`${result}`);

