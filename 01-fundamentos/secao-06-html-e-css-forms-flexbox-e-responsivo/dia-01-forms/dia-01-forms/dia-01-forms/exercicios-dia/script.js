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
  
}

window.onload = function () {
  sendBtn.addEventListener('click', (event) => {
    event.preventDefault();
  });
  const eraseBtn = document.getElementById('reset');
  eraseBtn.addEventListener('click', clearAll);
  const agreement = document.getElementById('agreement');
  agreement.addEventListener('change', enablaSendBtn);
}

