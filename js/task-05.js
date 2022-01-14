// define variables
const nameInputRef = document.querySelector('#name-input'); //ссылка на инпут
const nameOutputRef = document.querySelector('#name-output'); // ссылка на анонимус

const changeOnInput = (event) => {
    const value = event.target.value;
    nameOutputRef.textContent = value || 'Anonymous';
}

nameInputRef.addEventListener('input', changeOnInput);