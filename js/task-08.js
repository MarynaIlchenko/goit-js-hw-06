const formRef = document.querySelector('.login-form');
formRef.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const formElement = event.currentTarget.elements;
  const email = formElement.email.value;
  const password = formElement.password.value;
  const formData = { email, password };
  if (email === '' || password === '') {
    alert('all fields are required');
  } else {
    console.log(formData);
  }

  formRef.reset();
}