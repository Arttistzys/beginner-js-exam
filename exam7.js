const dictionary = {};

const bigDick = (string, dict) => {
  let current = dict;
  console.log(current);
  for (const char of string) {
    if (!current[char]) {
      current[char] = {};
    }
    current = current[char];
  }
};


bigDick("happy", dictionary);
bigDick("happiness", dictionary);
bigDick("happier", dictionary);

console.log(JSON.stringify(dictionary, null, 2));

// Output : dictionary will be
// {
//     h: {
//         a: {
//             p: {
//                 p: {
//                     y: {},
//                     i: {
//                         n: {
//                             e: {
//                                 s: {
//                                     s: {}
//                                 }
//                             }
//                         },
//                         e: {
//                             r: {}
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// แยกตัวอักษรแต่ละตัวเป็น Object Key Tree
//
