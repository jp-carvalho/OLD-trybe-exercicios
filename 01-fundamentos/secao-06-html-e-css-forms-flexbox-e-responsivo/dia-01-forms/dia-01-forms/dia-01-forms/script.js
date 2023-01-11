const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");

hrefLink.addEventListener('click', (event) => {
  event.preventDefault();
});

inputCheckbox.addEventListener('click', (event) => {
  event.preventDefault();
});

// Adicione um evento keypress no elemento input type="text" que possui o id input-text. Na função do evento, implemente o método .preventDefault() de forma que somente o caractere a (letra ‘a’ minúscula) possa ser digitado na caixinha. (dica: para capturar a tecla digitada, utilize o event.key)
inputText.addEventListener('keypress', (event) => {
  const character = event.key;
  if (character !== 'a'){
    event.preventDefault();
  }
});