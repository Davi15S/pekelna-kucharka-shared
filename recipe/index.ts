import { Comment } from "@shared/comment";
import { Ingredient } from "@shared/ingredient";
import { User } from "@shared/user";

export interface RecipeForm {
  title: string;
  author: number | undefined;
  description: string;
  ingredients: Ingredient[];
  cookingTime: number;
  process: string[];
  spiciness: string;
  publishedAt: string | null;
  numberOfServings: string;
  categories: string[];
  origins: string[];
}

export interface Recipe {
  id: string;
  attributes: RecipeAttributes;
}

export interface RecipeAttributes extends Omit<RecipeForm, "author"> {
  approved: boolean;
  comments?: { data: Comment[] };
  publishedAt: string;
  images: { data: Image[] };
  author: { data: { attributes: User } };
}

export interface Image {
  attributes: {
    url: string;
  };
  id: string;
}

export interface UserRecipes extends RecipeForm {
  id: number;
  images: {
    url: string;
  }[];
}
