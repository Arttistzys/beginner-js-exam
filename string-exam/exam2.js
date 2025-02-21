const calculate = (arr) => {
    // Sort arr by start value
    arr.sort((a, b) => a[0] - b[0]);
    console.log('sorted range : ', arr)
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
            console.log(' [start, end] : ',  [start, end])
        }
    }
    mergedRanges.push([start, end]); // Push the last range
    console.log("mergedRanges : ", mergedRanges)
    // Calculate the total unique range
    return mergedRanges.reduce((sum, [s, e]) => sum + (e - s), 0);
}

// Test cases
const data1 = [
    [1, 5],
    [10, 20],
    [2, 6]
];

const data2 = [
    [1, 7],
    [10, 15],
    [-10, -5]
];

console.log(calculate(data1)); // Output: 15
console.log(calculate(data2)); // Output: 16