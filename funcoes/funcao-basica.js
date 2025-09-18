/* function saudacao(nome) {
    return `Bom dia ${nome}!`
}
const variavel = saudacao("Luiz")
console.log(variavel);
 */

function soma(x, y) {
  const resultado = x + y;
  console.log('Olá mundo');
  return resultado;
}

const resultado = soma(); //NaN
console.log(resultado);

const resultado2 = soma(2, 3);
console.log(resultado2);

const raiz = function (n) {
  return n ** 0.5;
};

console.log(raiz(9));

//Arrow Function
const raizQ = (n) => n ** 0.5;

/* console.log(soma(2, 2));
console.log(resultado);// essa variavel esta protegida pelo corpo da função

 */

/**
 * Nenhuma expressão será imprimida depois da linha de retorno.
 * exmplo:
 * return resultado;
  console.log("Olá mundo"); 
  se os parametros tiverem valores definidos, os mesmo serão imprimidos primeiro,
   caso não seja declarado valores. Exemplo: (x = 1,y = 3)
  
 */
