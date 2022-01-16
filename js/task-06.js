// const inputRef = document.querySelector('#validation-input');
// document.getElementById("validation-input").onblur = function() {
//   console.log(this.value.length);
//   if (this.getAttribute('data-length') > this.value.length) { 
//     this.classList.remove('valid');
//     this.classList.add('invalid');
//   } else {
//     this.classList.remove('invalid');
//     this.classList.add('valid');
//   }
// };
// inputRef.addEventListener('blur', borderColor);

const inputRef = document.querySelector('#validation-input');
const noBlur = (event) => {
  if (event.currentTarget.value.length === Number(inputRef.dataset.length)){
  inputRef.classList.add('valid');
  inputRef.classList.remove('invalid');
  }
  else {
  inputRef.classList.add('invalid');
  inputRef.classList.remove('valid');
  }
};
inputRef.addEventListener('blur', noBlur);