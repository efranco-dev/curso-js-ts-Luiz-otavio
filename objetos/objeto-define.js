//defineProperty defineProperties - é possível definir propriedades de um objeto de forma mais detalhada

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  //this.estoque = estoque;

  Object.defineProperty(this, 'estoque', {
    enumerable: false,
    value: estoque,
    writable: true,
    configurable: true,
    //writable: true
  });

  /* Object.defineProperty(this, 'estoque', {
    enumerable: true,
    value: estoque,
    writable: true,
    configurable: false,
    //writable: true
  }); */
  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: true,
      configurable: true,
    },
    preco: {
      enumerable: false,
      value: preco,
      writable: true,
      configurable: true,
    },
  });
}

const p1 = new Produto('Camiseta', 20, 3);
/* p1.estoque = 500000;
delete p1.estoque
console.log(p1); */
console.log(Object.keys(p1));

for (let chave in p1) {
  console.log(chave);
}
