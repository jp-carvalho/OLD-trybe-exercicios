// const customer = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// let newKey = 'lastName';
// const lastName = 'Ferreira';

// const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
//   objeto[novaPropriedade] = valor
// };

// adicionaPropriedade(customer, newKey, lastName);
// console.log(customer);

// newKey = 'fullName';
// const fullName = `${customer.firstName} ${customer.lastName}`;

// adicionaPropriedade(customer, newKey, fullName);
// console.log(customer);


// EXERCICIO 01 PARA FIXAR 
// pessoaEstudante = {};

// let newKey = 'myName';
// const myName = 'João Paulo';

// const addKeyfunction = (object, newKey, value) => {
//   object[newKey] = value
// }

// addKeyfunction(pessoaEstudante, newKey, myName);

// newKey = 'email';
// const email = 'desenhojp@gmail.com';

// addKeyfunction(pessoaEstudante, newKey, email);

// newKey = 'number';
// const number = '(62)99999-9999';

// addKeyfunction(pessoaEstudante, newKey, number);

// newKey = 'github';
// const github = 'https://github.com/jp-carvalho';

// addKeyfunction(pessoaEstudante, newKey, github);

// newKey = 'linkedin';
// const linkedin = 'https://www.linkedin.com/in/jo%C3%A3o-paulo-ribeiro-de-carvalho-a78358261/';

// addKeyfunction(pessoaEstudante, newKey, linkedin);
// console.log(pessoaEstudante);


//EXERCICIO 02 PARA FIXAR
// const student1 = {
//   html: 'Muito Bom',
//   css: 'Bom',
//   javascript: 'Ótimo',
//   softskills: 'Ótimo',
// };

// const student2 = {
//   html: 'Bom',
//   css: 'Ótimo',
//   javascript: 'Ruim',
//   softskills: 'Ótimo',
//   git: 'Bom', // chave adicionada
// };

// const listSkills = (student) => {
//   const arrayOfSkills = Object.keys(student);
//   for (const index in arrayOfSkills) {
//     console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
//   }
// };

// console.log('Estudante 1');
// listSkills(student1);

// console.log('Estudante 2');
// listSkills(student2);


// EXERCICIO 03 PARA FIXAR

// const coutries = {
//   franca: 'Paris',
//   brasil: 'Brasília',
//   espanha: 'Madrid',
//   portugal: 'Lisboa',
// };
// const pairKeyValue = Object.entries(coutries);
// console.log(pairKeyValue);

// // Para ver os valores separadamente, adicione o for abaixo ao código anterior e execute-o novamente:
// for(index in pairKeyValue) {
//   console.log('--------');
//   console.log('País:', pairKeyValue[index][0]);
//   console.log('Capital:', pairKeyValue[index][1]);
// };

// const top3Albums = {
//   1: 'Nightfall in Middle-Earth',
//   2: 'Imaginations from the Other Side',
//   3: 'Somewhere Far Beyond',
// };

// console.log(Object.entries(top3Albums));

const verifyNumber = (value1, value2) => {
  if (!value1 || !value2) {
    throw new Error ('Preencha os dois campos para realizar a soma');
  } if (isNaN(value1) || isNaN(value2)) {
    throw new Error ('Informe dois números');
  }
}

const sum = () => {
  try {
    const value2 = document.getElementById('value2').value;
    const value1 = document.getElementById('value1').value;
    verifyNumber(value1, value2);
    const result = Number(value1) + Number(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch (error) {
    document.getElementById('result').innerHTML = `Erro: ${error.message}`;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }


}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}