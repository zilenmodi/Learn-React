import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export default apiSlice = createApi({
  reducerPath: "myApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({}),
});
