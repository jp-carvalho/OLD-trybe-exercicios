// O desafio prático
// Imagine que você tenha passado para a etapa seguinte de uma vaga de trabalho: o desafio prático! E agora precise mostrar todas as suas habilidades em reduce, resolvendo diversas questões.

// Não se preocupe se ainda não acertar os exercícios de primeira. É normal pesquisar bastante sobre os possíveis caminhos para achar a solução, portanto, não deixe de pesquisar! Tenha em mente que quanto mais você praticar durante o curso, mais preparo você terá para realizar um desafio prático de verdade.

// Todos os exercícios devem ser realizados utilizando reduce e, se necessário, outra HOF. A informação será citada no enunciado.

// Para realizar os exercícios de 1 a 3, utilize o array abaixo:
// Fonte: <https://restcountries.com/v2/all>

const countries = [
  {
    name: 'Afghanistan',
    region: 'Asia',
    currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
    capital: 'Kabul',
    population: 40218234,
    area: 652230
  },
  {
    name: 'Åland Islands',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Mariehamn',
    population: 28875,
    area: 1580
  },
  {
    name: 'Albania',
    region: 'Europe',
    currencies: [{ code: 'ALL', name: 'Albanian lek' }],
    capital: 'Tirana',
    population: 2837743,
    area: 28748
  },
  {
    name: 'Algeria',
    region: 'Africa',
    currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
    capital: 'Algiers',
    population: 44700000,
    area: 2381741
  },
  {
    name: 'American Samoa',
    region: 'Oceania',
    currencies: [{ code: 'USD', name: 'United States Dollar' }],
    capital: 'Pago Pago',
    population: 55197,
    area: 199
  },
  {
    name: 'Andorra',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Andorra la Vella',
    population: 77265,
    area: 468
  },
  {
    name: 'Angola',
    region: 'Africa',
    currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
    capital: 'Luanda',
    population: 32866268,
    area: 1246700
  },
  {
    name: 'Anguilla',
    region: 'Americas',
    currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
    capital: 'The Valley',
    population: 13452,
    area: 91
  }
];

// 1 - Calcule a quantidade total da população de todos os países.
// De olho na dica 👀: o valor inicial deve começar com 0, portanto o acumulador é um número.
// const expectedResult = 120797034;

const getPopulation = () => {
  return countries.reduce((acc, curr) => acc + curr.population, 0);
}
// console.log(getPopulation());

// 2 - Calcule a área total de todos os países.
// const expectedResult = 4311757;

const getTotalArea = () => {
  return countries.reduce((acc, curr) => acc + curr.area, 0);
}
// console.log(getTotalArea());

// 3 - Encontre o país com o maior nome.
// De olho na dica 👀: o reduce consegue comparar o valor do primeiro com o segundo parâmetro. Compare o tamanho da string name do primeiro parâmetro com a do segundo parâmetro e retorne aquele que for maior.
// const expectedResult = {
//   name: 'American Samoa',
//   region: 'Oceania',
//   currencies: [{ code: 'USD', name: 'United States Dollar' }],
//   capital: 'Pago Pago',
//   population: 55197,
//   area: 199
// }

const longestName = () => {
  return countries.reduce((acc, curr) => {
    return acc.name.length > curr.name.length ? acc : curr;
  })
}
// console.log(longestName());

// 4 - Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.
// De olho na dica 👀: faça com que o array de nomes seja um array de letras.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// const expectedResult = 20;

const lettersArray = names.join(' ').toLowerCase().split('');

const countA = () => {
  return lettersArray.reduce((acc, curr) => {
    return curr === 'a' ? acc +=1 : acc;
  }, 0);
}
// console.log(countA());

// 5 - Crie um array de objetos e calcule a média de notas. Utilize as constantes students e grades para criar um array de objetos e calcule a média da nota das pessoas estudantes:
// O index 0 do array `students` equivale ao index 0 do array `grades`

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const expectedResult = [
 { name: 'Pedro Henrique', average: 7.8 },
 { name: 'Miguel', average: 9.2 },
 { name: 'Maria Clara', average: 8.8 },
];

const studentAverage = () => {
  return nameAndAvarage = students.map((student, index) => (
    {
      name: student,
      avarage: (grades[index].reduce((acc, curr) => acc + curr, 0) / grades[index].length),
    }
  ));
}
console.log(studentAverage());
