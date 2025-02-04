// Merge two sorted arrays into one
// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

function mergeArrays(arr1, arr2) {
    // Combine both arrays
    const merged = arr1.concat(arr2);

    // Sort in ascending order and remove duplicates
    return [...new Set(merged.sort((a, b) => a -b ))];
}

  console.log(mergeArrays([1,2,3,4], [1,2,3,4,5,6,7,8,10, 20, 30, 40]))