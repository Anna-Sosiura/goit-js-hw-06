const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const value=document.querySelector('#value');

let counterValue = 0;

const subtract = () => {
    counterValue -= 1;
    console.log (counterValue);
    value.textContent=counterValue;
  };
  decrementBtn.addEventListener("click", subtract);

  const add = () => {
    counterValue += 1;
    console.log (counterValue);
    value.textContent=counterValue;
  };
  incrementBtn.addEventListener("click", add);
console.log (counterValue);
