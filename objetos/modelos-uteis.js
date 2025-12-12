const produto = { nome: 'Produto', preco: 1.8 };
//const outraCoisa = produto;
const caneca = {...produto, material: 'porcelana'};

caneca.nome = 'Luiz Otávio'
caneca.preco = 2.5

console.log(produto);
console.log(caneca);
