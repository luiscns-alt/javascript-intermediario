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
class Veiculo {
  constructor(tipo) {
    this.tipo = tipo;
  }

  getTipo() {
    return this.tipo;
  }
}
//Informe seu código aqui
class Carro extends Veiculo {
  setTipo(tipo) {
    this.tipo = tipo;
  }
  getTio() {
    console.log("Classe do tipo Carro");
    super.getTipo();
  }
}
function main(texto) {
  try {
    let carro = Carro(texto);
  } catch {
    carro = new Carro(texto);

    console.log(carro.getTipo());

    //Nome da classe herdada
    console.log(carro.__proto__.__proto__.constructor.name);
  }
}
