//String Slicing = creating a substring
//                 from a portion of another string

//                 string.slice(start, end)

//const fullName =   "Shaurya Gupta";
const email = "Bro1@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let domain = email.slice(email.indexOf("@") + 1);

console.log(`Username: ${username}`);
console.log(`Domain: ${domain}`);

/*let firstName = fullName.slice(0, 7);
let lastName = fullName.slice(8);
let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);
console.log(firstName);
console.log(lastName);
console.log(firstChar);
console.log(lastChar);
*/

/*let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(`First Name: ${firstName}`);
console.log(`Last Name: ${lastName}`);
*/