import { User } from "@shared/user";

export interface Comment {
  author: User;
  id: string;
  content: string;
  creationTime: string;
  comments: Comment[];
}
