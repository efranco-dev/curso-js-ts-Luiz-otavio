function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,

    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();//elimina indice 0
      this.sobrenome = valor.join(' ')
      console.log(valor);
    },

    fala(assunto) {
      return `${nome} está ${assunto}`;
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
