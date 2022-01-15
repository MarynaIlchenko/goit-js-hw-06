const colorRef = document.querySelector('.widget');
const spanRef = document.querySelector('.color');
colorRef.addEventListener('click', onButtonClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


