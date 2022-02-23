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

function hasDigito(s) {
  var re = /\d/g;

  return re.test(s);
}

function main(linhas) {
  for (var linha of linhas) {
    try {
      console.log(hasDigito(linha));
    } catch (error) {
      console.log(error.message);
    }
  }
}
