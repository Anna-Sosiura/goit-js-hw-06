const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl=document.querySelector('ul#ingredients');
const elements=ingredients.map(option => {
    const itemEl=document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent=option;
    return itemEl;
})


// const elements=[];
//   for (let i = 0; i < ingredients.length; i += 1) {
//     const option=ingredients[i];
//     const itemEl=document.createElement('li');
//     itemEl.classList.add('item');
//     itemEl.textContent=option;
//     elements.push(itemEl);
//     ingredientsEl.append(...elements);
//   }
  
console.log(elements);
ingredientsEl.append(...elements);