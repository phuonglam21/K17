const readline = require('readline-sync');

const minIdeaBMI = 18.5;
const maxIdeaBMI = 24.9;

// Nhập dữ liệu từ người dùng
const userHeight = parseFloat(readline.question("Xin hay nhap chieu cao (m): "));
const userWeight = parseFloat(readline.question("Xin hay nhap can nang (kg): "));

// Tính chỉ số BMI
const currentBMI = userWeight / (userHeight * userHeight);

console.log(`\n📏 Min idea BMI: ${minIdeaBMI}, Max idea BMI: ${maxIdeaBMI}, Your BMI is: ${currentBMI.toFixed(2)}\n`);

if (currentBMI < minIdeaBMI) {
  console.log("🟡 Hoi gay!");
  const minHealthyWeight = minIdeaBMI * userHeight * userHeight;
  const diffWeight = (minHealthyWeight - userWeight).toFixed(1);
  console.log(`👉 Ban can tang them ${diffWeight}kg de dat muc khoe manh.`);
} else if (currentBMI <= maxIdeaBMI) {
  console.log("✅ Chi so BMI ly tuong nha!");
} else if (currentBMI <= 29.9) {
  console.log("🟠 Hoi thua can !");
  const maxHealthyWeight = maxIdeaBMI * userHeight * userHeight;
  const diffWeight = (userWeight - maxHealthyWeight).toFixed(1);
  console.log(`⚠️ Ban can giam it nhat ${diffWeight}kg de tro ve muc khoe manh.`);
} else {
  console.log("🔴 Hơi mum mim!");
  const maxHealthyWeight = maxIdeaBMI * userHeight * userHeight;
  const diffWeight = (userWeight - maxHealthyWeight).toFixed(1);
  console.log(`🚨 Ban can giam it nhat ${diffWeight}kg de tro ve muc BMI ly tuong.`);
}
