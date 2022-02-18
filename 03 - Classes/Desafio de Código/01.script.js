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

  main(textoLido[0]);
});
// Informe sua classe aqui
class Poligono {
  constructor(a) {
    this.a = a;
  }
  perimetro() {
    var total = 0;
    for (var i = 0; i < this.a.length; i++) {
      total += this.a[i];
    }
    return total;
  }
}
function main(valores) {
  let dados = valores
    .split(" ")
    .map((s) => s.trim())
    .map(Number);
  try {
    let poligono = Poligono(dados);
  } catch {
    poligono = new Poligono(dados);

    console.log(poligono.perimetro());
  }
}
