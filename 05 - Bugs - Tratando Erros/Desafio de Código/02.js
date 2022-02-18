//Se preparando para ler dados da entrada padrão
const stdin = process.openStdin();
//Lendo dados
stdin.addListener("data", (text) => {
  const textoLido = text.toString().trim().split("\n").map(Number);

  stdin.pause(); // para leitura
  main(textoLido);
});
function isPostivo(a) {
  //Informe seu código aqui
  if (a > 0) {
    return "Sim";
  } else if (a === 0) {
    throw new Error("Erro, Zero");
  } else {
    throw new Error("Erro, Negativo");
  }
}
function main(valores) {
  for (var valor of valores) {
    try {
      console.log(isPostivo(valor));
    } catch (error) {
      console.log(error.message);
    }
  }
}
