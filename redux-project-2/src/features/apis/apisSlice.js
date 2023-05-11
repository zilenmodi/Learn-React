import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userSetAll } from "../users/usersSlice";

export const api = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `users`,
      transformResponse: (responseData) => {
        return userSetAll(responseData);
      },
    }),
  }),
});

export const { useGetUsersQuery } = api;
