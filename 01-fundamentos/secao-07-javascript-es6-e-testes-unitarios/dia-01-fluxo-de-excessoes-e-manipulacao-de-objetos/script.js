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

//EXERCICIOS DO DIA//
// 1 🚀 - Crie erros personalizados.

// Tente executar a aplicação com um dos valores em branco. Notou que o retorno não é muito descritivo?

// Utilize o throw new Error e o bloco try/catch.

// Evite funções que tenham muitas responsabilidades distintas.

// Caso a pessoa usuária não preencha nenhum input, ou preencha apenas um input, lance um erro.

// Caso os valores inseridos nos inputs pela pessoa usuária não sejam números, lance um erro. Você pode fazer essa verificação utilizando a função isNan().

// Adicione o texto dos erros no parágrafo com id result, para que a pessoa usuária saiba o que aconteceu. Lembre-se de usar erros descritivos!

// Utilize o finally para apagar os valores dos inputs ao final do bloco try/catch.

// De olho na dica 👀: Cuidado ao utilizar o isNaN, pois valores considerados falsy são convertidos em 0, e valores truthy convertidos em 1, podendo assim gerar um falso positivo. Por exemplo, isNaN(true) retorna false, dado que true será convertido para 1, que é um número. De olho na dica 👀: Lembre-se de que, em JavaScript, para separar a parte inteira da decimal de um número, você deve utilizar o .. Exemplo: 1.5, com ponto, ao invés de 1,5, com vírgula.
//===================================================================
// const verifyNumber = (value1, value2) => {
//   if (!value1 || !value2) {
//     throw new Error ('Preencha os dois campos para realizar a soma');
//   } if (isNaN(value1) || isNaN(value2)) {
//     throw new Error ('Informe dois números');
//   }
// }

// const sum = () => {
//   try {
//     const value2 = document.getElementById('value2').value;
//     const value1 = document.getElementById('value1').value;
//     verifyNumber(value1, value2);
//     const result = Number(value1) + Number(value2);
//     document.getElementById('result').innerHTML = `Resultado: ${result}`;
//   } catch (error) {
//     document.getElementById('result').innerHTML = `Erro: ${error.message}`;
//   } finally {
//     document.getElementById('value1').value = '';
//     document.getElementById('value2').value = '';
//   }


// }

// window.onload = () => {
//   const button = document.getElementById('button');
//   button.addEventListener('click', sum);
// }

// ==================================================================
//EXERCICIO 02
// 01 - Complete a função customerInfo() para que seu retorno seja similar a 'Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'.
// De olho na dica 👀: Note que o parâmetro da função já está sendo passado na chamada da função.
// 02 - Complete a função orderModifier() para que seu retorno seja similar a 'Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.';
// Modifique o nome da pessoa compradora para Luiz Silva;
// Modifique o valor total da compra para R$ 50,00.

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const address = 'address';
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const customerName = order.name;
  const customerPhone = order.phoneNumber;
  const street = order.address.street;
  const number = order.address.number;
  const apartment = order.address.apartment;

  console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone ${customerPhone}, R. ${street}, Nº: ${number}, AP: ${apartment}`);
};

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const newBuyer = order.name = 'Luiz Silva';
  const newTotal = order.payment.total = '50';
  const pizzas = Object.keys(order.order.pizza);
  const drink = order.order.drinks.coke.type;

  console.log(`Olá, ${newBuyer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drink} é R$${newTotal},00.`);
};

orderModifier(order);