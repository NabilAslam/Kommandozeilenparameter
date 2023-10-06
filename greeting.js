// Demonstration of the process.argv property
// Calling the process module
const process = require("process");

// Printing process.argv property value
const args = process.argv;


let name = args[2]
let alter = Number(args[3])
let stadt = args[4]

// The message
console.log(`Hallo ${name} du bist ${alter} jahre alt und kommst aus ${stadt}`);

//Showing the values and indexes. The first 2 means 0 and 1 are the paths. Everything afterwards are the arguments.
args.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});
