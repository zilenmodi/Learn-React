import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const setPost = createAsyncThunk("posts/setPost", async (state) => {
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      state
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postsAdded: {
      reducer: (state, action) => {},
      prepare: (data) => {
        return {
          payload: {
            ...data,
            id: nanoid(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id == postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
      console.log(postId, reaction);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = "succeed";
      const loadedPosts = action.payload.map((post) => ({
        ...post,
        reactions: {
          thumbsUp: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          coffee: 0,
        },
      }));

      state.posts = loadedPosts;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload.error;
    });
    builder.addCase(setPost.fulfilled, (state, action) => {
      state.status = "succeed";
      state.posts.push({
        ...action.payload,
        reactions: {
          thumbsUp: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          coffee: 0,
        },
      });
    });
  },
});

export default postsSlice.reducer;
export const { postsAdded, reactionAdded } = postsSlice.actions;
