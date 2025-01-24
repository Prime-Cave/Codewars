// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// function isPangram(string) {
//   let cleanedString = [];
//   // clean string to get char only
//   for (x = 0; x < string.length; x++) {
//     if (
//       (string.charCodeAt(x) >= 65 && string.charCodeAt(x) <= 90) ||
//       (string.charCodeAt(x) >= 97 && string.charCodeAt(x) <= 122)
//     ) {
//       cleanedString.push(string.charCodeAt(x));
//     }
//   }
//   // create comparising array
  

//   return cleanedString
// 

function isPangram(string){
    const regex = /(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z)/i;
    return regex.test(string)
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));
