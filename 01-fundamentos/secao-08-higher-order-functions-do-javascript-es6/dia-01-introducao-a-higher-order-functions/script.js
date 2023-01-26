// Parte I . 1
// Nova pessoa contratada
// Você ficou responsável por organizar o sistema de contratação de uma empresa e deve criar uma estrutura de dados que possua o formato { nomeCompleto, email } para representar a nova pessoa contratada. Além disso, você deve gerar os emails de cada pessoa que é contratada na empresa. Para isso:

// crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente gere um email no formato nome_da_pessoa@trybe.com;

// utilize a função newEmployees, definida abaixo, para receber a sua função como parâmetro e criar o objeto de cada pessoa contratada.


// const newEmployees = (emailGenerator) => {
//   const employees = {
//     id1: emailGenerator('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: emailGenerator('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: emailGenerator('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };

// const emailGenerator = (fullName) => {
//   const email = fullName.toLowerCase().split(' ').join('_');
//   return {fullName, email: `${email}@trybe.com`}
// }

// console.log(newEmployees(emailGenerator));

// ==========================================================================================

// Parte I . 2
// Sorteador de loteria
// Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).
// const checkNumber = (betNumber, number) => betNumber === number; 

// const raffle = (betNumber, callback) => {
//   const number = Math.floor((Math.random() * 5) + 1);
  
//   return callback(betNumber, number) ? 'Parabéns, você ganhou' : 'Tente novamente';
// }
// console.log(raffle(3, checkNumber));

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

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if ( studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
}

const counter = (rightAnswers, studentAnswers, compare) => {
  let count = 0;
  for (let index = 0; index < rightAnswers.length; index += 1){
    const compareReturn = compare(rightAnswers[index], studentAnswers[index]);
    count += compareReturn;
  }
  return `Resultado final: ${count} pontos`;
};

console.log(counter(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));
