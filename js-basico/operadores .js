/* Operadores aritmeticos */
let num1 = 5;
let num2 = 10;

console.log(num1 + num2); // Adição
console.log(num1 - num2); // Subtração
console.log(num1 / num2); // Divisão
console.log(num1 * num2); // Multiplicação
console.log(num1 % num2); // Modulo
console.log(num1 ** num2); // Potenciação

console.log(num1++); //  incremento
console.log(num1--); //  decremento

//procedencia dos operadores
console.log( (num1 + num2) * 2 );   
console.log( num1 + (num2 * 2) );

/* Operadores de atribuição */
let contador = 0;
contador += 1; // Mesmo que contador = contador + 1
contador -= 1; // Mesmo que contador = contador - 1
contador *= 2; // Mesmo que contador = contador * 2
contador /= 2; // Mesmo que contador = contador / 2
contador %= 2; // Mesmo que contador = contador % 2