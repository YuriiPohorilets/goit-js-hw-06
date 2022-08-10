function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector('.change-color');
const outputRef = document.querySelector('.color');

function onChangeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  outputRef.textContent = getRandomHexColor();
}

btnRef.addEventListener('click', onChangeColor);
