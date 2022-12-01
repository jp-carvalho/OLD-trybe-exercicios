//exercicio 01
//Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
//exemplo:
// n = 5

// *****
// *****
// *****
// *****
// *****

// let number = 5;
// let symbol = '*';
// let line = '';

// for ( let index = 0; index < number; index += 1){
//     line = line + symbol;
// }

// for (let index = 0; index < number; index += 1) {
//     console.log(line);
// }

//exercicio 02
//Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// n = 5

// *
// **
// ***
// ****
// *****

// let number = 5;
// let symbol = '*';
// let line = '';

// for (let index = 0; index <= number; index += 1) {
//     console.log( line + symbol);
//     line = line + symbol;
// }

//exercicio 03
//Agora inverta o lado do triângulo. Por exemplo:
// n = 5

//     *
//    **
//   ***
//  ****
// *****

// let number = 5;
// let symbol = '*';
// let line = '';
// let position = number;

// for (let index = 0; index < number; index += 1) {
//     for (let column = 0; column <= number; column += 1){
//         if ( column < position) {  
//             line = line + ' ';
//         }else {
//             line = line + symbol;
//         }
//     }
//     console.log(line);
//     line = '';
//     position -= 1;

// };
//LINHA 60 - confere se a posição da coluna é menor que a base (total)


//exercicio 04
// Depois, faça uma pirâmide com n asteriscos de base:
// n = 5

//   *
//  ***
// *****

// let number = 5;
// let symbol = '*';
// let line = '';

// let triangleMid = (number +1) / 2; 
// let left = triangleMid; 
// let right = triangleMid;


// for (let index = 0; index <= triangleMid; index += 1) { 
//     for (let column = 0; column <= number; column += 1){
//         if ( column > left && column < right) { 
//             line = line + symbol;
//         }else {
//             line = line + ' ';
//         }
//     }
//     console.log(line);
//     line = '';
//     right += 1; 
//     left -= 1; 
// };

//LINHA 85 - let position = number;  Não é necessário pq a posicao é definida pelo meio do triangulo calculado abaixo
//LINHA 86 - o meio é o valor da base +1 / 2 (no caso 3 )
//LINHA 87 - controle da esquerda e direita contam a partir do meio
//LINHA 91 - a altura deixa de ser relacionada ao number e passa a ser relacionada ao meio da base (3)
//LINHA 101/102 - controla a posição do centro para ambos os lados

//exercicio 05
// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
// n = 7

//    *
//   * *
//  *   *
// *******

// let number = 7;
// let symbol = '*';

// let triangleMid = (number +1) / 2; 
// let left = triangleMid; 
// let right = triangleMid;


// for (let index = 1; index <= triangleMid; index += 1) { 
//     let line = '';
//     for (let column = 1; column <= number; column += 1){
//         if ( column == left || column == right || index == triangleMid ) { 
//             line = line + symbol;
//         }else {
//             line = line + ' ';
//         }
//     }
//     console.log(line);
//     line = '';
//     right += 1; 
//     left -= 1; 
// };

//Não entendi

//exercicio 06
// Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele por quaisquer outros números dá resto diferente de zero.

// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido. Além disso, vai precisar fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

let number = 2;
let divisors = 1;

for(let index = 2; index <= number; index += 1) {
    if  (number % index === 0) divisors += 1;
}
if (divisors === 2) console.log(number + ' é primo');
else console.log(number + ' não é primo');

// let divisors = 1;
// let numberToCheck = 31;

// for (let number = 2; number <= numberToCheck; number += 1) {
//   if (numberToCheck % number === 0) divisors += 1;
// }

// if (divisors === 2) console.log(numberToCheck + ' é primo');
// else console.log(numberToCheck + ' não é primo');