function Aritmetica() {
  this.a = a;
  this.b = b;
  this.subtracao = function (a, b) {
    return this.a - this.b;
  };
}
function sub(c, d) {
  this.a = c;
  this.b = d;
}
sub.prototype = new Aritmetica();

// console.log(sub.subtracao(10, 10));
var mm = new sub(20, 10);
console.log(mm.subtracao());

//Se preparando para ler dados da entrada padrão
const stdin = process.openStdin();

//Lendo dados
stdin.addListener("data", (text) => {
  const textoLido = text
    .toString()
    .trim()
    .split("\n")
    .map((s) => s.trim());

  stdin.pause(); // para leitura

  main(textoLido);
});

function Aritmetica() {
  this.subtracao = function (a, b) {
    return a - b;
  };
}

function Sub() {}

Sub.prototype = new Aritmetica();

function main(linhas) {
  let sub = new Sub();

  for (let linha of linhas) {
    const valores = linha
      .toString()
      .split(" ")
      .map((s) => s.trim())
      .map(Number);

    console.log(sub.subtracao(valores[0], valores[1]));
  }

  // Exibe os membros da subclasse
  console.log(Object.keys(sub));
  // Exibe o nome da superclasse
  console.log(Sub.prototype);
}
