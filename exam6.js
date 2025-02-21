// examlple 6

const data = [
  [1, 5], //
  [10, 20], // 10
  [2, 6], // 6-1 = 5
];
// 1 2 3 4 5
// 2 3 4 5 6

// sum = 18
// sum = 10 + 5 = 15

// examlple 2
const data2 = [
  [1, 7], // 6
  [10, 15], // 5
  [-10, -5], // 5
];
// output = 6+5+5 = 16

const calculate = (arr) => {
  // Sort arr by start value
  arr.sort((a, b) => a[0] - b[0]);
  console.log("sorted range : ", arr);
  let mergedRanges = [];
  let [start, end] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let [newStart, newEnd] = arr[i];

    if (newStart <= end) {
      // Overlapping range, merge it
      end = Math.max(end, newEnd);
    } else {
      // Push the merged range and update start and end
      mergedRanges.push([start, end]);
      [start, end] = [newStart, newEnd];
      console.log(" [start, end] : ", [start, end]);
    }
  }
  mergedRanges.push([start, end]); // Push the last range
  console.log("mergedRanges : ", mergedRanges);
  // Calculate the total unique range
  return mergedRanges.reduce((sum, [s, e]) => sum + (e - s), 0);
};

const response = calculate(data);
console.log(response);

const response2 = calculate(data2);
console.log(response2);
