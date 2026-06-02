// variable = A container that stores a value
//            Behaves as If it were the value it contains.

// 1. declaration let x;
// 2. assignment x = 100;

//let age = 25;
//let price = 99.99; NUMBER
//let gpa = 3.7;

//let firstname = "Shaurya";
//let email = "Shauryakushwaha123.d@gmail.com"; STRINGS

//let online = true; //BOOLEAN

//console.log(`The statement is ${online}.`);

//console.log(`Your email is ${email}.`);  
//console.log(typeof firstname);   
/*console.log(`Your are ${age} years old.`);
console.log(`The price is $${price}.`);
console.log(`Your GPA is ${gpa}.`);
*/ 
let fullname = "Shaurya Kushwaha";
let age = 20;
let student = true;

document.getElementById("p1").textContent = `My name is ${fullname}.`;
document.getElementById("p2").textContent = `I am ${age} years old.`;
document.getElementById("p3").textContent = `Student status: ${student}.`;