const fruits = [{name: "apple", color: "red", colories: 95},
                {name: "orange", color: "orange", colories: 45},
                {name: "banana", color: "yellow", colories: 105},
                {name: "coconut", color: "white", colories: 159},
                {name: "pineapple", color: "yellow", colories: 37}];

/*fruits.push({name: "grapes", color: "purple", calories: 62});
fruits.splice(1, 2);

console.log(fruits);
*/

// ---------- forEach() ----------

//fruits.forEach(fruit => console.log(fruit.name));

// --------- map() ---------

//const fruitNames = fruits.map(fruit => fruit.name);

//console.log(fruitNames);

// --------- filter() ---------

//const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");

//console.log(yellowFruits);

// ---------- reduce() ---------

const maxFruit = fruits.reduce((max , fruit) => fruit.calories > max.claories ? fruit : max);

console.log(maxFruit);