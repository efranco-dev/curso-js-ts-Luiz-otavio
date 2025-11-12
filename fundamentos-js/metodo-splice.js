//                -5        -4      -3          -2        -1
//                0          1       2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

//nomes.splice(indice, delete, elem1, elem2, elem3);

//const removidos = nomes.splice(3, 2); // indice(3) e quantos elementos vai deletar(2)
//const removidos = nomes.splice(-2, Number.MAX_VALUE);
/* const removidos = nomes.splice(3, 2, 'Luiz', 'Otávio'); 
console.log(nomes, removidos); */

//simulando shift
const removidos2 = nomes.splice(0, 1); 
console.log(nomes, removidos2);

//simulando unshift
nomes.splice(0,0,"luiz", "Otávio")
console.log(nomes);

/***
 * O splice pode ser usado como pop, shift, push, unshift
 */

