const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

const changeFontSize = () => {
    spanRef.setAttribute('style', `font-size-control: ${inputRef.value}px`);
}

inputRef.addEventListener('input', fontSizeChange);
