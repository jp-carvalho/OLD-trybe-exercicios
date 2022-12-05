// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

  //exercicio 01
//   Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave.
//   console.log('Bem vinda, ' + info.personagem);


 //exercicio 02 
//   Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor.

// info.recorrente = 'Sim';

// console.log(info);


// exercicio 03
// Faça um for/in que mostre todas as chaves do objeto.

// for (let key in info ) {
//     console.log(key);
// }


// exercicio 04
// Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.

// for (let key in info) {
//     console.log(info[key]);
// }


// exercicio 05
// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. ( Ambos recorrentes // Atenção para essa última linha!)

// OBS: AMBOS RECORRENTES COM IF/ELSE DE COMPARAÇÃO - GABARITO

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim',
//   };

//   for (let key in info, info2) {
//     if( key === 'recorrente' && info[key] === 'Sim' && info2[key] === 'Sim' ) {
//         console.log('Ambos recorrentes');
//     } else {
//     console.log(info[key] + ' e ' + info2[key]);
//     }
// }


//Usando o objeto abaixo, faça os exercícios a seguir:
// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };


//exercicio 06
//   Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.
// for (key in leitor ) {
//     console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '".');
// }

//exercicio 07
// Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto contendo as seguintes informações:

// leitor.livrosFavoritos.push (
//     {
//         titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//         autor: 'JK Rowling',
//         editor: 'Rocco',
//     },
// );


//exercicio 08
// Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem <quantidade> livros favoritos”, onde “<quantidade>” é um número gerado automaticamente pelo seu código.

// console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');



//exercicio funções

//exercicio 01
// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// function palindrome( word ) {
//   let reverse = word.split('').reverse().join('');
//     if (reverse === word){
//       return true;
//     } else {
//       return false;
//     }
// }

// console.log(palindrome('arara'));
// console.log(palindrome('desenvolvimento'));

//exercicio 02
//Crie uma função que receba um array de inteiros e retorne o índice do maior valor. Valor esperado no retorno da função: 4.

// teste: [2, 3, 6, 7, 10, 1];

// function biggest(number){
//   let bigNumber = 0;
//   for ( let index in number) {
//     if (number[bigNumber] < number[index]) {
//       bigNumber = index;
//     }
//   }

//   return bigNumber;

// }
// console.log(biggest([2, 3, 6, 7, 10, 1]));


//exercicio 03
//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.Valor esperado no retorno da função: 6.

// teste: [2, 4, 6, 7, 10, 0, -3];.

// function smallest(number) {
//   let smallNumber = 0;
//   for (let index in number) {
//     if (number[smallNumber] > number[index]){
//       smallNumber = index;
//     }
//   }

//   return smallNumber;
// }

// console.log(smallest([2, 4, 6, 7, 10, 0, -3]));


//exercicio 04
// /Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres. Valor esperado no retorno da função: Fernanda.

// teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
 
// function biggestName(name) {
//   let mostCharacteres = name[0];
//   for(index in name) {
//     if (mostCharacteres.length < name[index].length){
//       mostCharacteres = name[index];
//     }
//   }

//   return mostCharacteres;
// }

// console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


// exercicio 05
// // Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete. Valor esperado no retorno da função: 2.

// //teste: [2, 3, 2, 5, 8, 2, 3];

// function repeats(number) {
//   let contRepeat = 0;
//   let contNumber = 0;
//   let indexCont = 0;

//     for (let index in number) {
//       let checkNumber = number[index];
//       for (let index2 in number) {
//         if (checkNumber === number[index2]){
//           contNumber +=1;
//         }
//       }

//       if(contNumber > contRepeat) {
//         contRepeat = contNumber;
//         indexCont = index;
//       }
//       contNumber = 0;
//   }

//   return number[indexCont];
// }

// console.log(repeats([2, 3, 2, 5, 8, 2, 3]));


//exercicio 06
//Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N. Valor esperado no retorno da função: 1+2+3+4+5 = 15.

//teste: N = 5.

// function sum(number) {
//   let total = 0;

//   for (let index =1; index <= number; index += 1){
//     total = total += index;
//   }

//   return total;
// }

// console.log(sum(5));


//exercicio 07

// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word. Valor esperado no retorno da função: true

//teste: 'trybe' e 'be'

// verificaFimPalavra('trybe', 'be');

// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');

// Retorno esperado: false

function check(word, ending){
  word = word.split('');
  ending = ending.split('');

  let checkEnding = true;

  for (let index = 0; index < ending.length; index += 1) {
    if (word[word.length - ending.length + index] != ending[index]) {
      checkEnding = false;
    }
  }

  return checkEnding;
}

console.log(check('trybe', 'be'));
console.log(check('joaofernando', 'fernan'));