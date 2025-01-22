// let amount = 12.3;

// function formatCurrency(strings, amount) {
//   let str = "";
//   for (let i = 0; i < strings.length; i++) {
//     if (i > 0) {
//       if (typeof amount === "number") {
//         str += `$${amount.toFixed(2)}`;
//       } else {
//         str += amount;
//       }
//     }
//     str += strings[i];
//   }
//   return str;
// }

// let msg = formatCurrency`The total for your order is ${amount}`; // this is a tagged template literal and it is used to format the output of the template literal

// console.log(msg);

// function upper(string, ...values) {
//   let ret = "";
//   for (let i = 0; i < string.length; i++) {
//     if (i > 0){
//         ret += String(values[i-1]).toUpperCase();

//     }
//     ret += string[i]
//   }
//   return ""
// }

// let name = "John",
//   twitter = "john_doe",
//   topic = "JS recent parts";

// console.log(
//   upper`Hello ${name} (@${twitter}), welcome to ${topic}!` ===
//     "HELLO JOHN (@JOHN_DOE), WELCOME TO JS RECENT PARTS!"
// );

// function data() {
//   return [1, , 3];
// }
// //old way
// let tmp = data();
// let first = tmp[0];
// let second = tmp[1];
// let third = tmp[2];
// // new way using destructuring
// let [
//     fir,
//     sec = 10,
//     thi
// ] = data();

let str = "Hello";
console.log({...str});

