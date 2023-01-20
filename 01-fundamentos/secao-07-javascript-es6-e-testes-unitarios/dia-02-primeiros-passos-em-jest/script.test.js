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
// const {encode, decode} = require('./script');

// describe('Testa a função encode e decode', () => {
//   test('a função encode é definida', () => {
//     expect(encode).toBeDefined();
//   });
//   test('encode é uma função', () => {
//     expect(typeof encode).toEqual('function');
//   });
//   test('converte a vogal "a" no número 1', () => {
//     expect(encode('ana')).toEqual('1n1');
//   });
//   test('converte a vogal "e" no número 2', () => {
//     expect(encode('ele')).toEqual('2l2')
//   });
//   test('converte a vogal "i" no número 3', () => {
//     expect(encode('xixi')).toEqual('x3x3');
//   });
//   test('converte a vogal "o" no número 4', () => {
//     expect(encode('ovo')).toEqual('4v4');
//   });
//   test('converte a vogal "u" no número 5', () => {
//     expect(encode('urubu')).toEqual('5r5b5');
//   });
//   test('o retorno da funcão tem o mesmo número de caracteres', () => {
//     expect(encode('trybe').length).toEqual(5);
//   });
//   test('a função decode é definida', () => {
//     expect(decode).toBeDefined();
//   });
//   test('decode é uma função', () => {
//     expect(typeof decode).toEqual('function');
//   });
//   test('converte o número 1 na vogal "a"', () => {
//     expect(decode('1n1')).toEqual('ana');
//   });
//   test('converte o número 2 na vogal "e"', () => {
//     expect(decode('2l2')).toEqual('ele');
//   });
//   test('converte o número 3 na vogal "i"', () => {
//     expect(decode('x3x3')).toEqual('xixi');
//   });
//   test('converte o número 4 na vogal "o"', () => {
//     expect(decode('4v4')).toEqual('ovo');
//   });
//   test('converte o número 5 na vogal "u"', () => {
//     expect(decode('5r5b5')).toEqual('urubu');
//   });
// });


//===================================================================================

//EXERCICIO 04

// const techList = require('./script');

// describe('Testa a função techList', () => {
//   it('Testa se a função techList é definida', () => {
//     expect(techList).toBeDefined();
//   });
//   it('Testa se techList é uma função', () => {
//     expect(typeof techList).toBe('function');
//   });
//   it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
//     expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
//       {
//         tech: 'CSS',
//         name: 'Lucas'
//       },
//       {
//         tech: 'HTML',
//         name: 'Lucas'
//       },
//       {
//         tech: 'JavaScript',
//         name: 'Lucas'
//       },
//       {
//         tech: 'Jest',
//         name: 'Lucas'
//       },
//       {
//         tech: 'React',
//         name: 'Lucas'
//       }
//     ]);
//   });
//   it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
//     expect(techList([], 'Lucas')).toBe('Vazio!');
//   });
// });

//===================================================================================

//EXERCICIO 05
const hydrate = require('./script');

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});