let umaString = "O rato roeu a roupa do rei de roma"; 
console.log(umaString);

console.log(umaString.charAt(6));
console.log(umaString.concat("um "," lindo ","dia"));// conatenação não usada

console.log(umaString.indexOf('o',3));
console.log(umaString.match(/[a-z]/g)); //expressão regular

console.log(typeof umaString.indexOf);
console.log( umaString.replace(/r/g, "#"));
console.log(umaString.length);
console.log(umaString.slice(2, 6));//começa do 2 e vai até o 6
console.log(umaString.slice(-5));//começa do final
console.log(umaString.split(' ', 3));//quebra a string em array


