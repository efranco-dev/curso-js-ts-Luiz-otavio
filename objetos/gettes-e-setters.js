//defineProperty defineProperties - é possível definir propriedades de um objeto de forma mais detalhada

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  //this.estoque = estoque;
  let estoquePrivado = estoque;
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    configurable: true, // comfigurável
    get: function () {
      return estoquePrivado;
    },
    set: function (valor) {
      if (typeof valor !== 'number') {
        console.log('Bad Value');
        return;
      }
      estoquePrivado = valor;
    },
  });
}

function criaProduto(nome) {
  // factory function
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      valor = valor.replace('coisa', '');
      nome = valor;
    },
  };
}

/* const p1 = new Produto('Camiseta', 20, 3);
//console.log(p1);
p1.estoque = 500;
console.log(p1.estoque);
 */

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa';
console.log(p2.nome);
