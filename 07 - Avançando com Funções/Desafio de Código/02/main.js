//Se preparando para ler dados da entrada padrão
const stdin = process.openStdin();
//Lendo dados
stdin.addListener("data", (text) => {
  const textoLido = text.toString().trim();

  stdin.pause(); // para leitura
  main(Number(textoLido));
});
function exibirValorX(modulo) {
  var obtemX = modulo.getX;

  //Altere este trecho
  console.log(obtemX.call(modulo));
}
function escopo(valor) {
  this.x = 9;
  var modulo = {
    x: valor,
    getX: function () {
      return this.x;
    },
  };

  return modulo;
}
function main(valor) {
  var modulo = escopo(valor);
  exibirValorX(modulo);
}

//Se preparando para ler dados da entrada padrão
const stdin = process.openStdin();

//Lendo dados
stdin.addListener("data", (text) => {
  const textoLido = text.toString().trim();

  stdin.pause(); // para leitura

  main(Number(textoLido));
});

function exibirValorX(modulo) {
  var obtemX = modulo.getX;

  var getX = obtemX.bind(modulo);

  console.log(getX());
}

function escopo(valor) {
  this.x = 9;
  var modulo = {
    x: valor,
    getX: function () {
      return this.x;
    },
  };

  return modulo;
}

function main(valor) {
  var modulo = escopo(valor);
  exibirValorX(modulo);
}
