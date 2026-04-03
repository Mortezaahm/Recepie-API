import RecipeModel from '../models/recipe.model.js';

export const getAllRecipes = async () => {
  return await RecipeModel.find();
};

export const createRecipe = async (recipeData: { title: string; description: string; ingredients: string[] }) => {
  const newRecipe = new RecipeModel(recipeData);
  return await newRecipe.save();
};
