// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercicio1
// for(index = 0; index < numbers.length; index += 1){
// console.log(numbers[index]);
// }

// exercicio2
// let sum = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     sum += numbers[index];
// }
// console.log(sum);

// exercicio3
// let sum = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     sum += numbers[index];
// }
// console.log(sum / numbers.length);

// exercicio4
// let sum = 0;
// let avarage = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     sum += numbers[index];
// }
// avarage = sum / numbers.length;
// if(avarage > 20) {
//     console.log('valor maior que 20');
// }else {
//     console.log('valor menor ou igual a 20');
// }

//exercicio 5
// Utilizando for, descubra qual o maior valor contido no array e imprima-o;
// let biggest = 0;
// for(let index =0; index < numbers.length; index += 1) {
//     if ( numbers[index] > biggest) {
//         biggest = numbers[index];
//     }
// }
// console.log(biggest);

//exercicio 6
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
// let odd = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] % 2 !== 0 ) {
//         odd += 1;
//     }
// }
// if(odd === 0){
//     console.log('nenhum valor impar encontrado');   
// } else {
//     console.log(odd);
// }

//exercicio 7
//Utilizando for, descubra qual o menor valor contido no array e imprima-o;

// let smallest = numbers[0];

// for (index = 0; index < numbers.length; index += 1) {
//     if(numbers[index] < smallest) {
//         smallest = numbers[index];
//     }
// }
// console.log(smallest);

//exercicio 8
//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
// let array = [];

// for (let index = 1; index <= 25; index += 1) {
//     array.push(index);
// }
// console.log(array);

//exercicio 9
// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
let array = [];

for (let index = 1; index <= 25; index += 1) {
    array.push(index);
}
for (let index2 = 0; index2 < array.length; index2 +=1) {
    console.log(array[index2] / 2);
}
