const products = [
    { name: "iPhone", category: "Electronics" },
    { name: "Samsung TV", category: "Electronics" },
    { name: "Banana", category: "Fruits" },
    { name: "Apple", category: "Fruits" },
    { name: "T-shirt", category: "Clothing" }
];

console.log(groupByCategory(products));

// 2. จงเขียน Function: groupByCategory
// Expected Output: {
//   Electronics: ["iPhone", "Samsung TV"],
//   Fruits: ["Banana", "Apple"],
//   Clothing: ["T-shirt"]
// }