/* let [a, b, c] = [1, 2, 3];

console.log(a, b, c); */

//const numeros = ([1, 2, 3][(a, b, c)] = numeros);

//console.log(a, b, c);

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [num1, num2, ...resto] = numeros;
console.log(num1, num2);
console.log(resto);

const numerosA = [[1, 2, 3], [(4, 5, 6)], [(7, 8, 9)]];

const [lista1, lista2, lista3] = numerosA;
console.log(lista3[2]);

//com objeto
const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
  endereco: {
    rua: 'Avenida Brasil',
    numero: 320,
  },
};

//atribuição via desetruturação
const { nome, sobrenome, ...resto2 } = pessoa; //extrai desse objeto pessoa a variavel nome
console.log(nome, resto2); //Luiz

