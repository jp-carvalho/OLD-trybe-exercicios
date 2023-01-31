// const countParams = (...args) => {
//   console.log('parâmetros:', args);
//   return `Você passou ${args.length} parâmetros para a função.`;
// }

// console.log(countParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
// console.log(countParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.


// const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
// console.log(sum(4, 7, 8, 9, 60)); // 88


// definindo o objeto
const character = {
  name: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};

// desestruturando o objeto:
const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// imprimindo os valores:
console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);