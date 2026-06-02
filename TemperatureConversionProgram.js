// Temperature Conversion Program

const textbox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert(){

    if(toFahrenheit.checked){
        //Celsius to Fahrenheit
        temp = Number(textbox.value);
        temp = (temp * 9/5) + 32;
        result.textContent = `Temperature in Fahrenheit: ${temp.toFixed(2)} °F`;
    }
    else if(toCelsius.checked){
        //Fahrenheit to Celsius
        temp = Number(textbox.value);
        temp = (temp - 32) * 5/9;
        result.textContent = `Temperature in Celsius: ${temp.toFixed(2)} °C`;
    }
    else{
        result.textContent = "Please select a conversion option.";
    }

}