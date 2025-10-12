const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const backgroundColorBody = estiloBody.backgroundColor;

console.log(backgroundColorBody);

for (const p of ps) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = '#FFFFFF'
  p.style.padding = '5px'
  p.style.borderRadius = '10px'
}
