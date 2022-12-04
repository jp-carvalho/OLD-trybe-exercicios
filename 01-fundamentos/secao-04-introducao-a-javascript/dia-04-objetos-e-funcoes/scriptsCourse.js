// Para fixar - Objetos

// let player ={
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: {
//         golden: 2,
//         silver: 3,
//     }
// };

// player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

// // console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

// console.log('A jogadora ' + player['name'] + ' ' + player['lastName'] + ' foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes.');

// console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata');

// Para fixar - For/in e For/off

// /Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

// for (let key in names){
//     console.log('Olá ' + names[key]);
// }


//Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

// for ( let key in car) {
//     console.log(key, car[key]);
// }

// video yt aula dia 04 - funções
// let statusCarro = 'desligado';
// let aceleracao = 0;
// let rotacaoDoVolante = 0;

// function ligarDesligar() {
// 	if (statusCarro === 'desligado') {
// 		statusCarro = 'ligado';
// 	} else {
// 		statusCarro = 'desligado';
// 		}
// 	return statusCarro;
// }

// function acelerar(incremento) {
// 	aceleracao = aceleracao + incremento;

// 	return 'Acelerando a ' + aceleracao + 'm/s';
// }

// function frear(decremento) {
// 	aceleracao = aceleracao + decremento;

// 	return 'Desacelerando a ' + aceleracao + 'm/s';
// }

// function girarVolante(anguloRotacao) {
// 	rotacaoDoVolante = anguloRotacao;

// 	return rotacaoDoVolante + 'graus';
// }

// console.log(ligarDesligar());
//  console.log(acelerar(50));
//  console.log(frear(15));
//  console.log(girarVolante(-45));
 

// para fixar - funções
//exercicio 01
// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

// function sum (num1, num2) {
//     return num1 + num2; 
// }

// function subt (num1, num2) {
//     return num1 - num2;
// }

// function multiply (num1, num2) {
//     return num1 * num2;
// }

// function division (num1, num2) {
//     return num1 / num2;
// }

// function mod (num1, num2) {
//     return num1 % num2;
// }

// console.log(mod(30, 20));

// const number1 = 20;
// const number2 = 10;

// function biggestNum (num1, num2) {
//     if ( num1 > num2) {
//         return ('O maior número é : ' + number1 );
//     } else {
//         return ('O maior numero é : ' + number2);
//     }
// };
// console.log(biggestNum());

//exercicio 02

// function biggestNum (num1, num2, num3) {
//     if ( num1 > num2 && num1 > num3 ) {
//         return ('O maior número é : ' + num1 );
//     } else if (num2 > num1 && num2 > num3) {
//         return ('O maior numero é : ' + num2);
//     } else {
//         return ('O maior numero é : ' + num3);
//     }
// };
// console.log(biggestNum(10, 11, 15));

//exercicio 03
// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

// function compare (num1,) {
//     if ( num1 > 0 ) {
//         return ('O número é : Positivo');
//     } else if (num1 < 0) {
//         return ('O numero é : Negativo');
//     } else {
//         return ('O numero é : Zero');
//     }
// };
// console.log(compare(10));


// exercicio 04
// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.

// ERRO
// function triangle (num1, num2, num3) {
//     if ( num1 + num2 + num3 === 180 ) {
//         return (true);
//     } else if (num1 + num2 + num3 !== 180 ) {
//         return (false);
//     } else {
//         return ('O angulo informado é invalido');
//     }
// };
// console.log(triangle(-50, 100, 30));

// function triangle (num1, num2, num3) {
//     let sumOfAngles = num1 + num2 + num3;
//     let checkAngle = num1 > 0 && num2 > 0 && num3 >0;

//     if (checkAngle) {
//         if ( sumOfAngles === 180 ) {
//             return (true);
//         } else {
//             return (false);
//         } 
//     } else {
//         return ('O angulo informado é invalido');
// }
// };
// console.log(triangle(50, 100, 30));

function greetingsMessage(name) {
    console.log("Boas vindas, " + name);
  }
