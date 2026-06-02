// element selectors = Methods used to target and manipulate HTML elements
//                     They allow you to select one or multiple HTML elements
//                     from the DOM (Document Object Model)

// 1. document.getElementById()       // ELEMENT OR NULL
// 2. document.getElementsClassName() // HTML COLLECTION
// 3. document.getElementsByTagName() // HTML COLLECTION
// 4. document.querySelector()        // ELEMENT OR NULL
// 5. document.querySelectorAll()     // NODELIST

/*const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";
*/

/*const fruits = document.getElementsByClassName("fruits");

fruits[0].style.backgroundColor = "yellow";

Array.from(fruits).forEach(fruit => {
    fruit.computedStyleMap.backgroundColor = "yellow";
});
*/

/*const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

console.log(h4Elements);

Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "yellow";
});
*/

/*const element = document.querySelector("h4")
element.style.backgroundColor = "yellow";
*/

const fruits = document.querySelectorAll(".fruits");

fruits[0].style.backgroundColor = "yellow";