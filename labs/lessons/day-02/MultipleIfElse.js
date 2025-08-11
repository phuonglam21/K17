/**
 * <18: khong ban!
 * 18-55: Unlimited!
 * 56 -> 2 chai!
 * 
 */
const readline = require("readline-sync")
let cliendAge = Number(readline.question("Your age: "));

// if (cliendAge < 18) {
//     console.log("khong ban!");
// } else if (cliendAge <= 55) {
//     console.log("Unlimited!");
// } else {
//     console.log("2 chai!");
// }


if (cliendAge < 18) {
    console.log("khong ban!");
}
if (cliendAge <= 55) {
    console.log("Unlimited!");
}
if (cliendAge > 55) {
    console.log("2 chai!");
}
/**
 * true && false && true -> false
 * true && false -> false
 * false && false -> false
 * 
 * true || false || false -> true 
 * true || false && false -> true 
 * true || true -> true
 * false || false -> false
 * true || true -> true 
 */
