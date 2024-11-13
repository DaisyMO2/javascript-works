// Local and global scope
let globalVar = "I'm a global variable";
function testScope() {
let localVar = "I'm a local variable";
console.log(globalVar); // Accessible inside the function
console.log(localVar); // Accessible inside the function
}
testScope();
console.log(globalVar); // Accessible outside the function
// console.log(localVar); // Error: localVar is not defined