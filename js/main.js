const inputNumber = document.querySelector('#inputNum')
const inputSurname = document.querySelector('#inputSurname')
const inputName = document.querySelector('#inputName')
const labels = document.querySelectorAll('.form__textField')
const spiner = document.querySelector('.loader')
const svg = document.querySelector('.svg-animate')

const addErrorBorder = () => {
  labels.forEach(label => {
    label.classList.add('form__textField--error')
  });
}
const removeErrorBorder = () => {
  labels.forEach(label => {
    label.classList.remove('form__textField--error')
  });
}
inputNumber.addEventListener('invalid', () => {
  if (inputNumber.validity.patternMismatch) {
    inputNumber.setCustomValidity('Ввод только арабских цифр и латинских букв!')
    addErrorBorder()
  }
  else {
    inputNumber.setCustomValidity('')
    removeErrorBorder()
  }

})
inputSurname.addEventListener('invalid', () => {
  if (inputSurname.validity.patternMismatch) {
    inputSurname.setCustomValidity('Ввод только букв кириллицы и латиницы')
    addErrorBorder()
  }
  else {
    inputSurname.setCustomValidity('')
    removeErrorBorder()
  }

})
inputName.addEventListener('invalid', () => {
  if (inputName.validity.patternMismatch) {
    inputName.setCustomValidity('Ввод только букв кириллицы и латиницы')
    addErrorBorder()
  }
  else {
    inputName.setCustomValidity('')
    removeErrorBorder()
  }

})

const deleteSpaces = (input) => {
  const withoutSpaces = input.value
    .split('')
    .filter(item => item !== ' ')
    .join('')
  input.value = withoutSpaces
}
const showSpiner = () => {
  spiner.style.display = 'block'
  setTimeout(() => { spiner.style.display = 'none' }, 3000);
  setTimeout(() => { svg.classList.add('animate')}, 3200);
  setTimeout(() => { svg.classList.remove('animate') }, 5200);
}

const form = document.querySelector('.form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  showSpiner()
  deleteSpaces(inputSurname)
  deleteSpaces(inputName)
})

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; 
let yyyy = today.getFullYear();
let dateFiile = document.getElementById('datefield')
if (dd < 10) {
  dd = '0' + dd
}
if (mm < 10) {
  mm = '0' + mm
}

today = yyyy + '-' + mm + '-' + dd;
dateFiile.setAttribute("max", today);