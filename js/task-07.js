const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

function onInputChange(event) {
  const inputCurrentValue = event.currentTarget.value;

  textRef.style.fontSize = `${inputCurrentValue}px`;
}

inputRef.addEventListener('input', onInputChange);
