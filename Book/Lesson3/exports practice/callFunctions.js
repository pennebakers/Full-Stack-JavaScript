//grabbing the fuctions module to be able to use the functions within
const functions = require("./functions");

//using the addNum function
console.log(functions.addNum(5,5));
console.log(functions.addNum(2,98));

//using the subNum function
console.log(functions.subNum(100,25));
console.log(functions.subNum(25,20));

//using the mulNum function
console.log(functions.mulNum(4,4));
console.log(functions.mulNum(25,20));

//using the divNum function
console.log(functions.divNum(10,2));
console.log(functions.divNum(220, 4));

//using the printMessage function
console.log(functions.printMessage("I'm relearning node.js"));
console.log(functions.printMessage("I'm excited to be relearning node.js"));
