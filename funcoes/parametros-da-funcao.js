function funcaoA(a, b, c) {
  let total = 0;

  for (argumento of arguments) {
    total += argumento;
  }
  console.log(total, a, b, c);
}

funcaoA(1, 2, 3, 4, 5, 6, 7);

//argumerntos que sustenta todos os argumentos enviados
function funcao(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}

funcao(1, 2, 3);

function funcaoSomar(a, b = 2, c = 4) {
  console.log(a + b + c);
}

funcaoSomar(2, null, 20);

function funcaoPessoa({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}
function funcaoPessoa2([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}
let obj = { nome: 'Luiz', sobrenome: 'Otávio', idade: 20 };
funcaoPessoa(obj);
funcaoPessoa2(['Luiz Otávio', 'Miranda', 30]);

function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;
  }
  console.log(acumulador);
}

conta('+', 0, 20, 30, 40, 50);
conta('-', 0, 20, 30, 40, 50);
conta('/', 0, 20, 30, 40, 50);
conta('*', 0, 20, 30, 40, 50);

const contaArgs = (...args) => {
  console.log(args);
};

contaArgs('+', 1, 20, 30, 40, 50);
