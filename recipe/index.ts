import { Comment } from "@shared/comment";
import { Ingredient } from "@shared/ingredient";
import { User } from "@shared/user";

export interface RecipeForm {
  title: string;
  author?: User;
  description: string;
  ingredients: Ingredient[];
  images: string[];
  category: string;
  cookingTime: string;
  process: string[];
  comments: Comment[];
  spiciness: string;
  creationTime: string;
  recipeOrigin: string[];
}

export interface Recipe extends RecipeForm {
  id: string;
  approved: boolean;
}
