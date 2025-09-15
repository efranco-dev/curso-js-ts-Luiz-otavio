//Tipos de dados primitivos
//String, Number, Boolean, Undefined, Null (bigint, symbol - ES6)

//String
let nome = 'Henrique';
console.log(typeof nome); //string

//Number
let idade = 30;
console.log(typeof idade); //number

//Boolean
let possuiFaculdade = true;
console.log(typeof possuiFaculdade); //boolean

let nomeAluno; //undefined
console.log(typeof nomeAluno); //undefined
let sobrenomeAluno = null; //null
console.log(typeof sobrenomeAluno); //object (isso é um bug do JavaScript)

//valorees por referência
const a = [1, 2];
const b = a;

console.log(a, b);
b.push(3)
console.log(a, b);//[1, 2, 3] [1, 2, 3]

console.log("-----------");

//valores por valor
let c = 2;
let d = c;

console.log(c, d);
c = 3;
console.log(c, d);//3 2
