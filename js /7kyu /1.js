// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// 1. Take Non-negative integers
// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321


// Input: 123456789 Output: 987654321
// Objectives
// 2. Return in Decending order. 

const descendingOrder =  n =>  Number.parseInt(new Array(...n.toString())
.sort((a,b) => b-a)
.join('')) 

console.log(descendingOrder(145263))