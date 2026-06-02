// function = A section of reusable code.
//            Declare code once, use it whenever you want.
//            Call the function to execute that code.

/*function happyBirthday(username, age){
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday dear ${username}!`);
    console.log("Happy Birthday to you!");
    console.log(`You are now ${age} years old!`);
}

happyBirthday("Shaurya", 20);
happyBirthday("Kushwaha", 19);
happyBirthday("John", 25);
*/

function add(x, y){
    return x + y;
}
function subtract(x, y){
    return x - y;
}
function multiply(x, y){
    return x * y;
}
function divide(x, y){
    return x / y;
}
function modulus(x, y){
    return x % y;
}
function isEven(number){
    
    //if(number % 2 === 0){
      //  return true;
    //}
    //else{
      //  return false;
    //}

    return number % 2 === 0 ? true : false;

}
function isValidEmail(email){
    
    return email.includes("@") && email.includes(".") ? true : false;
}

console.log(isValidEmail("shaurya@fake.com"));