//EXERCICIO 01
// function myRemove(arr, item) {
//   let newArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     if (item !== arr[index]) {
//       newArr.push(arr[index]);
//     }
//   }
//   return newArr;
// }

// module.exports = myRemove;

//===================================================================================

//EXERCICIO 02
// function myFizzBuzz(num) {
//   if (typeof num !== 'number') return false;
//   if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
//   if (num % 3 === 0) return 'fizz';
//   if (num % 5 === 0) return 'buzz';
//   return num;
// }

// module.exports = myFizzBuzz;

//===================================================================================

//EXERCICIO 03
// const mapString = (objectMap, string) => {
//   const splitString = string.split('');
//   const mappedArray = [];
//   for (let index = 0; index < splitString.length; index += 1) {
//     const character = splitString[index];
//     const mappedValue = objectMap[character];
    
//     if (mappedValue) {
//       mappedArray.push(mappedValue);
//     } else {
//       mappedArray.push(character);
//     }
//   }
//   return mappedArray.join('');
// }
// const encode = (string) => {
//   const map = {
//     a: 1,
//     e: 2,
//     i: 3,
//     o: 4,
//     u: 5,
//   };
//   return mapString(map, string);
// }
// const decode = (string) => {
//   const map = {
//     1: 'a',
//     2: 'e',
//     3: 'i',
//     4: 'o',
//     5: 'u',
//   };
//   return mapString(map, string);
// }

// const functions = { encode, decode };
// module.exports = functions;


//===================================================================================

//EXERCICIO 04

const techList = (array, name) => {
  if(array.length === 0) return 'Vazio!';

  const sortArray = array.sort();
  const sortTechList = [];

  for (let index = 0; index < sortArray.length; index += 1) {
    sortTechList.push( {
      tech: sortArray[index],
      name: name,
    });
  }
  return sortTechList;
}

module.exports = techList;