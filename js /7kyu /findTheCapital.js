//Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// "CodEWaRs" --> [0,3,4,6]
// Objectives :
// 1. return an ordered list 
// 2. retrun the idicies of all capital letter 
// Psuecode
// 1. change the string of words into an arrayOfWords
// 2. check if each value in the array is capital 
// 3. if it's capital then add the index into a new array 


// var capitals = function (word) {
//     // INITIAL SOLUTION 
//     // const indexArray = []
//     // const arrayOfWords= new Array(...word)
//     //     for(let i= 0; i < arrayOfWords.length; i++){
//     //         if (arrayOfWords[i] === arrayOfWords[i].toUpperCase()){
//     //             indexArray.push(i)
//     //         }
//     //     }
//     // return indexArray.sort()

//     const newArrayofCapitals = new Array(...word).map((element, index) => (element === element
//     .toUpperCase() ? index : null))
//     .filter(index => index !== null)
    
//     return newArrayofCapitals

// };

// FINAL CODE WARS SOLUTION 

var capitals = function (word) {
    return [...word].map((element, index) => (element === element
    .toUpperCase() ? index : null))
    .filter(index => index !== null)
};
console.log(capitals('tomisinLikesToThinkHeisBATMan'))
