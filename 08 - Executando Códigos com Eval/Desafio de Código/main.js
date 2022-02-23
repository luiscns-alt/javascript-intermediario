//Se preparando para ler dados da entrada padrão
const stdin = process.openStdin();
//Lendo dados
stdin.addListener("data", (text) => {
  const textoLido = text
    .toString()
    .trim()
    .split("\n")
    .map((s) => eval(s.trim()));

  stdin.pause(); // para leitura
  main(textoLido);
});
function getType(o) {
  return o && o.constructor && o.constructor.name;
}
function main(valores) {
  for (let valor of valores) {
    eval("console.log(getType(valor));");
    // Informe seu código aqui
  }
}
