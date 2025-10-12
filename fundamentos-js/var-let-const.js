let verdadeira = true;
//diferença entre var let e const

//var - escopo global ou de função
//let - escopo de bloco {...bloco}
//const - escopo de bloco {...bloco} - valor não pode ser alterado
function falaOi() {
    console.log('Oi');
    if(verdadeira){
        let nome = "Luiz"
    }
}   
falaOi();

const souUmDado = function() {
    console.log('Sou um dado.');
}
souUmDado();