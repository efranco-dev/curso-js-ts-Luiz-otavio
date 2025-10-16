function retornFuncao() {
  const nome = 'Luiz';
  return function () {
    return nome;
  };
}
const funcao = retornFuncao()
console.dir(funcao);

