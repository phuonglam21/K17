const readline = require ("readline-sync");

let arrivalTime = readline.question("Arrival Time:");
// Convert string into number
let arrivalTimeNum = Number(arrivalTime);
let isHeOnTime = (arrivalTimeNum) === 7; // "7"  ==="7" 

if (isHeOnTime) {
    console.log("let's talk");
} else {
    console.log("write a letter");
}


//Toán tử 3 ngôi ternary operator 
let msg = isHeOnTime?  "let's talk" : "write a letter";
console.log(msg);











//! true -> false 
if (!isHeOnTime) {
    console.log("let's talk");
} else {
    console.log("write a letter");
}