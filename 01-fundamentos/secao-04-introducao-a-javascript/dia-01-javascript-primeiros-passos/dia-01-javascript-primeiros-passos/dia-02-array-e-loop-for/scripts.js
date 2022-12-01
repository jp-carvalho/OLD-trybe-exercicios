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
// let array = [];

// for (let index = 1; index <= 25; index += 1) {
//     array.push(index);
// }
// for (let index2 = 0; index2 < array.length; index2 +=1) {
//     console.log(array[index2] / 2);
// }

//exercicio Bonus
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercicio 01
//Ordene o array numbers em ordem crescente e imprima seus valores;
// for (index = 1; index < numbers.length; index += 1) {
//     for (secondIndex = 0; secondIndex < index; secondIndex += 1){
//         if (numbers[index] < numbers[secondIndex]) {
//             position = numbers[index];
//             numbers[index] = numbers[secondIndex];
//             numbers[secondIndex] = position;
//         }
//     }
// }
// console.log(numbers);

//exercicio 02
//Ordene o array numbers em ordem decrescente e imprima seus valores;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (index = 1; index < numbers.length; index += 1){
//     for( secondIndex = 0; secondIndex < index; secondIndex += 1){
//         if(numbers[index] > numbers[secondIndex]){
//             position = numbers[index];
//             numbers[index] = numbers[secondIndex];
//             numbers[secondIndex] = position;
//         }
//     }
// }
// console.log(numbers);

//exercicio 03
//Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:
// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiply = [];

for(index = 0; index < numbers.length; index += 1) {
    if (index +1 < numbers.length){
        multiply.push(numbers[index] * numbers[index + 1]);
    }else {
        multiply.push(numbers[index] * 2);
    }
} 
console.log(multiply);
