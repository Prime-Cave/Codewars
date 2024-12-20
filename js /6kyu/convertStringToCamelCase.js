// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"



function toCamelCase(str){

    if(!str) return ""
    const delimiters = /[-_,.]/
    
    const arrayOfWords =  str.split(delimiters)
    const newArryOfWords = arrayOfWords.map(function changeToCamelCase(element, index,arr){
        let newString = ''
        if (arr[0][0] === arr[0][0].toUpperCase()){
             newString = element.replace(element[0],element[0].toUpperCase())
        } else {
            //
            newString = element 
           if (index >= 1){
            newString = element.replace(element[0],element[0].toUpperCase())
           }
        }
        return newString
    });
    
    const joined =  newArryOfWords.join(delimiters)
    return  joined.replace(/[-_,.\/\[\]]/g, "")
}

console.log(toCamelCase("the_stealth-warrior"));
