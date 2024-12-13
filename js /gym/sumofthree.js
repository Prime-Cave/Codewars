// Write a function called lucky_sevens which takes an array of integers and returns true if any three consecutive elements sum to 7.

//Objective
//Take an Array of integers 
// check if there consecutive elements sum to 7 
//Psuedocode 
//  get an array 
// loop over the array 
//  inside the loop slice the array to get 3 consecutive elements in a new array and then sum the array 
//  check if the sum is = 7 
// if yes return true else return false after the loop ends 

function luckSeven(arr){
    for(let x =0 ; x<arr.length; x++){ 
        let sum = arr.slice(x,x+3).reduce((acc,curr)=>acc+curr,0)
        if ( sum === 7 ) return true 
    }
    return false 
}
console.log(luckSeven([1,2,3,4,5,6,2,4,1]));
