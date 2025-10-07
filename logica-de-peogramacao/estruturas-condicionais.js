//estruturas condicionais if else

const hora = 50;

if (hora >= 0 && hora <= 11) {
  console.log('Bom Dia');
} else if (hora >= 12 && hora <= 17) {
  console.log('Boa Tarde');
} else if (hora >= 18 && hora <= 23) {
  console.log('Boa Noite');
} else {
  console.log('Hora Inválida');
}
// outro exemplo

const tenhoDinheiro = true;

if (tenhoDinheiro) {
  console.log('Vou ao cinema');
} else {
  console.log('Não vou ao cinema');
}


const numero = Math.floor(Math.random() * 11); //número aleatório entre 0 e 10
if (numero % 2 === 0) {
  console.log((`Número ${numero} é Par`));
} else {
  console.log((`Número ${numero} é Ímpar`));
}  


const numero2 = 7;

if(numero2 > 0 && numero2 <= 5){
  console.log('O número está entre 1 e 5');
} else if(numero2 >= 6 && numero2 <= 8){
  console.log('O número está entre 6 e 8');
} else if(numero2 === 9 || numero2 === 10){
  console.log('O número é 9 ou 10');
} else {
  console.log('Número inválido');
}