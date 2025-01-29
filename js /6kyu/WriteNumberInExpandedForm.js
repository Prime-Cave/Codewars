// You will be given a number and you will need to return it as a string in Expanded Form. 

function expandedForm(num) {
    let newValue = [...num.toString()].map((digit, index, arr) =>{
        if(digit > 0){
            let tempArr = arr.slice(index).fill(0,1).join("")
            return tempArr
        }
    })
    let endResult = newValue.filter(str => str !== undefined).join(' + ')
    return endResult
}

//console.log(expandedForm(12)); // should return '10 + 2'
console.log(expandedForm(70304)); 

// Co-Pilot Implementation
function expandedForm(num) {
    return num
        .toString()
        .split('')
        .reverse()
        .map((digit, index) => digit * Math.pow(10, index))
        .filter(val => val > 0)
        .reverse()
        .join(' + ');
}