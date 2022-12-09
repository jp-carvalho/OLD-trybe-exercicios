// Acesse o elemento elementoOndeVoceEsta.
// const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// // Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// const pai = document.getElementById('pai');
// pai.style.color = 'red';

// // Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
// primeiroFilhoDoFilho.innerHTML = 'Oi, sou o antunes!';

// // Acesse o primeiroFilho a partir de pai.
// const primeiroFilho = document.getElementById('pai').children[0];
// primeiroFilho.innerHTML = 'teste';

// // Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
// const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

// // Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
// const textElement = elementoOndeVoceEsta.nextSibling

// // Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
// const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

// // Agora acesse o terceiroFilho a partir de pai.
// const terceiroFilho2 = pai.lastElementChild.previousElementSibling;


// Crie um irmão para elementoOndeVoceEsta.
// const pai = document.getElementById('pai');
// const irmaoElementoOndeVoceEsta = document.createElement('section');
// irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
// pai.appendChild(irmaoElementoOndeVoceEsta);

// // Crie um filho para elementoOndeVoceEsta.
// const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
// const filhoElementoOndeVoceEsta = document.createElement('section');
// filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
// elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

// // Crie um filho para primeiroFilhoDoFilho.
// const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
// const filhoPrimeiroFilhoDoFilho = document.createElement('section');
// filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
// primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

// // A partir desse filho criado, acesse terceiroFilho.
// const terceiroFilho = filhoPrimeiroFilhoDoFilho  //primeiroFilhoDoFilho
// .parentElement                                   //elementoOndeVoceEsta
// .parentElement.nextElementSibling;               //terceiroFilho



// REMOVECHILD
// Remova a tag h2, filha do elemento elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById('pai');
pai.removeChild(pai.firstElementChild);