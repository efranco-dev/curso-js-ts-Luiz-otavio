/**
 * Const e Let
 * Luiz Otávio Miranda tem 30 anos, pesa 84kg de altura,
 * tem 1.80m de altura e seu IMC é de 25.9.
 * Luiz Otávio nasceu em 1984
 */
const nome = "Luiz Otávio";
const sobrenome = "Miranda";
const idade = 41;
const peso = 84;
const alturaEmCm = 180;
const imc = peso / ((alturaEmCm / 100) * (alturaEmCm / 100));
const anoNascimento = 1984;

const dataAtual = new Date().getFullYear();

const idadeAtual = dataAtual - anoNascimento;

console.log(
  `${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg de altura, 
  tem ${alturaEmCm / 100}m de altura e seu IMC é de ${imc.toFixed(2)}.`
);
console.log(`${nome} nasceu em ${anoNascimento}.`);
