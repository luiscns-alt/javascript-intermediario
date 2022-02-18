// /Se preparando para ler dados da entrada padrão
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
function MeuObjeto(curso, descricao) {
  this.curso = curso;
  this.descricao = descricao;
}
function main(valores) {
  let obj = new MeuObjeto(valores[0], valores[1]);
  console.log(obj.curso);
  console.log(obj.descricao);
}
