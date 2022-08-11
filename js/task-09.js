function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector('.change-color');
const outputRef = document.querySelector('.color');

function onChangeColor() {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  outputRef.textContent = randomColor;
}

btnRef.addEventListener('click', onChangeColor);
