const canPowerBy2 = (arr) => {
  return arr.map((num) => {
    for (let i = 0; i < 31; i++) {
      if (Math.pow(2, i) === num) {
        return 1;
      }
    }
    return 0;
  });
};

const res = canPowerBy2([2, 34, 16, 69, 64]);
console.log(res); // output : [1, 0, 1, 0, 1]

const res2 = canPowerBy2([9, 4, 7, 7, 128, 4294967296]);
console.log(res2); // output : [0, 1, 0, 0, 1]

// ** ห้ามใช้ ChatGPT แต่สามารถเซิส google ได้
// Step to run : create .js file -> เขียนโค้ดให้เสร็จแล้ว run -> node [filename.js]
