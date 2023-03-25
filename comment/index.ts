import { User } from "@shared/user";

export interface Comment {
  attributes: CommentAttributes;
}

export interface CommentAttributes {
  author: { data: { attributes: User; id: number } };
  id: string;
  content: string;
  creationTime: string;
  comments: Comment[];
}
