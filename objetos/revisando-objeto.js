/* const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio',
};

const chave = 'nome';
console.log(pessoa.nome);//notação e ponto

console.log(pessoa[chave]);//notação de colchetes
 */

//outra maneira
const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 32;
pessoa1.falaNome = function () {
  return `${this.nome} está falando nome.`;
};

console.log(pessoa1.falaNome());
//delete pessoa1.nome

pessoa1.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};
console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1) {
  console.log(pessoa1[chave]);
}

// Factory functions / Contructor functions / Classes

/* const pessoa2 = {
  nome: 'Luiz',
  sobrenome: 'Otávio',
};

console.log(pessoa1.nome);
console.log(pessoa1, pessoa2);

console.log('--------------------------------');
delete pessoa1.nome;
pessoa1.falaNome();
 */

function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    //Factory fuctions
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1.nomeCompleto);

//Contructor functions

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  //Object.freeze(this)
}

const p2 = new Pessoa('Franco', "Nascimento")
//p2 = "outra coisa"// nesse caso da erro, porque estou alterendo a referncia de memória
p2.nome = "Alanis"
//p2 = (ENDERECOMEMORIA) -> 'Valor'
//p2 = (ENDERECOMEMORIA) -> {nome: "outra coisa"}
console.log(p2);// retorna um objeto

const p3 = new Pessoa()
console.log(p3);// indefined

/* a const quando muda de valor , não esta mudando o enderço de memória, 
mas o valor atribuito ao mesmo. 
para não alterar  usar Object.freeze(p2)
*/