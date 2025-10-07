//Operadores de Comparação
/* 
< maior que
> menor que
<= menor ou igual a
>= maior ou igual a
== igual a
=== estritamente igual a (valor e tipo)
!= diferente de
!== estritamente diferente de (valor e tipo)

*/
const comp = 10 > 5;
console.log(comp);

const num1 = 10;
const num2 = '10';
console.log(num1 === num2); //false
console.log(num1 == num2); //true

console.log(num1 !== num2); //true
console.log(num1 != num2); //false  
console.log(num1 >= num2); //true
console.log(num1 <= num2); //true
