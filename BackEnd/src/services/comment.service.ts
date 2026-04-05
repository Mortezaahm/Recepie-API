import pool from "../config/mysql.js";
import type { ResultSetHeader } from "mysql2";

export const getCommentsByRecipe = async (recipeId: string) => {
  if (!recipeId) {
    throw new Error("Recipe ID is required");
  }

  const [rows] = await pool.execute(
    "SELECT * FROM comments WHERE recipe_id = ?",
    [recipeId]
  );

  return rows;
};

export const createComment = async (recipe_id: string, text: string, name: string) => {
  if (!recipe_id || !text || !name) {
    throw new Error("Missing fields");
  }

  const [result] = await pool.execute<ResultSetHeader>(
    "INSERT INTO comments (recipe_id, text, name) VALUES (?, ?, ?)",
    [recipe_id, text, name]
  );

  return result;
};
