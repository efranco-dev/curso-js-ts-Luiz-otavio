// Funções contrutora -> objetos
// Função fabrica -> objetos
// Contrutora -> Pessoa (new)

//função construtora
function Pessoa(nome, sobrenome) {
  // Atributos ou métodos privados
  const ID = 123456;
  const metodoInterno = function () {};

  // Atributos ou métodos publicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function () {
    console.log(this.nome + ' : sou um método');
  };
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');

console.log(p1.nome);
p2.metodo();
