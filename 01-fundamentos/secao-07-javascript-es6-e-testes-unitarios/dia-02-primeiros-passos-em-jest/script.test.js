//EXERCICIO 01
// const myRemove = require('./script.js');

// describe('testa a função myRemove', () => {
//   test('deve retornar um array removendo o item correto', () => {});
//     expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
//     expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
//     expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
// });

//===================================================================================

//EXERCICIO 02
const myFizzBuzz = require('./script');

describe('Testa a função myFizzBuzz', () => {
  test('verifica, se de acordo com o parâmetro recebido, retorna o valor esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(9)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(2)).toBe(2);
    expect(myFizzBuzz('a')).toBe(false);
  })
})
