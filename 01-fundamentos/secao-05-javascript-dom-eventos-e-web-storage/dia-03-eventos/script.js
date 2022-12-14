const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const createMonth = () => {
  const createDaysLi = document.getElementById('days');
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let day = decemberDaysList[index];
    let dayItem = document.createElement('li');
    dayItem.innerHTML = day;
    createDaysLi.appendChild(dayItem);
    
    if (day === 24 || day === 31) {
      dayItem.className = 'day holiday';
      createDaysLi.appendChild(dayItem);
    } else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = 'day friday'
      createDaysLi.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
      createDaysLi.appendChild(dayItem);
    } else {
      dayItem.className = 'day';
      createDaysLi.appendChild(dayItem);
    }
  }
}
createMonth();

const createBtn = (feriados) => {
  const createButton = document.querySelector('.buttons-container');
  const createButtonElement = document.createElement('button');
  createButtonElement.id = 'btn-holiday';
  createButtonElement.innerHTML = feriados;
  createButton.appendChild(createButtonElement);
}
createBtn('Feriados');

const changeBgHoliday = () => {
  const getHolidayButton = document.querySelector('#btn-holiday');
  const getHoliday = document.querySelectorAll('.holiday');
  let backgroundColor =  'rgb(238,238,238)';
  let setNewColor = 'green';

  getHolidayButton.addEventListener('click', () => {
    for (let index = 0; index < getHoliday.length; index += 1) {
      if (getHoliday[index].style.backgroundColor === setNewColor) {
        getHoliday[index].style.backgroundColor = backgroundColor;
        getHoliday[index].style.color = '#666'
      } else {
        getHoliday[index].style.backgroundColor = setNewColor;
        getHoliday[index].style.color = 'white';
      }
    }
  });
}
changeBgHoliday();

const getFridayBtn = () => {
  const createFridayBtn = document.querySelector('.buttons-container');
  const createFridayBtnElement = document.createElement('button');
  createFridayBtnElement.id = 'btn-friday';
  createFridayBtnElement.innerHTML = 'Sexta-feira';
  createFridayBtn.appendChild(createFridayBtnElement);
}
getFridayBtn();

const changeBtnFriday = () => {
  const getFridayBtn = document.querySelector('#btn-friday');
  const getFriday = document.querySelector('.friday');
  let fridayText = 'Sexta-feira!';

  getFridayBtn.addEventListener('click', () => {
    for ( let index = 0; index < getFriday; index += 1) {
      if (getFriday[index] === number) {
        getFriday[index].innerHTML = fridayText;
      } else {

      }
    }
  });
}