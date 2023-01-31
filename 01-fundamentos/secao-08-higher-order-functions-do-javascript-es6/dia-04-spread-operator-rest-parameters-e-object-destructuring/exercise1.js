// Exercício 1
// Dado o código abaixo, altere a chamada da função rectangleArea de forma que seja impressa a área dos 3 retângulos (rectangle1, rectangle2 e rectangle3). O código deve retornar em sequência 2, 15 e 54.
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle)); // Altere o parâmetro recebido por rectangleArea()
});

// Para facilitar a compreensão da solução acima, precisamos entender que o array rectangles é um array de arrays. Quando o forEach é executado, ele acessa cada um dos arrays (rectangle1, rectangle 2 e rectangle 3). Para que a função receba os parâmetros corretos, basta utilizar o spread, que vai espalhar o valor de cada array como parâmetro da função.