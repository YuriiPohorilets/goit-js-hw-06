const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.getElementById('ingredients');

const ingredientElements = ingredients.map(ingredient => {
  const newIngredient = document.createElement('li');
  newIngredient.textContent = `${ingredient}`;
  newIngredient.classList.add('item');

  return newIngredient;
});

ingredientsRef.append(...ingredientElements);
