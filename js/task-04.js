const decrementRef = document.querySelector('[data-action="decrement"]');
const incrementRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

let counterValue = 0;
console.log(counterValue);

const onDecrementBtnClick = () => {
  counterValue -= 1;
  valueRef.textContent = `${counterValue}`;
};

const onIncrementBtnClick = () => {
  counterValue += 1;
  valueRef.textContent = `${counterValue}`;
};

decrementRef.addEventListener('click', onDecrementBtnClick);
incrementRef.addEventListener('click', onIncrementBtnClick);
