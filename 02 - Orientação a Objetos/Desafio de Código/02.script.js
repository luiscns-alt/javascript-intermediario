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
//Defina seu código aqui
function Curso(nome, descricao) {
  this.nome = nome;
  this.descricao = descricao;
  this.getNome = function () {
    return nome;
  };
  this.setNome = function (value) {
    nome = value;
  };
  this.getDescricao = function () {
    return descricao;
  };
  this.setDescricao = function (value) {
    descricao = value;
  };
}
function main(valores) {
  let curso = new Curso();
  curso.setNome(valores[0]);
  curso.setDescricao(valores[1]);

  console.log(curso.getNome());
  console.log(curso.getDescricao());
}
