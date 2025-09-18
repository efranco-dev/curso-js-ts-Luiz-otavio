let num1 = 10.533423627272; //Number
let num2 = 2.5; //Number

console.log(num1.toString() + num2);//12.5
console.log(num1.toFixed(2));
console.log(Number (num1.toFixed()) + num2);

console.log(Number.isInteger(num1));

let temp = num1 * "Ola"
console.log(Number.isNaN(temp));//NaN

console.log("------------");

let num3 = 0.7
let num4 = 0.1

console.log(num3 + num4);//0.7999999999999999  Padrão: IEEE 754-2008








