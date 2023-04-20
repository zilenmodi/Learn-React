import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root, { rootLoader } from "./routes/root";
import Products, { productLoader } from "./routes/products";
import EditProducts, { putProducts } from "./routes/EditProducts";
import { productsLoader } from "./routes/ProductsAll";
import MyComponent from "./routes/Hooks";

const AllProducts = React.lazy(() => import('./routes/ProductsAll'))

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>Dang!</div>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    errorElement: { ErrorBoundary },
    children: [
      {
        path: "products",
        // lazy: () => import('./routes/ProductsAll'),
        element: (
          <React.Suspense fallback={<h1>Loading...</h1>}>
            <AllProducts />
          </React.Suspense>
        ),
        loader: productsLoader,

      }, {
        path: "products/:productId",
        element: <Products />,
        loader: productLoader
      }, {
        path: "products/:productId/edit",
        element: <EditProducts />,
        loader: productLoader,
        action: putProducts
      },
      {
        path: "hooks/:id",
        element: <MyComponent />,
        loader: productLoader,
        action: putProducts
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);