import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root, { rootLoader } from "./routes/root";
import Products, { productLoader } from "./routes/products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "products/:productId",
        element: <Products />,
        loader: productLoader
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);