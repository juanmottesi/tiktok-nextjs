export type SimpleUserType = {
  id: string;
  username: string;
  image: string;
}

export type SimplePostType = {
  id: string;
  user: SimpleUserType;
  title: string;
  description: string;
  video: string;
  likes: SimpleUserType[];
  commentsAmount: number;
}

export type UserType = {
  id: string;
  username: string;
  email: string;
  image: string;
  posts: SimplePostType[];
  following: SimpleUserType[];
  followers: SimpleUserType[];
}
