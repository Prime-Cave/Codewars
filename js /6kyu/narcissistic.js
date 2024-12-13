// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
// For example, take 153 (3 digits), which is narcissistic:
//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:
//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:
// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.
// This may be True and False in your language, e.g. PHP.
// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.
// Objective
// 1. Return True of False if the value is narcissistic
// Psuedocode
// 1. Get length of the value using (String(123).length)
// 2. Spread the value in an array using (Array.from(String(123),Number)
// 3. Create a variable for addition 
// 4. Loop over the array of values and multiply each value by the length of the string
// 5. Then add it to the addition 
// 6. Compare if the addition value is ===  to initial Param

(function narcissistic(value=0) {
    const numberOfDigits = `${value}`.length
    const arrayOfValues = Array.from(`${value}`,Number)
    let addingValues = 0
    for(let x = 0; x < arrayOfValues.length; x++ ){
        addingValues += arrayOfValues[x] ** numberOfDigits
    }
    //return addingValues === value //? true : false
    console.log(addingValues===value);
    
})()
// let stuff = "wow"
// const functionsArgument = ( stuff) => {
//     return stuff = 'hello' // this creates a shallow copy
// }
// console.log(functionsArgument(stuff));
// console.log(stuff);

//Immediately Invoked function expression 
// (() => {
//     let secretMessage = "Hello i am your secret"
//     console.log(secretMessage)
// })()