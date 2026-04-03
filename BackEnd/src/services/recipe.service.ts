import RecipeModel from '../models/recipe.model.js';

export const getAllRecipes = async () => {
  return await RecipeModel.find();
};
