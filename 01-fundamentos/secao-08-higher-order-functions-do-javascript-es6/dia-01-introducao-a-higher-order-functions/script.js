// Parte I . 1
// Nova pessoa contratada
// Você ficou responsável por organizar o sistema de contratação de uma empresa e deve criar uma estrutura de dados que possua o formato { nomeCompleto, email } para representar a nova pessoa contratada. Além disso, você deve gerar os emails de cada pessoa que é contratada na empresa. Para isso:

// crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente gere um email no formato nome_da_pessoa@trybe.com;

// utilize a função newEmployees, definida abaixo, para receber a sua função como parâmetro e criar o objeto de cada pessoa contratada.

// const newEmployees = (callBack) => {
//   const employees = {
//     id1: callBack('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: callBack('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: callBack('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };

// const emailGenerator = (fullName) => {
//   const email = fullName.toLowerCase().replace('', '_');
//   return { fullName, email: `${email}@trybe.com`};
// }
// console.log(newEmployees(emailGenerator));
// ==========================================================================================

// Parte I . 2
// Sorteador de loteria
// Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).

// const checkNumber = (myNumber, number) => myNumber === number;

// const result = (myNumber, callBack) => {
//   const number = Math.floor((Math.random() *5 ) +1 )

//   return callBack(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
// }

// console.log(result(2, checkNumber));

// ==========================================================================================


// Parte I . 3
// Corretor automático de exame
// Crie uma HOF que receberá três parâmetros:

// O primeiro será um array de respostas corretas (soluções);

// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;

// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:

// Uma resposta correta adiciona 1 ponto à pontuação final;

// A ausência de uma resposta não altera a pontuação (quando for “N.A”);

// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.

// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const compareAnswers = (rightAnswer, studentAnswer) => {
//   if (rightAnswer === studentAnswer){
//     return 1;
//   } if (studentAnswer === 'N.A') {
//     return 0;
//   }
//   return -0.5;
// }

// const countPoints = (rightAnswer, studentAnswer, compare) => {
//   let counter = 0;
//   for (let index = 0; index < rightAnswer.length; index += 1) {
//     const actionReturn = compare(rightAnswer[index], studentAnswer[index]);
//     counter += actionReturn;
//   }
//   return `Resultado final: ${counter} pontos`;
// };

// console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));3

// ==========================================================================================


// Parte I . 4
// Utilize o seguinte código como template para realizar os exercícios:
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

// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
// const expectedResult = 'Stephen King';
const authorBornIn1947 = () => {
  return books.find((book) => book.author.birthYear === 1947).author.name;
}

// Retorne o nome do livro com menor número de caracteres (menor nome).
// const expectedResult = 'Duna';
const smallerName = () => {
  let nameBook;
  books.forEach((book) => {
    // O primeiro operador é o not (!) antes de nameBook. Fazemos isso porque, como a variável nameBook não guarda nenhum valor, ela retorna undefined por padrão, e consequentemente o JavaScript a interpreta como um valor falsy, que se traduz como false. Desta maneira, ao utilizar o operador not (!) antes de nameBook, você nega que ele seja falso, ou seja, converte-o para true.
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
    // Dessa forma, na primeira iteração, como nameBook é undefined, ou seja, não guarda o nome de nenhum livro, o primeiro nome de livro será guardado em nameBook. A partir da segunda iteração, é feita a comparação, e se o nome do livro for menor que o que está guardado em nameBook, este irá tomar seu lugar. Esse processo se repete até a última iteração.
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

// Encontre o primeiro livro cujo nome possua 26 caracteres.
const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

const getNamedBook = () => {
  books.find((book) => book.name.length === 26);
}

// Faça uma função que retorne true se todas as pessoas autoras tiverem nascido no século XX, ou false, caso contrário.
const expectedResult = false;

function everyoneWasBornOnSecXX() {
  return books.every((book) => {
    (book.author.birthYear >= 1901 && book.author.birthYear <=2000);
  })
}

// Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
const expectedResult = true;

const someBookWasReleaseOnThe80s = () => {
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990)
}

// Faça uma função que retorne true, caso nenhuma pessoa autora tenha nascido no mesmo ano, e false, caso contrário.
const expectedResult = false;

const authorUnique = () => {
  return books.every((book) => 
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear) && (bookSome.author.name !== book.author.name)
  ))
}


