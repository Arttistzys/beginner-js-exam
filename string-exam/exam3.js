const dictionary = {}

const bigDick = (str, dict) => {
    if (!str.length) return;

    if (!dict[str.charAt(0)]) {
        dict[str.charAt(0)] = {};
    }

    bigDick(str.slice(1), dict[str.charAt(0)]);
}

bigDick("happy", dictionary);
bigDick("happiness", dictionary);
bigDick("happier", dictionary);

console.log(JSON.stringify(dictionary, null, 2))
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