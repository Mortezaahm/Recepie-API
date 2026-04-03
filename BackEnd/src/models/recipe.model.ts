import { Schema, model } from "mongoose";

export interface Recipe {
  title: string;
  description: string;
  ingredients: string[];
}

const recipeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: { type: [String], required: true }
});

const RecipeModel = model<Recipe>('Recipe', recipeSchema);
export default RecipeModel;
