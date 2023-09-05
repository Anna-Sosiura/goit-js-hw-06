const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;
const subtract = () => {
    counterValue -= 1;
    console.log (counterValue);
  };
  decrementBtn.addEventListener("click", subtract);

  const add = () => {
    counterValue += 1;
    console.log (counterValue);
  };
  incrementBtn.addEventListener("click", add);
console.log (counterValue);
const value=document.querySelector('#value');
value.textContent=counterValue;