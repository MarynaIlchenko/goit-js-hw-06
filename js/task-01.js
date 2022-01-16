const elemRef = document.querySelectorAll('.item');
const countNumberOfCategories = elemRef.length;
console.log(` Number of categories: ${countNumberOfCategories}`);

elemRef.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Category: ${element.lastElementChild.children.length}`);
});
 