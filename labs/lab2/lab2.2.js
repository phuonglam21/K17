const readline = require('readline');

// Tạo giao diện nhập từ bàn phím
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Hỏi người dùng nhập số
rl.question("Nhập một số bất kỳ: ", (input) => {
  const number = parseInt(input);

  if (isNaN(number)) {
    console.log("Không phải số hợp lệ, thử lại đi bạn ơi!");
  } else {
    if (number % 2 === 0) {
      console.log(`${number} là số chẵn (even number)`);
    } else {
      console.log(`${number} là số lẻ (odd number)`);
    }
  }

  rl.close();
});
