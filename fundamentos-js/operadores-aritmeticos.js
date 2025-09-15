/**
 * Operadores Aritméticos
 * 
 * + Adição / Concatenação
 * - Subtração
 * * Multiplicação
 * / Divisão
 * % Módulo
 * ** Exponenciação ou Potenciação
 */
const num1 = 5
const num2 = 10

console.log(num1 + num2) // 15
console.log(num1 - num2) // -5
console.log(num1 * num2) // 50
console.log(num1 / num2) // 0.5
console.log(num1 % num2) // 5
console.log(num2 % num1) // 0

//Concatenação
const nome = 'Henrique'
const sobrenome = 'Silva'
const nomeCompleto = nome + ' ' + sobrenome
console.log(nomeCompleto) // Henrique Silva

console.log("-----------");
//Exponenciação ou Potenciação
console.log(num1 ** num2) // 9765625
console.log(num2 ** num1) // 100000

//Ordem de precedência
//1º () - 2º ** - 3º * / % - 4º + -
console.log((num1 + num2) * 2) // 30
console.log(num1 + num2 * 2) // 25

//Operador de incremento ++
let contador = 1
contador++
contador++
console.log(contador);
//Operador de decremento --
let contador2 = 1
contador2--
contador2--
console.log(contador2);

//NaN -Not a number parseInt(inteiro), parseFloat(decimais)
const num3 = 10
const num4 = Number('5a') //5
const num5 = parseFloat('5.2a') //5.2
console.log(num3 + num4) //NaN
console.log(num3 + num5) //15.2;

