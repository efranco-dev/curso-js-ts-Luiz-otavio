let varA = 'A';
let varB = 'B';
let varC = 'C';

// Fazendo a troca de valores
let temp = varA; // Armazena o valor de varA temporariamente
varA = varB;// Atribui o valor de varB a varA
varB = varC; // Atribui o valor de varC a varB
varC = temp; // Atribui o valor temporário (original de varA) a varC  

console.log(varA, varB, varC);
