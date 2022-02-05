// Sem objetos, teríamos que criar variáveis desta forma
const nome = "O Senhor dos Anéis";
const ano = 1954;
const autor = "J. R. R. Tolkien";

const nomeFilme = "O Senhor dos Anéis";
const anoFilme = 2001;
const diretorFilme = "Peter Jackson";

// Com objetos
const livro = {
  nome: "O Senhor dos Anéis",
  ano: 1954,
  autor: "J. R. R. Tolkien",
};

const filme = {
  nome: "O Senhor dos Anéis",
  ano: 2001,
  diretor: "Peter Jackson",
};

console.log(livro);
console.log(livro.nome);
console.log(livro.ano);
console.log(2021 - livro.ano);
console.log(livro.nome + ", " + livro.ano);

console.log(filme);
console.log(filme.diretor);

//Arredondando
const preco = 2.99;
const precoArredondado = "R$ " + preco.toFixed();
console.log(precoArredondado);

const decimal = 122.99;
console.log(Number(decimal.toFixed()) + 3);
console.log(3);

const total = decimal.toFixed();
console.log(total);
