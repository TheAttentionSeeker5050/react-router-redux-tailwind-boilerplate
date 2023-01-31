import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";

import Root from "../components/Root";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/",
            element:(<main>React App Content</main>)
        },
      ]
    },
  ]);

export default router;