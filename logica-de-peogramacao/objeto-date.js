/* const tresHoras = 60 * 60 * 3 * 1000;
const data = new Date(tresHoras)
console.log(data.toString());
 */

const data = new Date(2019, 3, 20, 15, 14, 27, 999);
console.log(data.toString());
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);    
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia da semana', data.getDay());

function formatadaData(data2){
    const dia = data2.getDate().toString().padStart(2, '0');
    const mes = (data2.getMonth() + 1).toString().padStart(2, '0');
    const ano = data2.getFullYear();
    const hora = data2.getHours().toString().padStart(2, '0');
    const min = data2.getMinutes().toString().padStart(2, '0');
    const seg = data2.getSeconds().toString().padStart(2, '0');
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data2 = new Date()
const dataBrasil = formatadaData(data2)
console.log(dataBrasil);

//padStart =  o que fazer para completar o valor, quantos caracteres no total
