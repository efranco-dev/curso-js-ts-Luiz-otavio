const array = [1, 2, 3];
array.push(4); //adiona novo item
array[0] = 'Luiz'; //adiciona item na posição definida
//array = "outra" // erro só pode modificada se for let
console.log(array);


//constante como objeto
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 25
};
const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Silva',
    idade: 30
};
pessoa1.nome = 'Otávio';
pessoa1.sobrenome = 'Silva';
pessoa1.idade = 26;

console.log(pessoa1);
console.log(pessoa2);
