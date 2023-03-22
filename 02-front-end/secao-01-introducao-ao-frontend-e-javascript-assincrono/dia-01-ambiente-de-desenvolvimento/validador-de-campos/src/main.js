import validator from 'validator';
import './style.css';

const textField = document.getElementById('value');
const button = document.getElementById('button');
const select = document.getElementById('option');
const answer = document.getElementById('answer');

// Em nossa solução proposta, ele irá indicar que não deve haver números mágicos, isto é, números no meio do código sem serem especificados.

const UUID_VERSION = 4;

// Para corrigir esse erro, vamos criar uma constante UUID_VERSION e substituir o valor 4 por ela no nosso código.

button.addEventListener('click', (event) => {
  event.preventDefault();

  const fields = {
    cpf: validator.isTaxID(textField.value, 'pt-BR'),
    hexColor: validator.isHexColor(textField.value),
    email: validator.isEmail(textField.value),
    uuid: validator.isUUID(textField.value, UUID_VERSION),
    url: validator.isURL(textField.value),
  };

  answer.innerHTML = `A validação retornou ${fields[select.value]}`;
});
