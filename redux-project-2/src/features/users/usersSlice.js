import {
  configureStore,
  createSelector,
  createSlice,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

// The magic line
const usersAdapter = createEntityAdapter();

const usersSlice = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState(),
  reducers: {
    usersAddOne: usersAdapter.addOne,
    usersAddMany: usersAdapter.setMany,
    userUpdate: usersAdapter.updateOne,
    userRemove: usersAdapter.removeOne,
    userSetAll: usersAdapter.setAll,
  },
});

export const { usersAddOne, usersAddMany, userUpdate, userRemove, userSetAll } =
  usersSlice.actions;

// Async thunk action for fetching users from API
export const setUser = (state, navigate) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:3500/users", state);
    navigate("/users");
    dispatch(usersAddOne(state));
  } catch (error) {
    return error.message;
  }
};

export const deleteUser = (id, navigate) => async (dispatch) => {
  try {
    const response = await axios.delete(`http://localhost:3500/users/${id}`);
    navigate("/users");
    dispatch(userRemove(state));
  } catch (error) {
    return error.message;
  }
};

export default usersSlice.reducer;
