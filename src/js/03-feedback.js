import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
let data = {};
function handleInput(event) {
  event.preventDefault();

  console.log(event);
  data[event.target.name] = event.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function getSavedValue() {
  try {
    const savedData =
      JSON.parse(localStorage.getItem('feedback-form-state')) || {};

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

  localStorage.removeItem('feedback-form-state');

  formEl.reset();
}

formEl.addEventListener('input', throttle(handleInput, 500));
formEl.addEventListener('submit', handleSubmit);
getSavedValue();
