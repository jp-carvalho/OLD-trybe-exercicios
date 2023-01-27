const valorItens = [1, 32, 44, 2, 3];

valorItens.reduce((acc, curr) => {
  console.log(`acumulador - acc:`, acc);
  console.log(`valorAtual - curr:`, curr);
}, 0);