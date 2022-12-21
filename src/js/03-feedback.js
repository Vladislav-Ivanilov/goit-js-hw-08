import { throttle } from 'lodash';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormData, 500));

const STORAGE_KEY = 'feedback-form-state';
const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
  email: '',
  message: '',
};

formDataLocalStorage();

function onFormSubmit(e) {
  console.log(formData);
  e.preventDefault();
  e.target.reset();
  formData.email = '';
  formData.message = '';
  localStorage.removeItem(STORAGE_KEY);
}

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function formDataLocalStorage() {
  const data = formData;
  const email = refs.input;
  const message = refs.textarea;
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
}
