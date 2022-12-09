//1- Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;
const createH1 = document.createElement('h1');
createH1.innerHTML = 'TrybeTrip - Agência de Viagens';
document.body.appendChild(createH1);


//2- Adicione a tag main com a classe main-content como filho da tag body;
const createMain = document.createElement('main');
createMain.class = 'main-content';
document.body.appendChild(createMain);

//3- Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const createSectionMain = document.createElement('section');
createSectionMain.class = 'center-content';
createMain.appendChild(createSectionMain);

//4- Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const firstPara = document.createElement('p');
firstPara.innerHTML = 'Aqui está o primeiro paragrafo';
createSectionMain.appendChild(firstPara);

//5- Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const secondSection = document.createElement('section');
secondSection.class = 'left-content';
createMain.appendChild(secondSection);

//6- Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const thirdSection = document.createElement('section');
thirdSection.class = 'right-content';
createMain.appendChild(thirdSection);

//7- Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
const firstImg = document.createElement('img');
firstImg.class = 'small-img';
firstImg.src = 'https://picsum.photos/200';
secondSection.appendChild(firstImg);

//8- Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;
const ulList = document.createElement('ul');
thirdSection.appendChild(ulList);
const array = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
'Sete', 'Oito', 'Nove', 'Dez'];
for (index = 0; index < array.length; index += 1) {
  const liList = document.createElement('li');
  liList.innerHTML = array[index];
  ulList.appendChild(liList);
}


//9- Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
// for (let index = 1; index <= 3; index += 1) {
//   const createH3 = document.createElement('h3');
//   createH3.innerHTML = 'show' + index;
//   createMain.appendChild(createH3);
// }
for (let index = 1; index <= 3; index += 1) {
  const elementH3 = document.createElement('h3');
  elementH3.innerHTML = 'Show ' + index;
  createMain.appendChild(elementH3);
}