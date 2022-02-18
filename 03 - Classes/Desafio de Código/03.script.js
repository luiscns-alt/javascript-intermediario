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
//Informe sua classe aqui
class Veiculo {
  constructor(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
  }
  setNome(nome) {
    this.nome = nome;
  }
  getNome() {
    return this.nome;
  }
  setTipo(tipo) {
    this.tipo = tipo;
  }
  getTipo() {
    return this.tipo;
  }
}
class Carro extends Veiculo {}
function main(linhas) {
  try {
    let carro = Carro(texto);
  } catch {
    carro = new Carro();

    carro.setNome(linhas[0]);
    carro.setTipo(linhas[1]);
    console.log(carro.getNome());
    console.log(carro.getTipo());
  }
}
