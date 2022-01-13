let counterValue = 0;
// Создала переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
const decrementBtnRef = document.querySelector(
    '#counter button[data-action="decrement"]',
);
const incrementBtnRef = document.querySelector(
    '#counter button[data-action="increment"]',
);
const value = document.querySelector('#value');

function decrement() {
    value.textContent = counterValue -= 1;
}

function increment() {
    value.textContent = counterValue += 1;
}

incrementBtnRef.addEventListener('click', increment); //click - событие, increment - ссылка на callback функцию, которяа будет выполнена в момент клика, добавила слушателей на клик
decrementBtnRef.addEventListener('click', decrement);