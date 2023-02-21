import { Comment } from "@shared/comment";
import { Ingredient } from "@shared/ingredient";
import { User } from "@shared/user";

export interface RecipeForm {
  title: string;
  author: User;
  description: string;
  ingredients: Ingredient[];
  images: string[];
  categories: string[];
  cookingTime: string;
  process: string[];
  comments: Comment[];
  spiciness: number;
  approved: boolean;
  creationTime: string;
  recipeOrigin: string[];
}

export interface Recipe extends RecipeForm {
  id: string;
}
