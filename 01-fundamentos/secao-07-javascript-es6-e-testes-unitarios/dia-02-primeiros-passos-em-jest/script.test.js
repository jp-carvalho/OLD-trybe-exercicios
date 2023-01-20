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
// const myFizzBuzz = require('./script');

// describe('Testa a função myFizzBuzz', () => {
//   test('verifica, se de acordo com o parâmetro recebido, retorna o valor esperado', () => {
//     expect(myFizzBuzz(15)).toBe('fizzbuzz');
//     expect(myFizzBuzz(9)).toBe('fizz');
//     expect(myFizzBuzz(5)).toBe('buzz');
//     expect(myFizzBuzz(2)).toBe(2);
//     expect(myFizzBuzz('a')).toBe(false);
//   })
// })

//===================================================================================

//EXERCICIO 03
const {encode, decode} = require('./script');

describe('Testa a função encode e decode', () => {
  test('a função encode é definida', () => {
    expect(encode).toBeDefined();
  });
  test('encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });
  test('converte a vogal "a" no número 1', () => {
    expect(encode('ana')).toEqual('1n1');
  });
  test('converte a vogal "e" no número 2', () => {
    expect(encode('ele')).toEqual('2l2')
  });
  test('converte a vogal "i" no número 3', () => {
    expect(encode('xixi')).toEqual('x3x3');
  });
  test('converte a vogal "o" no número 4', () => {
    expect(encode('ovo')).toEqual('4v4');
  });
  test('converte a vogal "u" no número 5', () => {
    expect(encode('urubu')).toEqual('5r5b5');
  });
  test('o retorno da funcão tem o mesmo número de caracteres', () => {
    expect(encode('trybe').length).toEqual(5);
  });
  test('a função decode é definida', () => {
    expect(decode).toBeDefined();
  });
  test('decode é uma função', () => {
    expect(typeof decode).toEqual('function');
  });
  test('converte o número 1 na vogal "a"', () => {
    expect(decode('1n1')).toEqual('ana');
  });
  test('converte o número 2 na vogal "e"', () => {
    expect(decode('2l2')).toEqual('ele');
  });
  test('converte o número 3 na vogal "i"', () => {
    expect(decode('x3x3')).toEqual('xixi');
  });
  test('converte o número 4 na vogal "o"', () => {
    expect(decode('4v4')).toEqual('ovo');
  });
  test('converte o número 5 na vogal "u"', () => {
    expect(decode('5r5b5')).toEqual('urubu');
  });
});