//Avalição de Curto- circuito - short-circuit
// && false && true = false
// && true && true = true
// && true && false = false
// && false && false = false

// || true || false = true
// || false || false = false
// || true || true = true

/* 
false
0
' "" ``
null / undefined
NaN
*/

console.log('Luiz' && 'maria'); //retorna o ultimo valor
console.log('Luiz' && '' && 'Maria'); //retorna vazio ""
console.log('Luiz' && false && 'Maria'); //retorna false

function falaOi() {
  return 'Oi ';
}

const vaiExecutar = 'Joãozinho'; //qualquer expressão que seja verdadeira retorna algo
const vaiExecutar2 = false;

console.log(vaiExecutar && falaOi());
console.log(vaiExecutar2 && falaOi());

//exemplo ||

console.log(0 || false || null || 'Luiz Otávio' || true); // Luis Otávio - precisa de apenas uma expressão verdadeira

const corUsuario = 'Vermelho';
const corPadrao = corUsuario || 'Preto';

console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false - string';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);

