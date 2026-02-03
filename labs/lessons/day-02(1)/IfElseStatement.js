// Global block scope
let isHeOnTime = true
let myName = "Tun";
if (isHeOnTime) {
    //Block scope 1
    console.log("let's talk");
    myName = "teo";
} else {
    //Block scope 2
    console.log("write a letter");
    myName = "ti";
}

console.log(myName);