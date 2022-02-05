// function Livro(nome, ano, autor) {
//   const nomeMaiusculo = nome.toUpperCase();
//   const totalAnos = 2050 - ano;
//   const frase = nome + " por " + autor;

//   const objLivro = {
//     título: nomeMaiusculo,
//     anosPassados: totalAnos,
//     frase,
//   };

//   return objLivro;
// }

function Livro(nome, ano, autor) {
  return {
    título: nome.toUpperCase(),
    anosPassados: 2050 - ano,
    frase: nome + " por " + autor,
  };
}

const retornoFuncao = Livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");

console.log(retornoFuncao.frase);
