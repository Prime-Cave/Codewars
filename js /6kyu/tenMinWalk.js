// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// the walk is always 10 minutes
// the walk is always a square
// the walk always returns to the starting point
// the kata is asking if the walk is valid
// this is done by checking if the walk is 10 minutes long and if the walk returns to the starting point
function isValidWalk(walk) {
    if(walk.length !== 10) return false ;

    let northSouth = 0;
    let eastWest = 0;

    for(let path of walk ){
        if(path === 'n') northSouth += 1;
        if(path === 's') northSouth -= 1;
        if(path === 'e') eastWest += 1;
        if(path === 'w') eastWest -= 1;
    }

    return northSouth == 0 && eastWest == 0
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])); // true
console.log(isValidWalk(['n', 'n', 'n', 's', 's', 's', 'e', 'w', 'e', 'w']));