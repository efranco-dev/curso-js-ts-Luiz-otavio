//while e do while

console.log('---------- while -----------');
let i = 0;

while (i <= 10) {
  console.log(i);
  i++;
}
//Explicação: Enquanto i for menor ou igual a 10, ele vai imprimir o valor de i e depois incrementar 1 ao valor de i.

console.log('---------- do while -----------');

let j = 0;

do {
  console.log(j);
  j++;
} while (j <= 10);

//Explicação: Ele vai executar o bloco de código uma vez, e depois verificar a condição. Se a condição for verdadeira, ele vai continuar executando o bloco de código até que a condição seja falsa.

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);//Math.floor arredonda para baixo.
}
console.log("----- números aleatórios de 1 a 50 -----");

let rand = random(1, 50);

const min = 1;
const max = 50;

while(rand !== 10){
    rand = random(min, max);
    console.log(rand);
}


