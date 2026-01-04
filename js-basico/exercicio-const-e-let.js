/* 
Luiz Otávio tem 37 anos, pesa 84 kg, tem 1.80 de altura
e seu IMC é de 25.9. Luiz Otávio nasceu em 1989.
*/
let nome = 'Luiz Otávio';
let sobrenome = 'Miranda';
let anoNascimento = 1989;
let anoAtual = 2026;
let idade = anoAtual - anoNascimento;
let peso = 84;
let altura = 1.80;
let imc = peso / (altura * altura);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} de altura
e seu IMC é de ${imc.toFixed(2)}. ${nome} nasceu em ${anoNascimento}.`);