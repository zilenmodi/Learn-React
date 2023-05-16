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
    console.log(state);
    dispatch(userRemove(state));
  } catch (error) {
    return error.message;
  }
};

export const fetchUsers = () => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3500/users");
    const data = await response.json();
    dispatch(userSetAll(data));
  } catch (error) {
    console.log(error.message);
  }
};

export default usersSlice.reducer;

// import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
// import { api } from "../apis/apisSlice.js";

// // The magic line
// const usersAdapter = createEntityAdapter({
//   selectId: (user) => user.id,
// });

// const initialState = usersAdapter.getInitialState();

// export const extendedApi = api.injectEndpoints({
//   endpoints: (builder) => ({
//     getUsers: builder.query({
//       query: () => "/posts",
//       transformResponse: (responseData) => {
//         usersAdapter.setAll(initialState, responseData);
//         return usersAdapter.getSelectors().selectAll(store.getState());
//       },
//     }),
//   }),
// });

// export const { useGetUsersQuery } = extendedApi;

// export const { selectAll: selectAllUsers } = usersAdapter.getSelectors(
//   (state) => state.entities
// );

// /*

// // providesTags: (result, error, arg) => [
//       //   { type: "User", id: "LIST" },
//       //   ...result?.ids?.map((id) => ({ type: "User", id })),
//       // ],

// // export const selectUsersResult = extendedApi.endpoints.getUsers.select();

// // const selectUsersData = createSelector(
// //   selectUsersResult,
// //   (usersResult) => usersResult?.data
// // );

// */
