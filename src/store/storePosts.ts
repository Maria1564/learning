import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Post = {
  id: number;
  title: string;
  description: string;
};

type PostsStoreState = { posts: Post[] };

type PostsStoreAction = {
  getAllPosts: () => void;
  deletePost: (id: number) => void;
  createNewPost: (newPost: Post) => void;
};

type PostsStore = PostsStoreState & PostsStoreAction;

export const usePostsStore = create<PostsStore>()(
  persist(
    (set, get) => ({
      posts: [],

      getAllPosts: () => {
        if (get().posts.length) return;
        axios
          .get("https://dummyjson.com/products")
          .then(({ data }) => set({ posts: data.products }));
      },
      deletePost: (selectId: number) => {
        set(state => ({
          posts: state.posts.filter(item => item.id !== selectId),
        }));
      },
      createNewPost: newPost => {
        set(state => ({ posts: [...state.posts, newPost ] }));
      },
    }),
    { name: "posts-store" }
  )
);
