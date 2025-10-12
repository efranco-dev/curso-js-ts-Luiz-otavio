/* try...catch...throw */

/* function soma(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('x e y precisam ser números.');
  }
  return x + y;
}

try {
  console.log(soma(1, 2));
  console.log(soma('2', 3));
} catch (err) {
  console.log('Alguma coisa mais amigável para o usuário.');
} finally {
  console.log('Sempre executa');
}

try {
  console.log(a);
  console.log('Abri um arquivo');
  console.log('Manipulei o arquivo e gerou um erro');
  console.log('Fechei o arquivo');
} catch (error) {
  console.log('Ocorreu um erro: ' + error.message);
} finally {
  console.log('FINALLY: Eu sempre sou executado');
}
 */
function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando instância de Date.');
  }
  if (!data) {
    data = new Date();
  }
  return data.toLocaleTimeString('pt-BR', {});
}

try {
  const data = new Date('01-01-1970 12:58:12');
  const hora = retornaHora();
  console.log(hora);
} catch (error) {
    //tratar erro
}finally{
    console.log("tenha um bom dia");
    
}
