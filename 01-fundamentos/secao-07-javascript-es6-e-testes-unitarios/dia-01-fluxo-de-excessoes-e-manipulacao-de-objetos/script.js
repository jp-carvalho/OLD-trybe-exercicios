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

pessoaEstudante = {};

let newKey = 'myName';
const myName = 'João Paulo';

const addKeyfunction = (object, newKey, value) => {
  object[newKey] = value
}

addKeyfunction(pessoaEstudante, newKey, myName);

newKey = 'email';
const email = 'desenhojp@gmail.com';

addKeyfunction(pessoaEstudante, newKey, email);

newKey = 'number';
const number = '(62)99999-9999';

addKeyfunction(pessoaEstudante, newKey, number);

newKey = 'github';
const github = 'https://github.com/jp-carvalho';

addKeyfunction(pessoaEstudante, newKey, github);

newKey = 'linkedin';
const linkedin = 'https://www.linkedin.com/in/jo%C3%A3o-paulo-ribeiro-de-carvalho-a78358261/';

addKeyfunction(pessoaEstudante, newKey, linkedin);
console.log(pessoaEstudante);
