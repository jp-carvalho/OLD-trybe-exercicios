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

// function check(word, ending){
//   word = word.split('');
//   ending = ending.split('');

//   let checkEnding = true;

//   for (let index = 0; index < ending.length; index += 1) {
//     if (word[word.length - ending.length + index] != ending[index]) {
//       checkEnding = false;
//     }
//   }

//   return checkEnding;
// }

// console.log(check('trybe', 'be'));
// console.log(check('joaofernando', 'fernan'));


// Exercicio Bonus 01
// (Bônus) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

// Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!

// Dicas:

// Uma string é um array de caracteres, então cada elemento do array é uma letra.
// O valor de cada numeral romano é:

// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |

// Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?

// Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.

// const numerosRomanos = {
//     i: 1,
//     v: 5,
//     x: 10,
//     l: 50,
//     c: 100,
//     d: 500,
//     m: 1000,
// };

// function converteRomano(number) {
//   number = number.toLowerCase();
//   const len = number.length;
//   let sum = numerosRomanos[number[len -1]];
//   let atual = numerosRomanos[number[len - 1]];

//   for (let index =2; index <= len; index +=1) {
//     const proximo = numerosRomanos[number[len - index]];

//     if (atual <= proximo) {
//       sum += proximo;
//     } else {
//       sum -= proximo;
//     }

//     atual = proximo;
//   }

//   return sum;
// }

// console.log(converteRomano('MMXVIII'));
// console.log(converteRomano('VI'));
// console.log(converteRomano('IV'));


// exercicio Bonus 02
//Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro.

// Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array, que deverá ser retornado ao final pela função.

// let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

// function arrayOfNumbers(vector) {
//   const result = [];
//   for (let index = 0; index < vector.length; index += 1){
//     const numbers = vector[index];

//     for (let index2 = 0; index2 < numbers.length; index2 += 1) {
//       const current = numbers[index2];

//       if ((current % 2) === 0) {
//         result.push(current);
//       } 
//     }
//   }

//   return result;
// }

// console.log(arrayOfNumbers(vector));


//exercicio Bonus 03
//A partir do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array [‘Melancia’, ‘Abacate’, ‘Melancia’, ‘Melancia’, ‘Uva’], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.

// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

// const basket = [
//   'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
//   'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
//   'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
//   'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
//   'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
//   'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
//   'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
//   'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
//   'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
//   'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
//   'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
//   'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
//   'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
//   'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
//   'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
//   'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
//   'Banana', 'Pera', 'Abacate', 'Uva',
// ];


// const result = {};

// for (let index = 0; index < basket.length; index += 1){
//   const fruit = basket[index];
//   if (!result[fruit]) result[fruit] = 0;  //Quinto Passo
//   result[fruit] += 1;
// }

// const summaries = [];

// for (fruit in result) {    //sexto passo
//   let message = `${result[fruit]} ${fruit}`;   //setimo passo
//   if (result[fruit] > 1) message += 's';
//   summaries.push(message);   //oitavo passo
// }

// console.log(`Sua cesta possui: ${summaries.join(', ')}.`);


//exercicio Bonus 04
//Usando o objeto abaixo, faça o que for pedido a seguir:
//Acesse as chaves nome, sobrenome, andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: “O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101”.

// Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome. Depois faça o mesmo para os moradores do bloco 2.

let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

let moradoresBlocoDois = moradores.blocoDois;
let ultimoMoradorBlocoDois = moradoresBlocoDois[moradoresBlocoDois.length -1];

console.log('O morador do bloco 2 de nome ' + ultimoMoradorBlocoDois.nome + ' ' + ultimoMoradorBlocoDois.sobrenome + ' ' + ultimoMoradorBlocoDois.andar + '° andar, apartamento ' + ultimoMoradorBlocoDois.apartamento);

for (let index = 0; index < moradores.blocoUm.length; index += 1) {
  console.log(moradores.blocoUm[index].nome + ' ' + moradores.blocoUm[index].sobrenome);
}

for (let index = 0; index < moradores.blocoDois.length; index += 1) {
  console.log(moradores.blocoDois[index].nome + ' ' + moradores.blocoDois[index].sobrenome);
}