const colorRef = document.querySelector('.widget');
const spanRef = document.querySelector('.color');
colorRef.addEventListener('click', onButtonClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onButtonClick(event) {
  spanRef.textContent = getRandomHexColor();
  if (!event.target.classList.contains('change-color')) { //если у элемента нет класса change-color.
    return; // закончить работу(выход из метода)
  } else {
    return (document.body.style.background = getRandomHexColor()); //меняет цвет
  }
}
