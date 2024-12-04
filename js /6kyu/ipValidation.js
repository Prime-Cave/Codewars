// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
// Valid inputs examples:
// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89
// Invalid input examples:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Notes:
// Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string


// Objective 
// 1. check if the string is a valid IPv4
// 2. numbers with leading 0s are considered invalid 

// Psuedocode
// 1. create a function that takes in the String
// 2. then split the string into an array by the .
// 3. loop over the array to check if the values are an integer 
// 4. check if teh vakues are greater than 0 or less or equal to 255
// 5. If conditions are met then append array into string and return it

function isValidIP(str) {
   const strArray = str.split('.')
   if(strArray.length !== 4){
    return false 
   }
    for (let x =0; x < strArray.length; x++){
        let octet = strArray[x]
            if(!/^\d+$/.test(octet) ||(octet.length > 1 && octet.startsWith('0'))){
                return false 
            }

            let stringToNumber = Number(strArray[x])
            if ( stringToNumber < 0 || stringToNumber > 255){
                return false
            }

    }
    return true;
  }
  
console.log(/^\d+$/.test("122"))

// regex used 

//  1. ^ : makes sure it matches the start of the string
//  2. \d : makes sure it matches number 0-9
//  3. + : makes sure it has at least one value 
//  4. $ : makes sure it matches the end of the string