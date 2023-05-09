import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  nanoid,
} from "@reduxjs/toolkit";
import axios from "axios";
import apisSlice from "../apis/apisSlice";

// const initialState = {
//   posts: [],
//   status: "idle",
//   error: null,
// };

// export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
//   try {
//     const response = await axios.get("http://localhost:3500/posts");
//     return response.data;
//   } catch (error) {
//     return error.message;
//   }
// });

// export const setPost = createAsyncThunk("posts/setPost", async (state) => {
//   try {
//     const response = await axios.post("http://localhost:3500/posts", state);
//     return response.data;
//   } catch (error) {
//     return error.message;
//   }
// });

// const postsSlice = createSlice({
//   name: "posts",
//   initialState,
//   reducers: {
//     postsAdded: {
//       reducer: (state, action) => {},
//       prepare: (data) => {
//         return {
//           payload: {
//             ...data,
//             id: nanoid(),
//             reactions: {
//               thumbsUp: 0,
//               wow: 0,
//               heart: 0,
//               rocket: 0,
//               coffee: 0,
//             },
//           },
//         };
//       },
//     },
//     reactionAdded(state, action) {
//       const { postId, reaction } = action.payload;
//       const existingPost = state.posts.find((post) => post.id == postId);
//       if (existingPost) {
//         existingPost.reactions[reaction]++;
//       }
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchPosts.pending, (state) => {
//       state.status = "pending";
//     });
//     builder.addCase(fetchPosts.fulfilled, (state, action) => {
//       state.status = "succeed";
//       state.posts = action.payload;
//     });
//     builder.addCase(fetchPosts.rejected, (state, action) => {
//       state.status = "failed";
//       state.error = action.payload.error;
//     });
//     builder.addCase(setPost.fulfilled, (state, action) => {
//       state.status = "succeed";
//       state.posts.push({
//         ...action.payload,
//         reactions: {
//           thumbsUp: 0,
//           wow: 0,
//           heart: 0,
//           rocket: 0,
//           coffee: 0,
//         },
//       });
//     });
//   },
// });

// export default postsSlice.reducer;
// export const { postsAdded, reactionAdded } = postsSlice.actions;

const postsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.title.localcompare(a.title),
});

const initialState = postsAdapter.getInitialState();

const extentedApi = apisSlice.injectEndpoints({
  endpoints: (builder) => {
    getPosts: builder.query({
      query: "/posts",
      transformResponse: (responseData) =>
        postsAdapter.setAll(initialState, responseData),
      providesTags: (result, error, arg) => [
        { type: "Posts", id: "LIST" },
        ...result.ids.map((id) => ({ type: "Posts", id })),
      ],
    });
  },
});

export const { useGetPostsQuery } = extentedApi;

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors((state) => state.posts);
