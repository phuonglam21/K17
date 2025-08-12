//Allow user to input a number, print out it’s an odd or even number
//Level 1: basic 
// let num = parseInt(prompt("Nhap mot so:"));

// if (num % 2 === 0) {
//     console.log(num + " so chan (even number)");

//     if (num % 5 === 0) {
//         console.log(num + "chia het cho 5");
//     } else {
//         console.log(num + "khong chia het cho 5")
//     }
// } else {
//     console.log(num + "so le (odd number)");
//     if (num % 5 === 0) {
//         console.log(num + "chia het cho 5");
//     } else {
//         console.log(num + "khong chia het cho 5")
//     }
// }
const readLine = require('readline-sync').createInterface({
input: process.stdin,
output: process.stout
});

readline.question("Nhập một số: ", input => {
    let num = parseInt(input);

    // Bước 1: Kiểm tra chẵn/lẻ
    if (num % 2 === 0) {
        console.log(num + " là số chẵn (even number)");
    } else {
        console.log(num + " là số lẻ (odd number)");
    }

    // Bước 2: Kiểm tra chia hết cho 5
    if (num % 5 === 0) {
        console.log(num + " chia hết cho 5");
    } else {
        console.log(num + " không chia hết cho 5");
    }

    readline.close();
});



