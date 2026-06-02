// variable scope = where a variable is recognised
//                  and accessible (local vs global)

let x = 10; //global variable

function2();

function function1(){
    let x = 1;
    console.log(x);
}

function function2(){
    let x = 2;
    console.log(x);
}