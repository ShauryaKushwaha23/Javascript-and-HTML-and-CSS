//.checked = property that determines the checked state of an 
//           HTML checkbox or radio button element.

const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subresult = document.getElementById("subresult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {

    if(myCheckbox.checked){
        subResult.textContent = "You are subscribed.";
    }
    else{
        subResult.textContent = "You are not subscribed.";
    }

    if(visaBtn.checked){
        paymentResult.textContent = "You have selected Visa as your payment method.";
    }
    else if(mastercardBtn.checked){
        paymentResult.textContent = "You have selected MasterCard as your payment method.";
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = "You have selected PayPal as your payment method.";
    }
    else{
        paymentResult.textContent = "You have not selected any payment method, You must select a payment type.";
    }   
}