// Random Number Generator

//let randomNumber = Math.random(); // generates a random number between 0 (inclusive) and 1 (exclusive)
//let randomNumber = Math.floor(Math.random() * 6) + 1; // generates a random number between 0 and 6

//const min = 50;
//const max = 100;
//let randomNumber = Math.floor(Math.random() * (max - min)) + min; // generates a random number between min and max (inclusive)

//console.log(`Random number between 0 and 1: ${randomNumber}`);
//console.log(`Random number between 0 and 6: ${randomNumber}`);

//console.log(`Random number between ${min} and ${max}: ${randomNumber}`);

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNum2 = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNum3 = Math.floor(Math.random() * (max - min + 1)) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}