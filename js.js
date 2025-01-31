function* createSundae() {
    const toppings = [];
    
    toppings.push(yield); // this is where the generator pauses
    toppings.push(yield); // Multiple yields can be used in a generator function. The first yield pauses the generator and returns the value of the expression following the yield keyword. The second yield pauses the generator again and returns the value of the expression following the yield keyword.
    toppings.push(yield);
    
    return toppings;
}

var it = createSundae(); // this does not execute the generator because it is paused
let value1= it.next('hot fudge') // this is where the generator starts executing
let value2= it.next('sprinkles'); 
let value3= it.next('whipped cream');
let value4= it.next();// Because the generator is paused, the value of the expression following the yield keyword is not returned. Instead, the value of the expression following the yield keyword is returned as undefined. The generator is paused because the next() method is called with an argument, but the data passed to the next() method is not used in the generator

console.log(value1) // { value: undefined, done: false } this is undefined because the generator is paused. The generator is paused because the next() method is called with an argument, but the data passed to the next() method is not used in the generator
// Yield is used to pause and resume a generator function (function*). The yield keyword actually pauses the function execution and returns the value of the expression following the yield keyword. This allows the generator function to produce a series of values over time rather than computing them all at once and sending them back in an array.
console.log(value2)
console.log(value3)
console.log(value4)