// Write a function **`sumUnique`** that takes an array of numbers as an argument and returns the sum of the elements that appear only once in the array.

// ```jsx
// sumUnique([1, 2, 2, 3, 4, 4, 5]) // 1 + 3 + 5 => 9
// sumUnique([10, 20, 20, 30, 40, 40, 50]) // 10 + 30 + 50 => 90
// sumUniquey([5, 5, 10, 15, 20, 25, 25]) // 10 + 15 + 20 => 45
// ```
//Objective
// Get the sum of elements that appear only once
//Psuedocode
// Loop Over the array 
// remove value from array using splice into a new array 
// CHeck if 

function sumUnique(arr){
    // let newArray = []
    // //let arrayOfUniqueValues = []
    // for(let x = 0; x < arr.length; x++){
    //     if(!newArray.includes(arr[x])){
    //         newArray.push(arr[x])
    //     }
    // }
    // return newArray//arrayOfUniqueValues
    // let newArray = arr.reduce((a,b) => a^b)
    // return newArray +1

    let count = {}
    for(let x = 0; x < arr.length; x++){
        if(!count[arr[x]]){
            count[arr[x]] = 1
        } else {
            count[arr[x]]++
        }
    }
    let sum = 0
    for(key in count){
        if(count[key] >1){
            sum += parseInt(key)
        }
    }
    return sum
}

console.log(sumUnique([1, 2, 2, 3, 4, 4, 5]))