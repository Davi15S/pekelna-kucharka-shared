import { Comment } from "@shared/comment";
import { Ingredient } from "@shared/ingredient";
import { User } from "@shared/user";

export interface RecipeForm {
  title: string;
  author?: any;
  description: string;
  ingredients: Ingredient[];
  category: string;
  cookingTime: string;
  process: string[];
  spiciness: string;
  recipeOrigin: string[];
}

export interface Recipe {
  id: string;
  attributes: RecipeAttributes;
}

export interface RecipeAttributes extends RecipeForm {
  approved: boolean;
  comments: Comment[];
  publishedAt: string;
  images: { data: Image[] };
}

export interface Image {
  attributes: {
    url: string;
  };
  id: string;
}
