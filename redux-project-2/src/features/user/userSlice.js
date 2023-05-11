import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

// The magic line
const userAdapter = createEntityAdapter();

const userSlice = createSlice({
  name: "users",
  initialState: userAdapter.getInitialState(),
  reducers: {
    userSet: userAdapter.setOne,
  },
});

export const { userSet } = userSlice.actions;

// Async thunk action for fetching users from API
export const fetchUser = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:3500/users/${id}`);
    const data = await response.json();
    dispatch(userSet(data));
  } catch (error) {
    console.log(error.message);
  }
};

export default userSlice.reducer;
