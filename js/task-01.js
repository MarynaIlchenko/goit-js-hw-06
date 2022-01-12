const elemRef = document.querySelector('ul#categories');
const countNumberOfCategories = elemRef.children.length;
console.log(` Number of categories: ${countNumberOfCategories}`);

const liItemRef = elemRef.children;
for (let i = 0; i < liItemRef.length; i += 1) {
    const numberOfLi = liItemRef[i].children;

    const textContent = numberOfLi[0].textContent;
    console.log("Category: ", textContent);
    const countNumberOfLi = numberOfLi[1].children.length;
    console.log("Elements: ", countNumberOfLi);
}