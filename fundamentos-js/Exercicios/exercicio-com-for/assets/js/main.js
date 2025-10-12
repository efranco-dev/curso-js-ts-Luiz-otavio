const elementos = [
  { tag: 'p', texto: 'p é uma tag de parágrafo' },
  { tag: 'div', texto: 'div é uma tag de divisão' },
  { tag: 'section', texto: 'section é uma tag de seção' },
  { tag: 'footer', texto: 'footer é uma tag de rodapé' },
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag);
  let textoCriado = document.createTextNode(texto)

  tagCriada.appendChild(textoCriado)
  div.appendChild(tagCriada)
}
container.appendChild(div)

//manupulação do DOM
//criar elementos, adicionar elementos, remover elementos, alterar elementos
//elemento pai, elemento filho, elemento irmão
//innerHTML, textContent, value
//atributos, estilos, classes
//eventos
//trabalhar com arrays e objetos