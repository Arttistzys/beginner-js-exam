console.log("Hello world !");
//ใช้ map เพื่อสร้างอาร์เรย์ใหม่ที่ตัวเลขแต่ละตัวถูกคูณด้วย 2
function doubleValue(arr) {
  return arr.map((value) => value * 2);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("map*2=", doubleValue(numbers));

// const doubleValue = numbers.map((numbers) => number * 2);
// console.log(doubleValue(numbers));

//ใช้ filter เพื่อดึงตัวเลขที่เป็นเลขคู่ออกมา
function filterEvenNumber(arr) {
  return arr.filter((number) => number % 2 == 0);
}
console.log("fliter=", filterEvenNumber(numbers));
//ใช้ reduce เพื่อหาผลรวมของตัวเลขทั้งหมดในอาร์เรย์
function sumArray(arr) {
  return arr.reduce((total, num) => total + num, 0);
}
console.log("sum=", sumArray(numbers));
//ใช้ find เพื่อค้นหาตัวเลขแรกที่มากกว่า 5
function findNumberMoreFive(arr) {
  return arr.find((number) => number > 5);
}
console.log("number>5=", findNumberMoreFive(numbers));
//ใช้ some เพื่อตรวจสอบว่ามีเลขใดบ้างที่หาร 3 ลงตัว
function someFindToThree(arr) {
  return arr.some((num) => num % 3 == 0);
}
console.log("some%3=", someFindToThree(numbers));
