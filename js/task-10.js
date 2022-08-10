const refs = {
  input: document.querySelector('[type="number"]'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

// Random color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Create "<div>"
function createDivBox() {
  return document.createElement('div');
}

// Takes input value & call createBoxes
function onChangeInputValue() {
  const inputValue = refs.input.value;

  createBoxes(inputValue);
}

// Create boxes (amount === input.value)
function createBoxes(amount) {
  const newBoxesArr = [];
  let boxWidth = 20;

  for (let i = 0; i < amount; i += 1) {
    const newBox = createDivBox();

    boxWidth += 10;
    newBox.style.width = `${boxWidth}px`;
    newBox.style.height = `${boxWidth}px`;
    newBox.style.backgroundColor = getRandomHexColor();

    newBoxesArr.push(newBox);
  }

  refs.boxes.append(...newBoxesArr);
}

// Destroy box
function onDestroyBoxes() {
  refs.boxes.innerHTML = '';
  refs.input.value = 1;
}

refs.btnCreate.addEventListener('click', onChangeInputValue);
refs.btnDestroy.addEventListener('click', onDestroyBoxes);
