function mostrarHora() {
  let data = new Date();

  return data.toLocaleTimeString('pt-BR', {});
}

const timer = setInterval(() => {
  console.log(mostrarHora());
}, 1000);

setTimeout(() => {
  clearInterval(timer);
}, 3000);
setTimeout(() => {
  console.log('Olá, Mundo!');
}, 5000);
