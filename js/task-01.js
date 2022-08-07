const categoriesRef = document.querySelector('#categories');
const categorieItemsRef = categoriesRef.querySelectorAll('.item');

console.log('Number of categories:', categoriesRef.children.length);

categorieItemsRef.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
