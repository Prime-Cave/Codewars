// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// First Implementation, Did not pass all test
// function arrayDiff(a, b) {
//     //let newArr;
//     for(valueB of b){
//         do{
//             a.splice(a.indexOf(valueB), 1)
//         } while(a.includes(valueB))
//     }
//     return a
// }

// Second Implementation
function arrayDiff(a, b){
    return a.filter((ele)=> !b.includes(ele))
}

console.log(arrayDiff([1,2,2,2,3],[2]));
console.log(arrayDiff([-14,-16,11,18,-7,16,-13,-18,-4,-7,-9,-12,16,5,16,-1,-19,-18,-17],[-14,-16,11,18,-7,16,-13,-18,-4,-7,-9,-12,16,5,16,-1]));