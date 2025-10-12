//for in
const frutas = ['Banana', 'Pêra', 'Uva'];

for (let i in frutas) {
  console.log(frutas[i]);
}
console.log('---------------');

const pessoas = ['Luiz', 'Maria', 'João'];

for (let i in pessoas) {
  console.log(pessoas[i]);
  //ler os indices
}

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otavio',
  idade: 30,
};

for (let chave in pessoa) {
  console.log(chave);
  console.log(chave, pessoa[chave]);
}

console.log(pessoa.nome); // Luiz
