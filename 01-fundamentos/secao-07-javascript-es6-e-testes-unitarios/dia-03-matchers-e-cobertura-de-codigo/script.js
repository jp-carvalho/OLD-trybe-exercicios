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
// function sum(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('parameters must be numbers');
//   }

//   return a + b;
// }
// module.exports = sum;

//exercicio 02 / exercicio 03
//printMessage.js
// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// const printMessage = (characterInfo) => {
//   return ('Boas vindas, ' + characterInfo.personagem);
// };

// console.log(printMessage(info));

// module.exports = { info, printMessage };


//exercicio 04
// printMessage.js
// printMessage.js
// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// const printMessage = (characterInfo) => {
//   if (!characterInfo || characterInfo.personagem === undefined) {
//     throw new Error('objeto inválido');
//   }
//   return ('Boas vindas, '+ characterInfo.personagem);
// };

// // console.log(printMessage(info));

// module.exports = { info, printMessage };

//EXERCICIO BONUS
// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  // Implemente seu código aqui
  let professionalOK = false;
  let result
  for ( let index = 0; index < professionalBoard.length; index += 1){
    if ( professionalBoard[index].id === id) {
      professionalOK = true;
      result = professionalBoard[index][detail];
    }
  }
  if ( !professionalOK) {
    throw new Error ('ID não identificada');
  }
  if (result === undefined) {
    throw new Error ('Informação indisponível');
  }
  return result;

};
console.log(searchEmployee('4678-2', 'firstName'));
module.exports = searchEmployee;