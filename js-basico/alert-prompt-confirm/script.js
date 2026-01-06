//Alert Prompt Confirm
//alert('Apresenta uma mensagem');
/* const confirma = confirm('Deseja apagar a mensagem');
if (confirma) {
    const nome = prompt('Qual o seu nome?');
    alert(`Mensagem apagada com sucesso! ${nome}`);
} else {
    alert('Ação cancelada pelo usuário!');
}
 */
//Exercicio
const num1 = parseFloat(prompt('Digite o primeiro número:'));
const num2 = parseFloat(prompt('Digite o segundo número:'));
const operacao = prompt('Escolha a operação: +, -, *, /');


let resultado;switch (operacao) {
    case '+':
        resultado = num1 + num2;    
        break;
    case '-':
        resultado = num1 - num2;
        break;
    case '*':
        resultado = num1 * num2;
        break;
    case '/':
        resultado = num1 / num2;
        break;
    default:
        alert('Operação inválida!');
}
alert(`Resultado: ${resultado}`);