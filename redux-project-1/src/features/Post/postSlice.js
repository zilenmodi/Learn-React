import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  post: {},
  status: "idle",
  error: null,
};

export const fetchPost = createAsyncThunk("post/fetchPost", async (id) => {
  try {
    const response = await axios.get(`http://localhost:3500/posts/${id}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const updatePost = createAsyncThunk(
  "post/updatePost",
  async ({ data, navigate, navigateURL }) => {
    try {
      console.log(navigateURL);
      const response = await axios.put(
        `http://localhost:3500/posts/${data.id}`,
        data
      );
      navigate(`/${navigateURL}`);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const deletePost = createAsyncThunk(
  "post/deletePost",
  async ({ id, navigate }) => {
    try {
      const response = await axios.delete(`http://localhost:3500/posts/${id}`);
      navigate("/posts");
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPost.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.status = "succeed";
      state.post = action.payload;
    });
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload.error;
    });
    builder.addCase(updatePost.fulfilled, (state, action) => {
      state.status = "succeed";
      state.post = action.payload;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.status = "idle";
      state.post = action.payload;
    });
  },
});

export default postSlice.reducer;
