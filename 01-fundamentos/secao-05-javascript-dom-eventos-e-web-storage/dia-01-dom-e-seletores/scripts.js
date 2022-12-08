// Crie e execute uma função que mude o texto na tag <p>-----</p>, para uma descrição de como você se vê daqui a 2 anos;
function changeText () {
  const textElement = document.getElementsByTagName('p')[1];
  textElement.innerText = 'Quero me aposentar em 2 anos';

  console.log(textElement);
}
changeText();

// Crie e execute uma função que mude a cor do quadrado amarelo para rgb(76,164,109);

const changeBackground = () => {
  const mainContent = document.getElementsByClassName('main-content')[0];
  mainContent.style.backgroundColor = 'rgb(76,164,109)';
}

changeBackground();


// Crie e execute uma função que mude a cor do quadrado vermelho para branco;

const changeBackgroundCenter = () => {
  const mainContent2 = document.getElementsByClassName('center-content')[0];
  mainContent2.style.backgroundColor = 'white';
}

changeBackgroundCenter();

// Crie e execute uma função que corrija o texto da tag <h1>;

const fixTextH1 = () => {
  const fixH1 = document.getElementsByTagName('h1')[0];
  fixH1.innerText = 'Desafio - JavaScript';
}
fixTextH1();

// // Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo;

const  pMaiusculo = () => {
  const maiusculo = document.getElementsByTagName('p')[0];
  maiusculo.innerText = maiusculo.innerText.toUpperCase();
}

pMaiusculo();

// Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.

const allTags = () => {
  const all = document.getElementsByTagName('p');
  for (index = 0; index < all.length; index += 1) {
    console.log(all[index].innerText);
  }
}

allTags();


