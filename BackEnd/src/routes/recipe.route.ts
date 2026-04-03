import { Router } from 'express';
import { getRecipesController, createRecipeController } from '../controllers/recipe.controller.js';


const router = Router();

router.get('/', getRecipesController);
router.post('/', createRecipeController);

export default router;
