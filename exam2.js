const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// โจทย์: ให้เขียนฟังก์ชันสองแบบ (แบบ arrow function และแบบ normal function) เพื่อทำงานดังนี้:
// 1. รับพารามิเตอร์เป็นอาร์เรย์ของตัวเลข และคืนค่าอาร์เรย์ใหม่ที่ทุกตัวเลขถูกคูณด้วย 10
function multiplyNumber(arr) {
  return arr.map((num) => num * 10);
}
console.log("numbers*10=", multiplyNumber(numbers));

const multiplyNumber2 = (values) => values.map((num) => num * 10);
console.log("arrow numbers*10=", multiplyNumber2(numbers));
console.log(typeof multiplyNumber2);
// 2. เขียนฟังก์ชันสำหรับคำนวณผลรวมของตัวเลขในอาร์เรย์

function sumNumber(arr) {
  return arr.reduce((total, num) => total + num);
}
console.log("sum=", sumNumber(numbers));

const sumNumber2 = (numbers) => numbers.reduce((total, num) => total + num);
console.log("arrow sum=", sumNumber2(numbers));

const sumNumber3 = (numbers) => {
  return numbers.reduce((total, num) => total + num);
};

console.log("full arrow sum=", sumNumber3(numbers));
