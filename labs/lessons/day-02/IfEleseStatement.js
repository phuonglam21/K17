const readLine = require("readline-sync");

let arrivalTimeStr = readLine.question("Arrival Time"); //"7"
//Convert a string to number 

let arrivalTime = Number(arrivalTimeStr);
let isHeOnTime = (arrivalTime === 7); //Boolean

//== toan tu so sanh
//=== so sanh chat che hon trc khi so sanh kieu du lieu (string va number)
//= phe gan

// Global block scope
let myName = "Tun";

if (isHeOnTime) {
    //Block scope 1
    console.log(`Let's talk`);
} else {
    //Block scope 2
    console.log(`write a letter`);
}




// Termary operator: Toan tu 3 ngoi 
let msg = isHeOnTime ? 'let\'s talk' : 'write a letter ';
console.log(msg);



//!true  -> false
if (!isHeOnTime) {
    //Block scope 1
    console.log(`Let's talk`);
} else {
    //Block scope 2
    console.log(`write a letter`);
}


//Mimic real situation in real life
if (isSalaryIncreased) {
    //nested if...else condition
    //stay at company
    if (isSightlyDiff) {
        //stay for a while
    } else {
        //stay longer
    }
} else {
    //leave
}