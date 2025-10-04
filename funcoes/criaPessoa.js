/* function criaPessoa(nome, sobrenome, idade) {//parametros: nome, sobrenome , idade
  return { nome, sobrenome, idade };
}
const pessoa1 = criaPessoa('Luiz', 'Otavio', 25); //o que esta dentro dos parentes são argumentos
const pessoa2 = criaPessoa('Maria', 'Oliveira', 25);
const pessoa3 = criaPessoa('João', 'Otaviano', 25);
const pessoa4 = criaPessoa('Marcos', 'Leitão', 25);
const pessoa5 = criaPessoa('Henrique', 'Neves', 25);

console.log(pessoa1.nome);
console.log(pessoa2.nome);
console.log(pessoa3.nome);
console.log(pessoa4.nome);
console.log(pessoa5.nome); */

//factory function - função fábrica ou seja uma função que retorna um objeto
const pessoa1 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 25,

  fala() {
    //this - referencia o proprio objeto, nesse caso pessoa1
    console.log(` ${this.nome} ${this.sobrenome} tem ${this.idade} anos e fala oi para todos...`);
  },
    incrementaIdade() {
      this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
