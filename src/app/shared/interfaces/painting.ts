export interface IPainting {
  subscribers: string[];
  posts: any[];
  _id: string;
  PaintingName: string;
  userId: {
    painting: string[],
    posts: string[],
    _id: string;
    tel: string;
    email: string;
    username: string;
    password: string;
    created_at: string;
    updatedAt: string;
    __v: number
  },
  created_at: string;
  updatedAt: string;
  __v: number
}
