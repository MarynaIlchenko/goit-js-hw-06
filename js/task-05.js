// define variables
const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

const changeOnInput = (event) => {
    const value = event.target.value;
    nameOutputRef.textContent = value || 'Anonymous';
}

nameInputRef.addEventListener('input', changeOnInput);
