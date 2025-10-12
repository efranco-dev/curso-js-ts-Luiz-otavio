//Escreva uma função que recebe dois números e retorne o maior deles.

function maiorNumero(num1, num2) {
  if (num1 > num2) return num1;
  return num2;
}
console.log(maiorNumero(4, 5));

//arrow function
const maiorNumero2 = (num1, num2) => (num1 > num2 ? num1 : num2);
console.log(maiorNumero2(10, 5));
