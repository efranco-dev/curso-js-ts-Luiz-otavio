const alunos = ['Luiz', 'Maria', 'João', 'Eduardo'];

alunos[0] = 'Luiza'; // Alterando o valor do índice 0
alunos[3] = 'Luana';

alunos.push('Otávio'); // Adiciona um novo elemento no final do array
alunos.unshift('Fábio'); // Adiciona um novo elemento no início do array

console.log(alunos);
const removido = alunos.pop()

console.log("----------");
console.log(removido);

console.log(alunos);


console.log(alunos.slice(0, 3)); // Mostra os elementos do índice 0 ao 2 (o 3 não é incluído)

console.log(alunos.length); // Mostra o tamanho do array
