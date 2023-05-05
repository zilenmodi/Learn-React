import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice.js";
import postReducer from "../features/Post/postSlice.js";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    post: postReducer,
  },
});
