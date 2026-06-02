// const = a variable that can't be changed

const PI = 3.14159;
let radius;
let circumfernce;

// pi = 420.69; you may not realize its the incorrect answer yet the value has changed therefore you use const to avoid these mistakes.

radius = window.prompt("Enter the radius of a circle: ");
radius = Number(radius);

circumfernce = 2 * PI * radius;

console.log(circumfernce);

document.getElementById("mySubmit").onclick = function() {
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumfernce = 2 * PI * radius;
    document.getElementById("myH3").textContent = `The circumfernce is ${circumfernce + "cm"}.`;
}
