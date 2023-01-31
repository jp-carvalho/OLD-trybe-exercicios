const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// 6 - Encontre o primeiro resultado cujo nome registrado começa com três iniciais e retorne o nome do livro.
// De olho na dica 👀: cada inicial termina com um ponto.
// const expectedResult = 'O Senhor dos Anéis';

// const authorWith3DotsOnName = () => {
  // O primeiro vem no índice 1, após ele temos um espaço, outra letra e então o outro ponto, no índice 4. O terceiro ponto segue a mesma lógica e fica no índice 7.
  // return books.filter((book) => (book.author.name[1] === '.' && book.author.name[4] === '.' && book.author.name[7] === '.')).map((book) => book.name);
// }
// console.log(authorWith3DotsOnName());

// ======================================================================================================
const expectedResult = 'O Senhor dos Anéis';

const authorWith3DotsOnName = () => {
  return books.find((book) => (book.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3)).name;
}
console.log(authorWith3DotsOnName());
