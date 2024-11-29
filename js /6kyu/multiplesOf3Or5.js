// //If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0.
// Note: If the number is a multiple of both 3 and 5, only count it once.

//objective 
// 1. return the sum of all multiples of 3 or 5 
// 2. if negative return 0 
// 3. if number is multiple of both count it once 
// Psuedocode
// 1. check if number is negative and return 0
// 2. create variable called sum
// 3. count from 1 to the given number
// 4. then check if it is divisible by both 3 and 5 first
// 5. if yes then add to sum
// 6. if no check if divisible by 3 alone if yes add to sum 
// 7. check if divisible by 5 alone, if yes then add to sum
// 8. repeat loop until complete

function solution(number){
  var sum = 0 
    if(number < 0) return 0;
        for(let x = 1; x < number; x++){
            if(x%3 === 0 || x%5 === 0){
                sum += x
            } else if (x%3 === 0){
                sum += x
            } else if (x%5 === 0){
                sum += x
            }
        }
    return sum 
}

console.log(solution(40))