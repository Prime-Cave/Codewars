// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers) {
  let sum = 0;
  for (x = 0; x < numbers.length; x++) {
    sum += numbers[x] ** 2;   
  }
  return sum;
}
console.log(squareSum([2, 2, 3]));
