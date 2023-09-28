/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus(timer) {
  if (timer == 0) return 'Lasagna is done.';
  if (!timer) return 'You forgot to set the timer.';

  return 'Not done, please wait.';
}

export function preparationTime(layers = [], average_prep_time = 2) {
  return layers.length * average_prep_time;
}

const measurements = {
  noodles: 50,
  sauce: 0.2
}

function quantity_reducer(quantities, layer) {
  if (!measurements[layer]) return quantities;

  quantities[layer] += measurements[layer];
  return quantities;
}

export function quantities(layers = []) {
  return layers.reduce(quantity_reducer, { noodles: 0, sauce: 0 });
}

export function addSecretIngredient(alternate_ingredients = [], my_ingredients = []) {
  my_ingredients.push(alternate_ingredients[alternate_ingredients.length - 1]);
}

function scaler(multiplier) {
  return function scale_reducer(scaled_recipe, entry) {
    const [ingredient, amount] = entry
    scaled_recipe[ingredient] = amount * multiplier;
    return scaled_recipe;
  }
}

export function scaleRecipe(recipe, portions) {
  const multiplier = portions / 2;
  return Object.entries(recipe).reduce(scaler(multiplier), {})
}
