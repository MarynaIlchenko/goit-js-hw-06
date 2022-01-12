const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.createElement('li');
ingredientsRef.textContent = 'ingredient';
ingredientsRef.classList.add('item');

const ulEl = document.querySelector('#ingredients');
ulEl.appendChild(ingredientsRef);

console.log(ingredientsRef)