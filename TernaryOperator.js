//Ternary Operator = a shortcut to if() and else() statements
//                   helps to assign a variable based on a condition
//                   condition ? codeIfTrue : codeIfFalse;

//let age = 21;

//et message = age >= 18 ? "You are an adult." : "You are a minor.";
//console.log(message);

/*let time = 16;
let greeting = time < 12 ? "Good morning." : "Good afternoon.";
console.log(greeting);
*/

/*let isStudent = false;
let message = isStudent ? "You get a discount!" : "You don't get a discount.";
console.log(message);
*/

let purchaseAmount = 120;
let discount = purchaseAmount > 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}.`);