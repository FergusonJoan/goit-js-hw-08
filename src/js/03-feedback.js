import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const FORM_STORAGE_KEY = 'feedback-form-state';
let data = {};
function handleInput(event) {
  event.preventDefault();

  // console.log(event);
  data[event.target.name] = event.target.value;

  localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(data));
}

function getSavedValue() {
  try {
    const savedData = JSON.parse(localStorage.getItem(FORM_STORAGE_KEY)) || {};

    for (const element of formEl.elements) {
      if (savedData[element.name]) {
        element.value = savedData[element.name];
      }
    }
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

function handleSubmit(event) {
  event.preventDefault();

  localStorage.removeItem(FORM_STORAGE_KEY);

  formEl.reset();
}

formEl.addEventListener('input', throttle(handleInput, 500));
formEl.addEventListener('submit', handleSubmit);
getSavedValue();
