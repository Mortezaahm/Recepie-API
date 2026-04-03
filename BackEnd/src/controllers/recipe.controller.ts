import type { Request, Response } from 'express';

import { getAllRecipes } from '../services/recipe.service.js';

export const getRecipes = async (req: Request, res: Response) => {
  const recipes = await getAllRecipes();
  res.json(recipes);
};
