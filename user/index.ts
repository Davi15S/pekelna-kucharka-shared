import { CommentAttributes } from "@shared/comment";
import { UserRecipes } from "@shared/recipe";

export interface User {
  username: string;
  email: string;
  id: number;
  confirmed: boolean;
  blocked: boolean;
  comments: CommentAttributes[];
  recipes: UserRecipes[];
}
