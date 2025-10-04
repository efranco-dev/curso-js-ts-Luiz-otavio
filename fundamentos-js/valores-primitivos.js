/* Primitivos: string, number, boolean, null, undefined, symbol */

let nome = 'Luiz'; //string
nome = 'Otávio';
nome[0] = 'R'; //não altera a string
console.log(nome[0], nome);

let a = 'A';
let b = a; //copia o valor
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);

//Dados por referência (objetos) - array, object, function são mutáveis

let c = [1, 2, 3];
let d = c; //copia a referência
console.log(c, d);

c.push(4);
console.log(c, d);

c.pop();
console.log(c, d);

let e = [...d]; //spread operator - copia os valores
console.log(d);


//passado por referencia
const algo = {
  nome: 'Henrique',
  sobrenome: 'Neves',
};

const p = {...algo};
algo.nome = 'João';
console.log(p);




