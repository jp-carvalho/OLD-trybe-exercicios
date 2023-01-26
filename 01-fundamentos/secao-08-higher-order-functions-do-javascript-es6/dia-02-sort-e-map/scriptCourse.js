// const gamers

//ordendando por nome

// gamers.sort((a, b) => a.name > b.name ? 1 : -1) 

// ordendando por soma total de pontos
// gamers.sort((a, b) => {
//   let pointsA = 0;
//   let pointsB = 0;
//   a.points.forEach((element) => pointsA += element);
//   b.points.forEach((element) => pointsB += element);
//   return pointsA - pointsB;
// })
// console.log(gamers);

// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// people.sort((a, b) => a.age > b.age ? 1 : -1);

// console.log(people);

const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]
