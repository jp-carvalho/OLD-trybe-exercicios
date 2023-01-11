const sendBtn = document.getElementById('send');

function clearAll() {
  const formFields = document.getElementsByTagName('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < formFields.length; index += 1) {
    const userInput = formFields[index];
    if (formFields[index].type === 'radio' || formFields[index].type === 'checkbox') {
      userInput.checked = false;
    } else {
      userInput.value = '';
    }
  }
  textArea.value = '';
}

function enablaSendBtn () {
  const agree = document.getElementById('agreement');
  sendBtn.disabled = !agree.checked;
}

const textValidation = () => {
  const name = document.getElementById('name').value.length;
  const invalidName = name < 10 || name > 40;

  const email = document.getElementById('email').value.length;
  const invalidEmail = email < 10 || email > 50;

  const why = document.getElementById('why').value.length;
  const invalidWhy = why > 500;

  if (invalidName || invalidEmail || invalidWhy) {
    return false;
  } else {
    return true;
  }
}

window.onload = function () {
  sendBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const validation = textValidation();
    if (validation === false) {
      alert('Dados inválidos');
    } else {
      alert('Dados enviados com sucesso! Obrigado por participar do concirto TrybeTrip.');
    }
  });
  const eraseBtn = document.getElementById('reset');
  eraseBtn.addEventListener('click', clearAll);
  const agreement = document.getElementById('agreement');
  agreement.addEventListener('change', enablaSendBtn);
}

