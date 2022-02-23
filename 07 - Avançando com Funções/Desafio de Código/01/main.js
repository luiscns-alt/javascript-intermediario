//Se preparando para ler dados da entrada padrão
const stdin = process.openStdin();
//Lendo dados
stdin.addListener("data", (text) => {
  const textoLido = text.toString().trim();

  stdin.pause(); // para leitura
  main(Number(textoLido));
});
function hanoi(n) {
  //Informe seu código aqui
  if (n === 1) {
    return 1;
  } else {
    return 2 * hanoi(n - 1) + 1;
  }
}
function main(valor) {
  console.log(hanoi(valor));
}
