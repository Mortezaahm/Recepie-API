import type { Request, Response } from 'express';

import { getAllRecipes, createRecipe } from '../services/recipe.service.js';

export const getRecipesController = async (req: Request, res: Response) => {
  const recipes = await getAllRecipes();
  res.json(recipes);
};

export const createRecipeController = async (req: Request, res: Response) => {
  const recipeData = req.body;
  const newRecipe = await createRecipe(recipeData);
  res.status(201).json(newRecipe);
};
