import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
let data = {};
function handleInput(event) {
  event.preventDefault();

  console.log(event);
  data[event.target.name] = event.target.value;
  // const formData = new FormData(event.currentTarget);

  // for (const [key, value] of formData) {
  //   data[key] = value;
  // }

  localStorage.setItem('feedback-form-state', JSON.stringify(data));
  // console.log(data);
}

function getSavedValue() {
  const savedData =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};

  for (const element of formEl.elements) {
    if (savedData[element.name]) {
      element.value = savedData[element.name];
    }
  }
}

// const onRenovate = throttle(({ seconds }) => {
//   localStorage.setItem('feedback-form-state', seconds);
// }, 500);

function handleSubmit(event) {
  event.preventDefault();

  localStorage.removeItem('feedback-form-state');

  formEl.reset();
}

formEl.addEventListener('input', throttle(handleInput, 500));
formEl.addEventListener('submit', handleSubmit);
