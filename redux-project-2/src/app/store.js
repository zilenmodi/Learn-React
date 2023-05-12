import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice.js";
import postReducer from "../features/Post/postSlice.js";
// import usersReducer from "../features/users/usersSlice.js";
// import userReducer from "../features/user/userSlice.js";
import { api } from "../features/apis/apisSlice.js";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    post: postReducer,
    // users: usersReducer,
    // user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
