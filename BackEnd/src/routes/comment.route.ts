// GET /comments/:recipeId
// POST /comments
import { Router } from 'express';
import { getCommentsByRecipeController, createCommentController } from '../controllers/comment.controller.js';

const router = Router();

router.get('/:recipeId', getCommentsByRecipeController);
router.post('/', createCommentController);

export default router;
