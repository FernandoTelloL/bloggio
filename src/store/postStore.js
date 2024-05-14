import { create } from 'zustand'

export const usePostStore = create((set, get) => ({
  category: null,
  posts: [],

  addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),

  deletePost: (id) =>
    set((state) => ({ posts: state.posts.filter((post) => post.id !== id) })),

  // updatePost: (post) =>
  //   set((state) => ({
  //     posts: state.posts.map((post) => (post.id === post.id ? post : post))
  //   })),

  setCategory: (cat) =>
    set((state) => ({
      category: (state.category = cat)
    })),

  getCategory: () =>
    get((state) => ({
      category: state.category
    })),

  getPost: (id) => get().posts.find((post) => post.id === id)
}))
