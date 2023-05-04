import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/PostsList";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./features/navbar/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/posts",
        element: <PostsList />,
        errorElement: (
          <>
            <h1>Error</h1>
          </>
        ),
      },
      {
        path: "/posts/add",
        element: <AddPostForm />,
        errorElement: (
          <>
            <h1>Error</h1>
          </>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}>
          <AddPostForm />
          <PostsList />
        </RouterProvider>
      </Provider>
    </>
  );
}

export default App;
