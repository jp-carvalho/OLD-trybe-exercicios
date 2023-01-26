const { books } = require("../data/library");

// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

const expectedResult1 = "Stephen King";
const authorBornIn1947 = () =>
  books.find((book) => book.author.birthYear === 1947).author.name;
// console.log(authorBornIn1947());

// Retorne o nome do livro com menor número de caracteres (menor nome).
const expectedResult2 = "Duna";
const smallerName = () => {
  let nameBook = books.find((book) => true).name;
  books.forEach((book) => {
    if (book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
};
console.log(smallerName());

// Encontre o primeiro livro cujo nome possua 26 caracteres.
const expectedResult3 = {
  author: {
    birthYear: 1948,
    name: "George R. R. Martin"
  },
  genre: "Fantasia",
  id: 1,
  name: "As Crônicas de Gelo e Fogo",
  releaseYear: 1991
};

const getNamedBook = () => books.find((book) => book.name.length === 26);
console.log(getNamedBook());

// Faça uma função que retorne true se todas as pessoas autoras tiverem nascido no século XX, ou false, caso contrário.
const expectedResult4 = false;

function everyoneWasBornOnSecXX() {
  return books.every(
    (book) => book.author.birthYear > 1901 && book.author.birthYear < 2000
  );
}
console.log(everyoneWasBornOnSecXX());

// Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
const expectedResult5 = true;

const someBookWasReleaseOnThe80s = () => {
  // escreva seu código aqui
};

// Faça uma função que retorne true, caso nenhuma pessoa autora tenha nascido no mesmo ano, e false, caso contrário.
const expectedResult6 = false;

const authorUnique = () => {
  books.every((book) => {
    const authorYear = book.author.birthYear;
    books.some((book2) => {
      return (
        book.author.name !== book2.author.name &&
        book.author.birthYear === book2.author.birthYear
      );
    });
  });
};
console.log(authorUnique)
