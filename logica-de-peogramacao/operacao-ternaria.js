//operação térnaria =  (condição) ? 'valor verdadeiro' : 'Valor falso'

const pontuacaoUsuario = 500;
const nivelUsuario =
  pontuacaoUsuario >= 1000 ? 'Usuario Vip' : 'Usuario Normal';

console.log(nivelUsuario);

const corUsuario = 'Pink';
const corPadao = corUsuario || 'Preta';

console.log(corPadao);
