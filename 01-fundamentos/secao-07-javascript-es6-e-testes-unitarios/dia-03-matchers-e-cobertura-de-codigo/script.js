// const createItem = (name, unit, price, quantity) => {
//   if (typeof name !== 'string') {
//     throw new Error('O nome do item deve ser uma string');
//   }
//   if (price <= 0) {
//     throw new Error('O preço do item deve ser maior que zero');
//   }
//   if (quantity === undefined) {
//     quantity = 0;
//   }
//   return {
//     name: name,
//     quantity: quantity,
//     unit: unit,
//     price: price,
//   };
// }
// module.exports = createItem;

// exercicio 01
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}
module.exports = sum;