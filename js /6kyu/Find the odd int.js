// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
// for(x=0; x < A.length; x++){
//     let count = 0;
//     for(y=0; y < A.length; y++){
//         if(A[x] === A[y]){
//             count++
//         }
//     }
//     if(count % 2 !== 0){
//         return A[x]
// }
// return 0;

function findOdd(A) {
  count = {};
  for (x = 0; x < A.length; x++) {
    if (!count.hasOwnProperty(A[x])) {
      count[A[x]] = 1;
    } else {
      count[A[x]]++;
    }
  }
  for(key in count){
    if(count[key] % 2 !== 0){
        //return Number(key)
        return parseInt(key)
    }
  }
}
console.log(findOdd([1,2,2,3,3,3,4,3,1,3,3,2,2,1]));

// Refactored solution from Codewars
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
// ^ is the bitwise XOR operator
// The reducer function uses the bitwise XOR (exclusive OR) operator. The XOR operator returns 1 for each bit position where the corresponding bits of its operands are different, and 0 where they are the same.