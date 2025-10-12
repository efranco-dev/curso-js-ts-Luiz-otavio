const nome = 'Luiz Otávio';

console.log("------- for clássico ------");
for (let i = 0; i < nome.length; i++) { 
    console.log(nome[i]);   
}

console.log("------- for in ------");

 for(let i in nome) {
    console.log(nome[i]);
    
 }
console.log("------- for of ------");

for(let i of nome) {
    console.log(i);
}
const nomes = ['Luiz', 'Otávio', 'Miranda', "henrique"];

console.log("------- forEach------");
 nomes.forEach(function(valor, indice){
    console.log(valor, indice);
    
 })
 

//for in - lê os índices ou chaves do objeto
//for of - lê os valores das propriedades do objeto
//for clássico - geralmente com iteráveis (array ou strings) - lê os índices
