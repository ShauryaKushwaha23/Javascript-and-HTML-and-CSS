//If Statements = If a condition is true, execute some code
//                If not, do something else.

const myText = document.getElementById("myText");
const resultElement = document.getElementById("resultElement");
const mySubmit = document.getElementById("mySubmit");
let age = 19;

mySubmit.onclick = function() {
age = myText.value;
age = Number(age);

if(age >=100){
    resultElement.textContent = "You are a centenarian.";
}
else if(age == 0){
    resultElement.textContent = "You are just born.";
}
else if(age >= 18) {
    resultElement.textContent = "You are an adult.";
}
else if(age < 0){
    resultElement.textContent = "That's not posible.";
}
else{
    resultElement.textContent = "You are a minor.";
}
}

/*let age = 25;
let haslicence = true;

if(age >= 18) {
    console.log("You are an adult.");
    if(haslicence){
        console.log("You can drive.");
    }
    else{
        console.log("You cannot drive.");
    } 
}
else{
    console.log("You are a minor.");
}
*/    