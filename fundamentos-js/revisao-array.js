const nomes = ['Eduardo', 'Maria', 'Joana'];
nomes[2] = 'João';
//delete nomes[2];
console.log(nomes);

// Valor por referência
const novo = nomes;
//Spread operation
const novo2 = [...nomes];
console.log(novo2);

console.log(novo);

//tamanho do array - length
console.log(novo.length);

// pop remove item do final
const removido = nomes.pop();
console.log(nomes, removido);

// shift - remove item do inicio
const removido2 = nomes.shift();
console.log(nomes, removido2);

//push - adiona item no final
nomes.push('João');
nomes.push('Maria');
nomes.push('Ana Jessica');
console.log(`Adiondo nomes:  ${nomes}`);

//unshifit - adiciona item no inicio do array
nomes.unshift('Sabrine');
nomes.unshift('Alanis');
console.log(nomes);

//menos usado dessa forma - funciona da mesmo jeito
const nomes2 = new Array('Eduardo', ' Maria', 'Joana');

console.log('---------------- slice  -------------------');
//
const nomes3 = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];
const novo3 = nomes3.slice(1, 3); //exibe intervalo
console.log(novo3);

//split - transforma um string em um array
const nome = 'Luiz Otávio Miranda';
const arr = nome.split(' ');
console.log(arr);
//join - uni valores de um array 
const nome2 = ['Luiz', 'Otávio', 'Miranda'];
const junta = nome2.join(' ');
console.log(junta);

