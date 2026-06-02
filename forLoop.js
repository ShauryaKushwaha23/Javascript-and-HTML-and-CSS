// for loop = repeat some code a LIMITED amount of times

for(let i = 1; i <= 20; i++){
    
    if(i == 13){
        console.log("Unlucky number 13!");
        continue;
    }
    console.log(i);
}