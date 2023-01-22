const createItem = require('./script');
describe('a função createItem', () => {
  it('cria um item válido', () => {
    expect(createItem('banana', 2, 100, 10)).toEqual({name: 'banana', unit: 2, price: 100, quantity: 10});
  });
  it('utiliza zero como quantidade padrão', () => {
    expect(createItem('banana', 2, 10)).toEqual({name: 'banana', unit: 2, price: 10, quantity: 0})
  });
  it('Lança um erro quando não recebe parâmetros', () => {
    expect()
  });
  it('Lança um erro se o nome do item não é uma string', () => {
    expect( () => createItem(2, 2, 100, 10)).toThrow()
  });
  it('Lança um erro se o preço é negativo', () => {
    expect( () => createItem('banana', 2, -10, 10)).toThrow()
  });

  it('Lança um erro se o preço é zero', () => {
    expect( () => createItem('banana', 2, 0, 10)).toThrow()
  });
});