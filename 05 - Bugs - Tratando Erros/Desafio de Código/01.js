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

function inverterString(s) {
  try {
    console.log(s.split("").reverse().join(""));
  } catch (error) {
    console.log(error.message);
    console.log(s);
  }
}

function main(valor) {
  inverterString(eval(valor));
}
