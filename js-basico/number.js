let num1 = 10.98797504305 //number
let num2 = 2.5 //number com ponto flutuante

console.log(num1.toFixed(2)) //define o número de casas decimais
console.log(Number.isInteger(num1)) //verifica se é inteiro
console.log(Number.isInteger(num2)) //verifica se é inteiro

console.log(num1.toString() + num2) //converte number para string
console.log(typeof num1) //verifica o tipo da variável

//exercicio
let num3 = parseInt("5") //converte string para number inteiro
let num4 = parseFloat("5.2") //converte string para number floatante
console.log(num3 + num4)
console.log(typeof num3) //verifica o tipo da variável
console.log(typeof num4) //verifica o tipo da variável