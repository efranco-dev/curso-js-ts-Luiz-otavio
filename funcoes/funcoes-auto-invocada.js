//IIFE - Immediately Invoked function expression - função auto-invocada
//

//função auto invocada
(function (idade, peso, altura) {
  const sobrenome = 'Miranda';
  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }

  function falaNome() {
    console.log(criaNome('Luiz'));
  }
  falaNome();
  console.log(idade, peso, altura);
})(30, 80, 1.8);

const nome = 'Qualquer coisa'; // essa const não é a mesma da função

function qualquerCoisa() {
  console.log(53581747856);
}

qualquerCoisa();
