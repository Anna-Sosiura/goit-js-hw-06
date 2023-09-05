const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesEl=document.querySelector('ul.gallery');
const elements=images.map(option => {
    const itemEl=document.createElement('li');
    const imageEl=document.createElement('img');

    imageEl.classList.add('image');
    imageEl.src=option.url;
    imageEl.alt=option.alt;
    imageEl.width=400;
    itemEl.appendChild(imageEl);
    return itemEl;
})
imagesEl.append(...elements);
console.log(elements);




// imagesEl.insertAdjacentHTML("beforebegin", ...elements);
// const elements=[];
//   for (let i = 0; i < ingredients.length; i += 1) {
//     const option=ingredients[i];
//     const itemEl=document.createElement('li');
//     itemEl.classList.add('item');
//     itemEl.textContent=option;
//     elements.push(itemEl);
//     ingredientsEl.append(...elements);
//   }
  