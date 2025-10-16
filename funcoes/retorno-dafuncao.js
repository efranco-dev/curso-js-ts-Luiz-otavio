//return - retorna uma valor e afunção termina
/* function criaPessoa(nome, sobrenome) {
  return { nome, sobrenome };
}

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1);

const p2 = {
  nome: 'João',
  sobrenome: 'Oliveira',
};

console.log(p2); */

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + ' ' + resto;
  }
  return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);

// exemplo de aplicação
/*function (2)(n) {
  return n * 2;
}
function triplica(n) {
  return n * 3;
}
function quadriplica(n) {
  return n * 4;
} */

function criaMultiplicador(multiplicador) {
  return function (n) {
    return n * multiplicador;
  };
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log((3));
console.log(triplica(2));
console.log(quadriplica(10));
