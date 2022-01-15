const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulRef = document.querySelector("#ingredients");
const listOfIngredients = ingredients.map((ingredient) => {
    const itemLi = document.createElement("li");
    itemLi.textContent = ingredient;
    itemLi.classList.add("item");

    console.log(itemLi);
    return itemLi;
});

ulRef.append(...listOfIngredients)
console.log(listOfIngredients);