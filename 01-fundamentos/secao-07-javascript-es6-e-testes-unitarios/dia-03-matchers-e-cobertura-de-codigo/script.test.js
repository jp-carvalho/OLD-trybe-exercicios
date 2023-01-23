// const createItem = require('./script');
// describe('a função createItem', () => {
//   it('cria um item válido', () => {
//     expect(createItem('banana', 2, 100, 10)).toEqual({name: 'banana', unit: 2, price: 100, quantity: 10});
//   });
//   it('utiliza zero como quantidade padrão', () => {
//     expect(createItem('banana', 2, 10)).toEqual({name: 'banana', unit: 2, price: 10, quantity: 0})
//   });
//   it('Lança um erro quando não recebe parâmetros', () => {
//     expect()
//   });
//   it('Lança um erro se o nome do item não é uma string', () => {
//     expect( () => createItem(2, 2, 100, 10)).toThrow()
//   });
//   it('Lança um erro se o preço é negativo', () => {
//     expect( () => createItem('banana', 2, -10, 10)).toThrow()
//   });

//   it('Lança um erro se o preço é zero', () => {
//     expect( () => createItem('banana', 2, 0, 10)).toThrow()
//   });
// });

//exercicio 01
// const sum = require('./script');

// describe('Testa a função sum', () => {
//   it('Teste se o resultado da soma', () =>{
//     expect(sum(4, 5)).toBe(9);
//     expect(sum(0, 0)).toBe(0);
//   });
//   it('Teste erro caso seja lançada uma string', () => {
//     expect( () => sum(4, '5')).toThrowError();
//     expect( () => sum(4, '5')).toThrowError('parameters must be numbers');
//   })
// });

//exercicio 02 / exercicio 03
const {info, printMessage} = require('./script');

describe('Testa a função printMessage', () => {
  it('Testa se o objeto possui a propriedade personagem', () => {
    expect(info).toHaveProperty('personagem');
  });
  it('testa a resposta', () => {
    expect(printMessage('Tio Patinhas')).toMatch('Boas vindas,');
  })
});


