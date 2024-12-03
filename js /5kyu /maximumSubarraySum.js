// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
// Objective
// 1. If the array is made up of only negative numbers generate 0 instead 
// 2. If the array is empty return 0
// 3. Generate all the possible sub arrays
// 4. find the sub array with the highest sum 
// Psuedocode
// 1. check if the array is empty and return zero if yes 
// 2. check if the array is made up of negative numbers and return zero if yes 
// 3. generate the subarrays into a new array
// 4. loop through the new array or sub arrays and add the values in the sub arays generating a new array of sub array values
// find the highest number in the new array of sub array sum

const generateSubarrays = array =>{
    var subarray = []
    for (let x = 0; x < array.length; x++){
        var currentSubarray = []

        // for this next loop the new array would start from where the old one stopped 
        for (let y = x; y < array.length; y++){
            // the value y is then increased to add the next index to the array 
            currentSubarray.push(array[y])
            subarray.push([...currentSubarray])
        }
    }
    return subarray
}

var maxSequence = function(arr){
    // genereate the sub Arrays 
    const arrayOfSums = []
    const areValuesNegative = arr.every(value => value <0)
    if(arr.length === 0){
        return 0
    } else if (areValuesNegative){
        return 0
    }
    const newSubArray = generateSubarrays(arr)
    for (let x = 0; x < newSubArray.length; x++){
        arrayOfSums.push(newSubArray[x].reduce((accumulator, currentValue) => accumulator + currentValue, 0))
    }
    const maxSum = Math.max(...arrayOfSums)
    return maxSum 
}
console.log(maxSequence([-1,-2,-3,-4,-5,-6]))