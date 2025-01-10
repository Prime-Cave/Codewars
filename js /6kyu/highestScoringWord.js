// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// For example, the score of abad is 8 (1 + 2 + 1 + 4).
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

// psuedocode
// 1. get the sentence
// 2. split the sentence into an array of words
// 3. store the array of words
// 4. loop over the array of words
// 5. then loop over each word
// 6. for each word get the unicode number using "a".charCodeAt(0)

function high(x) {
  const arrayOfWords = [...x.split(" ")];
  let scores = [];

  for (word of arrayOfWords) {
    let wordScore = 0;
    for (character of word) {
      wordScore += character.charCodeAt(0) - 96;
    }
    scores.push(wordScore);
  }
  const max = Math.max(...scores);

  return arrayOfWords[scores.indexOf(max)]


//   console.log(scores);
//   let arrOfIndicies = [];
//   for (x = 0; x < scores.length; x++) {
//     if(scores[x] >= max){
//         arrOfIndicies.push(scores.indexOf(scores[x]))
//         scores.splice(scores.indexOf(scores[x]), 1,0)
//     }
//   }
//   let highScoreWord = []
//   for(x =0; x < arrOfIndicies.length; x++){
//     highScoreWord.push(arrayOfWords[arrOfIndicies[x]])
//   }
// return highScoreWord.join(" ")
}
console.log(high("man i need a taxi up taxi to ubud"));
