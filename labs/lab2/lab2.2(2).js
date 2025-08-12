const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Nhập một số: ", (input) => {
  let num = parseInt(input);

  // Kiểm tra chẵn/lẻ
  let chanLe = (num % 2 === 0) ? "chẵn" : "lẻ";

  // Kiểm tra chia hết cho 5
  let chia5 = (num % 5 === 0) ? "chia hết cho 5" : "không chia hết cho 5";

  // In kết quả
  console.log(`${num} là số ${chanLe} và ${chia5}`);

  rl.close();
});
