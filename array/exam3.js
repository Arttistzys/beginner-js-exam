const data = [
    [3, 5, [8, [10, { a: 15 }], 2]],
    { key: [7, "text", [1, 14], { nested: [0, 4] }] },
    "ignore this",
    6
];

console.log(deepFlattenAndSort(data));

// 3. จงเขียน Function: deepFlattenAndSort
// Expected Output : [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 14, 15]
