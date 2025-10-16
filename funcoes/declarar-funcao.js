//Declaração de função (Function Declaration)
function falarOi() {
  console.log('Oi!');
}
falarOi();

//Fist-class (Função de primeira classe)
const souUmDado = function () {
  console.log('Sou um dado.');
};
souUmDado();

function executaFuncao(funcao) {
  console.log('Executando a função abaixo.');
  funcao();
}

executaFuncao(souUmDado);

const funcaoArrow = () => {
  console.log('Sou uma arrow function');
};

funcaoArrow();

// metodo dentro de um objeto
const obj = {
  falar() {
    console.log('Estou falando...');
  },
};

obj.falar();
