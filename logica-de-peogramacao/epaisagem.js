//Escreva uma função chamadfa ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
//Retorne true se a imagem estiver no modo paisagem.
//Exemplo: ePaisagem(1920, 1080) // true

const ePaisagem = (largura, altura) => //arrow function
  largura > altura ? 'Piasagem' : 'retrato';

console.log(ePaisagem(1920, 1080));
