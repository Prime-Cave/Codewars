// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

function persistence(num) {
    if(num.toString().length < 2){
        return 0
    }
    let count = 0
    do{
        num = num.toString().split('').reduce((a,c) => a * c, 1)
        count++
    } while (num.toString().length > 1)
    
    return count
 }

 console.log(persistence(39));
 