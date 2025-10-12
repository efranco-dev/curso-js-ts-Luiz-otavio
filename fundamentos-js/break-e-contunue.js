const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let numero of numeros) {
  if (numero === 2) {
    console.log('Pulei o número 2');
    continue; // Pula a iteração atual quando o número é 2
  }

  if (numero === 7) {
    console.log('7 encontrado, saindo do loop.');
    break; // Sai do loop quando o número é 7
  }
  console.log('Número:', numero);
}
