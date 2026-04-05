// req.params.id is a string, but we need to convert it to a number
import type { Request, Response } from 'express';
import { getCommentsByRecipe, createComment } from "../services/comment.service.js";

export const getCommentsByRecipeController = async (req: Request, res: Response) => {
  try {
    const recipeId = req.params.recipeId;
    if (!recipeId || typeof recipeId !== 'string') {
      return res.status(400).json({
        message: "Invalid recipe ID"
      });
    }
    const comments = await getCommentsByRecipe(recipeId);
    return res.status(200).json({
      success: true,
      comments
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch comments",
        error
    });
  }
};

export const createCommentController = async (req: Request, res: Response) => {
    try {
        const { recipe_id, text, name } = req.body;
        if (!recipe_id || !text || !name) {
            return res.status(400).json({
                message: "Missing fields"
            });
        }
        const result = await createComment(recipe_id, text, name);
        return res.status(201).json({
            success: true,
            commentId: result.insertId
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to create comment",
            error
        });
    }
};
