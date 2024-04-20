const path = require("path");

// console.log(path.sep);

// console.log(process.env.PATH);

// console.log(path.delimiter);


const flePath1 = '/public_html/home/index.html';

const currentPath = __filename;

console.log(currentPath);

let result = path.basename(currentPath);
console.log(result);