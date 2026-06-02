// How to accept user input

//1. EASY WAY = window prompt
//2. PROFFESIONAL WAY = HTML textbox

/*let username;

username = window.prompt("Enter your name: ");

console.log(username);
*/

let username;

document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Welcome to My Website, ${username}!`;
}