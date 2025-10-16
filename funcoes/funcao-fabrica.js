function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,

    get nomeCompleto() {
      return `${nome} ${sobrenome}`;
    },
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      console.log(valor);
    },

    fala: function (assunto) {
      return `${this.nome} está ${this.assunto}`;
    },
    altura: altura,
    peso: peso,

    //Getter
    get imc() {
      const indice = peso / altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
console.log(p1.imc);
const p2 = criaPessoa('Ana', 'Jéssica', 1.6, 56);
console.log(p2.imc);

console.log(p1.fala('Falando sobre JS'));
console.log(p1.nome);

console.log(p2.fala('Falando sobre Design'));
console.log(p2.nome);

p1.nomeCompleto = 'Maria Oliveira Silva';
