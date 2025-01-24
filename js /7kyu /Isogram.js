// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) { 
    if(str === ""){
        return true
    }
  let count = {};
  let lowerCased = str.toLowerCase();
  for (char of lowerCased) {
    if (count.hasOwnProperty(char)) {
      return false 
    } else {
      count[char] = 1;
    }
  }
 return true 

}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
console.log("");

